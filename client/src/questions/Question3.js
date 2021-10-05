import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import ModalAlert from "../ModalAlert";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Question3() {
  const width = window.screen.width;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("q3checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q3checkedA")));
    }
    if (localStorage.getItem("q3checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q3checkedB")));
    }
    if (localStorage.getItem("q3checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q3checkedC")));
    }
    if (localStorage.getItem("q3checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q3checkedD")));
    }
    if (localStorage.getItem("q3checkedE")) {
      setCheckedE(JSON.parse(localStorage.getItem("q3checkedE")));
    }
    if (localStorage.getItem("q3checkedF")) {
      setCheckedF(JSON.parse(localStorage.getItem("q3checkedF")));
    }
    if (localStorage.getItem("q3")) {
      setInput(JSON.parse(localStorage.getItem("q3")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value: "Macroeconomic volatility",
      text: "(including in GDP, unemployment, inflation)",
    },
    {
      key: "B",
      value: "Climate change",
      text: "(including physical risks and transition risks such as policy & legal, markets, technology and reputation risks)",
    },
    {
      key: "C",
      value: "Social inequality",
      text: "(including those stemming from gender, race and ethnicity, wealth)",
    },
    {
      key: "D",
      value: "Geopolitical conflict",
      text: "(including resource and trade disputes, terrorism, interstate violence)",
    },
    {
      key: "E",
      value: "Cyber risks",
      text: "(including hacking, surveillance, disinformation)",
    },
    {
      key: "F",
      value: "Health risks",
      text: "(including COVID-19 and other pandemics, chronic illness, strains on mental health)",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Not concerned",
    },
    {
      key: "2",
      value: "Slightly concerned",
    },
    {
      key: "3",
      value: "Moderately concerned",
    },
    {
      key: "4",
      value: "Very concerned",
    },
    {
      key: "5",
      value: "Extremely concerned",
    },
    {
      key: "6",
      value: "Don't know",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [listOthers, setListOthers] = useState([]);
  const [listOfConcerns, setListOfConcerns] = useState([]);
  const [listAll, setListAll] = useState([]);
  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
  });
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
  });
  const [checkedC, setCheckedC] = useState({
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
  });
  const [checkedD, setCheckedD] = useState({
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,
  });
  const [checkedE, setCheckedE] = useState({
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,
  });
  const [checkedF, setCheckedF] = useState({
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = name + value;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (name === "A" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Macroeconomic volatility")) {
        listOfConcerns.push("A Macroeconomic volatility");
      }
    }
    if (name === "B" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Climate change")) {
        listOfConcerns.push("B Climate change");
      }
    }
    if (name === "C" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Social inequality")) {
        listOfConcerns.push("C Social inequality");
      }
    }
    if (name === "D" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Geopolitical conflict")) {
        listOfConcerns.push("D Geopolitical conflict");
      }
    }
    if (name === "E" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Cyber risks")) {
        listOfConcerns.push("E Cyber risks");
      }
    }
    if (name === "F" && (value === "3" || value === "4" || value === "5")) {
      if (!listOfConcerns.includes("Health risks")) {
        listOfConcerns.push("F Health risks");
      }
    }

    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));

      localStorage.setItem("q3checkedA", JSON.stringify(checkedA));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));

      localStorage.setItem("q3checkedB", JSON.stringify(checkedB));
    }
    if (name === "C") {
      Object.keys(checkedC)
        .filter((v) => v === index)
        .map((v) => (checkedC[v] = true));
      Object.keys(checkedC)
        .filter((v) => v !== index)
        .map((v) => (checkedC[v] = false));

      localStorage.setItem("q3checkedC", JSON.stringify(checkedC));
    }
    if (name === "D") {
      Object.keys(checkedD)
        .filter((v) => v === index)
        .map((v) => (checkedD[v] = true));
      Object.keys(checkedD)
        .filter((v) => v !== index)
        .map((v) => (checkedD[v] = false));

      localStorage.setItem("q3checkedD", JSON.stringify(checkedD));
    }
    if (name === "F") {
      Object.keys(checkedF)
        .filter((v) => v === index)
        .map((v) => (checkedF[v] = true));
      Object.keys(checkedF)
        .filter((v) => v !== index)
        .map((v) => (checkedF[v] = false));

      localStorage.setItem("q3checkedF", JSON.stringify(checkedF));
    }
    if (name === "E") {
      Object.keys(checkedE)
        .filter((v) => v === index)
        .map((v) => (checkedE[v] = true));
      Object.keys(checkedE)
        .filter((v) => v !== index)
        .map((v) => (checkedE[v] = false));

      localStorage.setItem("q3checkedE", JSON.stringify(checkedE));
    }
  };

  function goBack() {
    history.push("/eng-q2");
  }

  function handleSubmit(e) {
    if (input.A && input.B && input.C && input.D && input.E && input.F) {
      localStorage.setItem("q3", JSON.stringify(input));
      localStorage.setItem("q3-concerns", JSON.stringify(listOfConcerns));

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
      };

      axios.post("/allinputs", data);

      if (listOfConcerns.length === 0) {
        history.push("/eng-q5");
      } else {
        history.push("/eng-q4");
      }
    } else {
      handleShow();
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q3">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 4).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 4).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <div className="left-align-text">
              <p>
                How concerned are you about the following global threats
                negatively impacting your company over the next 12 months?
              </p>
              <i>
                <p className="question">
                  PLEASE SCROLL THE TABLE IF REQUIRED AND SELECT ONE RESPONSE
                  FOR EACH STATEMENT
                </p>
              </i>
            </div>
          </div>
          {width <= 768 ? (
            <div>
              {rows.map((row) => {
                return (
                  <>
                    <div className="left-align-text">
                      <p className="question" style={{ color: "#db536a" }}>
                        <strong>{row.value}</strong>
                      </p>
                      <p>{row.text}</p>
                      {columns.map((col) => {
                        return (
                          <div className="m-div">
                            <label className="m-label">
                              <input
                                type="radio"
                                name={row.key}
                                className="m-input"
                                value={col.value}
                                onChange={handleChange}
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
                                    : checkedF[`${row.key}${col.key}`]
                                }
                                autoComplete="on"
                              ></input>
                              {col.value}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </>
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
                  type="button"
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
              <div style={{ overflow: "auto", height: "350px" }}>
                <table className="table">
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "#fff",
                    }}
                  >
                    <tr style={{ position: "sticky", top: 0 }}>
                      <td colSpan="2"></td>
                      {columns.map((col) => {
                        return (
                          <td key={col.key}>
                            <strong>{col.value}</strong>
                          </td>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr key={row.key} className="table-row">
                          <td>{row.key}</td>
                          <td className="left-align-text">
                            <p style={{ margin: 0, padding: 0 }}>
                              <strong>{row.value}</strong>
                            </p>
                            <p style={{ margin: 0, padding: 0 }}>{row.text}</p>
                          </td>
                          {columns.map((col) => {
                            return (
                              <td
                                className="input-cell"
                                style={{ width: "100px" }}
                              >
                                <label className="label-cell">
                                  <input
                                    type="radio"
                                    name={row.key}
                                    value={col.key}
                                    onChange={handleChange}
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
                                        : checkedF[`${row.key}${col.key}`]
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
              </div>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={goBack}
                >
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  type="button"
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
