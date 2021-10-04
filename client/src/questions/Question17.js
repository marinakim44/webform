import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question17() {
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
      value: "Initiate investments in new projects",
    },
    {
      key: "B",
      value: "Stop low-potential or nonaligned projects",
    },
    {
      key: "C",
      value: "Invest in high-potential projects",
    },
    {
      key: "D",
      value: "Scale-up high-performing small businesses",
    },
    {
      key: "E",
      value: "Trim low-performing large businesses",
    },
    {
      key: "F",
      value: "Divest businesses",
    },
    {
      key: "G",
      value: "Acquire businesses",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Every four years or less frequently",
    },
    {
      key: 2,
      value: "Every three years",
    },
    {
      key: 3,
      value: "Every two years",
    },
    {
      key: 4,
      value: "Every year",
    },
    {
      key: 5,
      value: "Twice a year",
    },
    {
      key: 6,
      value: "Three times a year",
    },
    {
      key: 7,
      value: "Four times a year or more frequently",
    },
    {
      key: 8,
      value: "Not applicable / Don't know",
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
      localStorage.setItem("q17", JSON.stringify(input));
      history.push("/eng-q18");

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
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q17">
        <div className="main" style={{ height: "100%" }}>
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
            <h2 className="percent">
              {Math.round(((100 / 39) * 18).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 18).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              How frequently does your company typically engage in the following
              processes?
            </p>
            <p
              className="left-align-text"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div>
                    <p className="question">
                      <strong>
                        {row.key}) {row.value}
                      </strong>
                    </p>
                    {columns.map((col) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="radio"
                              name={row.key}
                              value={col.value}
                              style={{ marginRight: "8px" }}
                              onChange={handleClick}
                            ></input>
                            {col.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i class="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
            <form>
              <Table bordered className="table">
                <tbody>
                  <tr style={{ fontWeight: "bold", color: "#dc3545" }}>
                    <td colSpan="2" rowSpan="2"></td>
                    <td colSpan="3">Less often</td>
                    <td
                      rowSpan="2"
                      style={{ width: "120px", verticalAlign: "middle" }}
                    >
                      Every year
                    </td>
                    <td colSpan="3">More often</td>
                    <td
                      rowSpan="2"
                      style={{ width: "120px", verticalAlign: "middle" }}
                    >
                      Not applicable / Don't know
                    </td>
                  </tr>
                  <tr>
                    {columns
                      .filter(
                        (col) =>
                          col.value !== "Every year" &&
                          col.value !== "Not applicable / Don't know"
                      )
                      .map((column) => {
                        return (
                          <td style={{ width: "120px" }}>{column.value}</td>
                        );
                      })}
                  </tr>

                  {rows.map((row) => {
                    return (
                      <tr className="table-row">
                        <td>{row.key}</td>
                        <td className="left-align-text">{row.value}</td>
                        {columns.map((column) => {
                          return (
                            <td className="input-cell">
                              <label className="label-cell">
                                <input
                                  type="radio"
                                  name={row.key}
                                  value={column.value}
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
              </Table>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i class="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
