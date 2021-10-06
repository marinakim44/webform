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
    if (localStorage.getItem("q17-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q17-checkedA")));
    }
    if (localStorage.getItem("q17-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q17-checkedB")));
    }
    if (localStorage.getItem("q17-checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q17-checkedC")));
    }
    if (localStorage.getItem("q17-checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q17-checkedD")));
    }
    if (localStorage.getItem("q17-checkedE")) {
      setCheckedE(JSON.parse(localStorage.getItem("q17-checkedE")));
    }
    if (localStorage.getItem("q17-checkedF")) {
      setCheckedF(JSON.parse(localStorage.getItem("q17-checkedF")));
    }
    if (localStorage.getItem("q17-checkedG")) {
      setCheckedG(JSON.parse(localStorage.getItem("q17-checkedG")));
    }
    if (localStorage.getItem("q17")) {
      setInput(JSON.parse(localStorage.getItem("q17")));
    }
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
  const [checkedE, setCheckedE] = useState({
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,
    E7: false,
    E8: false,
  });
  const [checkedF, setCheckedF] = useState({
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,
    F8: false,
  });
  const [checkedG, setCheckedG] = useState({
    G1: false,
    G2: false,
    G3: false,
    G4: false,
    G5: false,
    G6: false,
    G7: false,
    G8: false,
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
    if (!checked.includes(name)) {
      checked.push(name);
    }
    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));
    }
    if (name === "C") {
      Object.keys(checkedC)
        .filter((v) => v === index)
        .map((v) => (checkedC[v] = true));
      Object.keys(checkedC)
        .filter((v) => v !== index)
        .map((v) => (checkedC[v] = false));
    }
    if (name === "D") {
      Object.keys(checkedD)
        .filter((v) => v === index)
        .map((v) => (checkedD[v] = true));
      Object.keys(checkedD)
        .filter((v) => v !== index)
        .map((v) => (checkedD[v] = false));
    }
    if (name === "E") {
      Object.keys(checkedE)
        .filter((v) => v === index)
        .map((v) => (checkedE[v] = true));
      Object.keys(checkedE)
        .filter((v) => v !== index)
        .map((v) => (checkedE[v] = false));
    }
    if (name === "F") {
      Object.keys(checkedF)
        .filter((v) => v === index)
        .map((v) => (checkedF[v] = true));
      Object.keys(checkedF)
        .filter((v) => v !== index)
        .map((v) => (checkedF[v] = false));
    }
    if (name === "G") {
      Object.keys(checkedG)
        .filter((v) => v === index)
        .map((v) => (checkedG[v] = true));
      Object.keys(checkedG)
        .filter((v) => v !== index)
        .map((v) => (checkedG[v] = false));
    }
  }

  useEffect(() => {
    localStorage.setItem("q17-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q17-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q17-checkedC", JSON.stringify(checkedC));
    localStorage.setItem("q17-checkedD", JSON.stringify(checkedD));
    localStorage.setItem("q17-checkedE", JSON.stringify(checkedE));
    localStorage.setItem("q17-checkedF", JSON.stringify(checkedF));
    localStorage.setItem("q17-checkedG", JSON.stringify(checkedG));
    localStorage.setItem("q17", JSON.stringify(input));
  }, [
    input,
    checkedA,
    checkedB,
    checkedC,
    checkedD,
    checkedE,
    checkedF,
    checkedG,
    checked,
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !input.A &&
      !input.B &&
      !input.C &&
      !input.D &&
      !input.E &&
      !input.F &&
      !input.G
    ) {
      handleShow();
    } else {
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
        <div className="main">
          <div className="sticky-sub-div">
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
              className="question"
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
                              className="m-input"
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
                                  : row.key === "E"
                                  ? checkedE[`${row.key}${col.key}`]
                                  : row.key === "F"
                                  ? checkedF[`${row.key}${col.key}`]
                                  : row.key === "G"
                                  ? checkedG[`${row.key}${col.key}`]
                                  : ""
                              }
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
              <div style={{ overflow: "auto", height: "420px" }}>
                <Table bordered className="table">
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "white",
                      verticalAlign: "middle",
                    }}
                  >
                    <tr
                      style={{
                        fontWeight: "bold",
                        color: "#db536a",
                      }}
                    >
                      <td colSpan="2" rowSpan="2"></td>
                      <td colSpan="3">Less often</td>
                      <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                        Every year
                      </td>
                      <td colSpan="3">More often</td>
                      <td rowSpan="2" style={{ verticalAlign: "middle" }}>
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
                          return <td>{column.value}</td>;
                        })}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr className="table-row">
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
                                    onClick={handleClick}
                                    checked={
                                      row.key === "A"
                                        ? checkedA[`${row.key}${col.key}`]
                                        : row.key === "B"
                                        ? checkedB[`${row.key}${col.key}`]
                                        : row.key === "C"
                                        ? checkedC[`${row.key}${col.key}`]
                                        : row.key === "D"
                                        ? checkedD[`${row.key}${col.key}`]
                                        : row.key === "E"
                                        ? checkedE[`${row.key}${col.key}`]
                                        : row.key === "F"
                                        ? checkedF[`${row.key}${col.key}`]
                                        : row.key === "G"
                                        ? checkedG[`${row.key}${col.key}`]
                                        : ""
                                    }
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
              </div>
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
