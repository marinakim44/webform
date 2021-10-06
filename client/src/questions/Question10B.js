import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question10B() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Attracting and/or retaining employees",
    },
    {
      key: "B",
      value: "Satisfying investor demands",
    },
    {
      key: "C",
      value: "Meeting customer expectations",
    },
    {
      key: "D",
      value: "Complying with government and/or intergovernmental targets",
    },
    {
      key: "E",
      value: "Mitigating climate change risks",
    },
    {
      key: "F",
      value: "Driving product/service innovation",
    },
    {
      key: "G",
      value: "Keeping pace with competitor commitments",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Not influential",
    },
    {
      key: 2,
      value: "Slightly influential",
    },
    {
      key: 3,
      value: "Moderately influential",
    },
    {
      key: 4,
      value: "Very influential",
    },
    {
      key: 5,
      value: "Extremely influential",
    },
    {
      key: 6,
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
  });

  const [checked, setChecked] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    if (!checked.includes(name)) {
      checked.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 7) {
      handleShow();
    } else {
      localStorage.setItem("q10", JSON.stringify(input));

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("countries")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q12");
    }
  }

  return (
    <Route path="/eng-q10b">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 11).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 11).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            How influential are the following factors behind the carbon-neutral
            and/or net-zero commitment your company is developing?
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
          </p>
        </div>

        {width <= 768 ? (
          <div>
            {rows.map((row) => {
              return (
                <div>
                  <strong>
                    <p className="question" style={{ color: "#db536a" }}>
                      {row.key}) {row.value}
                    </p>
                  </strong>
                  {columns.map((col) => {
                    return (
                      <div className="m-div left-align-text">
                        <label className="m-label">
                          <input
                            type="radio"
                            name={row.key}
                            value={col.value}
                            onClick={handleClick}
                            className="m-input"
                          ></input>
                          {col.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <form>
            <table className="table">
              <tbody>
                <tr>
                  <th colSpan="2"></th>
                  {columns.map((column) => {
                    return <th key={column.value}>{column.value}</th>;
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr
                      key={row.key}
                      className="table-row"
                      style={{ padding: 0 }}
                    >
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td key={col.key} className="input-cell">
                            <label className="label-cell">
                              <input
                                type="radio"
                                name={row.key}
                                value={col.value}
                                onClick={handleClick}
                              ></input>
                            </label>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        )}
        <div className="back-next-btns">
          <Button
            variant="secondary"
            className="back-btn"
            onClick={() => history.goBack()}
          >
            <i className="fas fa-chevron-left back-arrow"></i>
            Back
          </Button>

          <Button variant="danger" className="next-btn" onClick={handleSubmit}>
            Next
            <i class="fas fa-chevron-right next-arrow"></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
