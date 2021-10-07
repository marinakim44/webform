import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question12() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q12checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q12checkedA")));
    }
    if (localStorage.getItem("q12checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q12checkedB")));
    }
    if (localStorage.getItem("q12checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q12checkedC")));
    }
    if (localStorage.getItem("q12checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q12checkedD")));
    }
    if (localStorage.getItem("q12")) {
      setInput(JSON.parse(localStorage.getItem("q12")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "The industry’s long-term trends",
    },
    {
      key: "B",
      value: "The regulatory environment(s) in which my company operates",
    },
    {
      key: "C",
      value:
        "Macro environmental forces (including demographic, cultural, environmental, technological)",
    },
    {
      key: "D",
      value: "My company’s specific assets, capabilities and relationships",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Very unfavourable",
    },
    {
      key: 2,
      value: "Moderately unfavourable",
    },
    {
      key: 3,
      value: "Slightly unfavourable",
    },
    {
      key: 4,
      value: "Neither favourable nor unfavourable",
    },
    {
      key: 5,
      value: "Slightly favourable",
    },
    {
      key: 6,
      value: "Moderately favourable",
    },
    {
      key: 7,
      value: "Very favourable",
    },
    {
      key: 8,
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [checked, setChecked] = useState([]);
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
    A7: false,
    A8: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
    B7: false,
    B8: false,
  });
  const [checkedC, setCheckedC] = useState({
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
  });
  const [checkedD, setCheckedD] = useState({
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,
    D7: false,
    D8: false,
  });

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    // if (!checked.includes(name)) {
    //   checked.push(name);
    // }

    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));

      localStorage.setItem("q12checkedA", JSON.stringify(checkedA));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));

      localStorage.setItem("q12checkedB", JSON.stringify(checkedB));
    }
    if (name === "C") {
      Object.keys(checkedC)
        .filter((v) => v === index)
        .map((v) => (checkedC[v] = true));
      Object.keys(checkedC)
        .filter((v) => v !== index)
        .map((v) => (checkedC[v] = false));

      localStorage.setItem("q12checkedC", JSON.stringify(checkedC));
    }
    if (name === "D") {
      Object.keys(checkedD)
        .filter((v) => v === index)
        .map((v) => (checkedD[v] = true));
      Object.keys(checkedD)
        .filter((v) => v !== index)
        .map((v) => (checkedD[v] = false));

      localStorage.setItem("q12checkedD", JSON.stringify(checkedD));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.A && !input.B && !input.C && !input.D) {
      handleShow();
    } else {
      localStorage.setItem("q12", JSON.stringify(input));
      history.push("/eng-q13");

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
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q12">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 13).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 13).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              How favourable are the following factors with regard to your
              company’s ability to reduce greenhouse gas (GHG) emissions? <br />
            </p>
            <p
              className="left-align-text question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>
                (favourable factors are those that may help your company,
                unfavourable factors are those that may hinder your company)
              </i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div>
                    <p className="question" style={{ color: "#db536a" }}>
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
                              value={col.key}
                              onChange={handleClick}
                              className="m-input"
                              checked={
                                row.key === "A"
                                  ? checkedA[`${row.key}${col.key}`]
                                  : row.key === "B"
                                  ? checkedB[`${row.key}${col.key}`]
                                  : row.key === "C"
                                  ? checkedC[`${row.key}${col.key}`]
                                  : row.key === "D"
                                  ? checkedD[`${row.key}${col.key}`]
                                  : ""
                              }
                            />
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
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
            <form>
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2"></th>
                    {columns.map((column) => {
                      return <th>{column.value}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr>
                        <td>{row.key}</td>
                        <td className="left-align-text">{row.value}</td>
                        {columns.map((col) => {
                          return (
                            <td className="input-cell">
                              <label className="label-cell">
                                <input
                                  type="radio"
                                  name={row.key}
                                  value={col.key}
                                  onChange={handleClick}
                                  checked={
                                    row.key === "A"
                                      ? checkedA[`${row.key}${col.key}`]
                                      : row.key === "B"
                                      ? checkedB[`${row.key}${col.key}`]
                                      : row.key === "C"
                                      ? checkedC[`${row.key}${col.key}`]
                                      : row.key === "D"
                                      ? checkedD[`${row.key}${col.key}`]
                                      : ""
                                  }
                                  autoComplete="on"
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
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
