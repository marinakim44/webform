import { Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question21() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q21-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q21-checkedA")));
    }
    if (localStorage.getItem("q21-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q21-checkedB")));
    }
    if (localStorage.getItem("q21")) {
      setInput(JSON.parse(localStorage.getItem("q21")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Confidence in revenue growth - next 12 months",
    },
    {
      key: "B",
      value: "Confidence in revenue growth - next three years",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Not confident",
    },
    {
      key: "2",
      value: "Slightly confident",
    },
    {
      key: "3",
      value: "Moderately confident",
    },
    {
      key: "4",
      value: "Very confident",
    },
    {
      key: "5",
      value: "Extremely confident",
    },
    {
      key: "6",
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
  });

  const [checked, setChecked] = useState([]);
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
  }

  useEffect(() => {
    localStorage.setItem("q21-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q21-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q21", JSON.stringify(input));
  }, [input, checkedA, checkedB, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((el) => el[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q22");

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
        q21: JSON.parse(localStorage.getItem("q21")),
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
    <Route exact path="/eng-q21">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 22).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 22).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="question">
            How confident are you about your company’s prospects for revenue
            growth over: the next 12 months? the next three years?
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
                  <strong>
                    <p className="question" style={{ color: "#db536a" }}>
                      {row.key}) {row.value}
                    </p>
                  </strong>
                  {columns.map((col) => {
                    return (
                      <div className="m-div">
                        <label className="m-label">
                          <input
                            type="radio"
                            name={row.key}
                            value={col.key}
                            onClick={handleClick}
                            className="m-input"
                            checked={
                              row.key === "A"
                                ? checkedA[`${row.key}${col.key}`]
                                : row.key === "B"
                                ? checkedB[`${row.key}${col.key}`]
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
          </div>
        ) : (
          <table className="table">
            <tbody>
              <tr>
                <td colSpan="2"></td>

                {columns.map((col) => {
                  return (
                    <td style={{ width: "150px" }}>
                      <strong>{col.value}</strong>
                    </td>
                  );
                })}
              </tr>
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
        )}

        <div class="back-next-btns">
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
