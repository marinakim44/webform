import { Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question20() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q20-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q20-checkedA")));
    }
    if (localStorage.getItem("q20-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q20-checkedB")));
    }
    if (localStorage.getItem("q20-checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q20-checkedC")));
    }
    if (localStorage.getItem("q20-checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q20-checkedD")));
    }
    if (localStorage.getItem("q20-checkedE")) {
      setCheckedE(JSON.parse(localStorage.getItem("q20-checkedE")));
    }
    if (localStorage.getItem("q20-checkedF")) {
      setCheckedF(JSON.parse(localStorage.getItem("q20-checkedF")));
    }
    if (localStorage.getItem("q20")) {
      setInput(JSON.parse(localStorage.getItem("q20")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      title: "LOYALTY (SHALLOW DEPENDENCE)",
      value:
        "Switch to a competitor’s products/services (e.g., if ours are unavailable, if a competitor offers discount/promotion)",
    },
    {
      key: "B",
      title: "RELIABILITY/QUALITY (SHALLOW INTERDEPENDENCE)",
      value: "Recommend our products/services to family or friends",
    },
    {
      key: "C",
      title: "FORESIGHT (DEEP INTERDEPENDENCE)",
      value: "Resist new updates or changes to our products/services",
    },
    {
      key: "D",
      title: "INTUITION (DEEP INTERDEPENDENCE)",
      value: "Provide feedback that our products/services exceed expectations",
    },
    {
      key: "E",
      title: "COMPETENCY (SHALLOW DEPENDENCE)",
      value:
        "Update their personal preferences with our company to receive a more tailored experience",
    },
    {
      key: "F",
      title: "BENEVOLENCE (DEEP DEPENDENCE)",
      value:
        "Choose our products/services primarily because of the company’s values (e.g., environmental, social responsibility)",
    },
  ];

  const columns = [
    {
      key: 1,
      title: "Almost never",
      value: "0-5% of the time",
    },
    {
      key: 2,
      title: "Rarely",
      value: "6-20% of the time",
    },
    {
      key: 3,
      title: "Occasionally",
      value: "21-40% of the time",
    },
    {
      key: 4,
      title: "Sometimes",
      value: "41-60% of the time",
    },
    {
      key: 5,
      title: "Frequently",
      value: "61-80% of the time",
    },
    {
      key: 6,
      title: "Usually",
      value: "81-94% of the time",
    },
    {
      key: 7,
      title: "Almost always",
      value: "95-100% of the time",
    },
    {
      key: 8,
      title: "Don't know",
      value: "",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
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

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prev) => {
      return {
        ...prev,
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
    //SAVING PREVIOUS INPUT
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));
    }
    //SAVING PREVIOUS INPUT
    if (name === "C") {
      Object.keys(checkedC)
        .filter((v) => v === index)
        .map((v) => (checkedC[v] = true));
      Object.keys(checkedC)
        .filter((v) => v !== index)
        .map((v) => (checkedC[v] = false));
    }
    //SAVING PREVIOUS INPUT
    if (name === "D") {
      Object.keys(checkedD)
        .filter((v) => v === index)
        .map((v) => (checkedD[v] = true));
      Object.keys(checkedD)
        .filter((v) => v !== index)
        .map((v) => (checkedD[v] = false));
    }
    //SAVING PREVIOUS INPUT
    if (name === "E") {
      Object.keys(checkedE)
        .filter((v) => v === index)
        .map((v) => (checkedE[v] = true));
      Object.keys(checkedE)
        .filter((v) => v !== index)
        .map((v) => (checkedE[v] = false));
    }
    //SAVING PREVIOUS INPUT
    if (name === "F") {
      Object.keys(checkedF)
        .filter((v) => v === index)
        .map((v) => (checkedF[v] = true));
      Object.keys(checkedF)
        .filter((v) => v !== index)
        .map((v) => (checkedF[v] = false));
    }
  }

  useEffect(() => {
    localStorage.setItem("q20-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q20-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q20-checkedC", JSON.stringify(checkedC));
    localStorage.setItem("q20-checkedD", JSON.stringify(checkedD));
    localStorage.setItem("q20-checkedE", JSON.stringify(checkedE));
    localStorage.setItem("q20-checkedF", JSON.stringify(checkedF));
    localStorage.setItem("q20", JSON.stringify(input));
  }, [
    input,
    checkedA,
    checkedB,
    checkedC,
    checkedD,
    checkedE,
    checkedF,
    checked,
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((el) => el[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q21");

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
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q20: JSON.parse(localStorage.getItem("q20")),
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Route path="/eng-q20">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 21).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 21).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="question">
            Thinking about the customers who have regularly purchased your
            products/services, how often would you say they take the following
            actions:
          </p>
          <p className="question-i">
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
                      {row.key}) {row.title}
                    </strong>
                  </p>
                  <p>{row.value}</p>
                  {columns
                    .filter((col) => col.key !== 8)
                    .map((col) => {
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
                                  : row.key === "E"
                                  ? checkedE[`${row.key}${col.key}`]
                                  : row.key === "F"
                                  ? checkedF[`${row.key}${col.key}`]
                                  : ""
                              }
                            />
                            <strong>{col.title}</strong> ({col.value})
                          </label>
                        </div>
                      );
                    })}
                  {columns
                    .filter((col) => col.key === 8)
                    .map((col) => {
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
                                  : row.key === "E"
                                  ? checkedE[`${row.key}${col.key}`]
                                  : row.key === "F"
                                  ? checkedF[`${row.key}${col.key}`]
                                  : ""
                              }
                            />
                            <strong>{col.title}</strong>
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
            <div style={{ overflow: "auto", height: "60vh" }}>
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
                    <th colSpan="2"></th>

                    {columns.map((col) => {
                      return (
                        <td style={{ verticalAlign: "top" }}>
                          <p>
                            <strong>{col.title}</strong>
                            <br />
                            {col.value}
                          </p>
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr className="table-row">
                        <td>{row.key}</td>
                        <td className="left-align-text">
                          <strong>{row.title}</strong>
                          <br />
                          {row.value}
                        </td>
                        {columns.map((col) => {
                          return (
                            <td className="input-cell">
                              <label
                                className="label-cell"
                                style={{ height: "40px" }}
                              >
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
              </table>
            </div>
          </form>
        )}
        <div className="back-next-btns">
          <Button
            variant="secondary"
            className="back-btn"
            onClick={() => history.goBack()}
          >
            <i
              className="fas fa-chevron-left"
              style={{ marginRight: "8px" }}
            ></i>
            Back
          </Button>

          <Button variant="danger" className="next-btn" onClick={handleSubmit}>
            Next
            <i
              className="fas fa-chevron-right"
              style={{ marginLeft: "8px" }}
            ></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
