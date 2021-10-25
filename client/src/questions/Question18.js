import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question18({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q18-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q18-checkedA")));
    }
    if (localStorage.getItem("q18-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q18-checkedB")));
    }
    if (localStorage.getItem("q18-checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q18-checkedC")));
    }
    if (localStorage.getItem("q18-checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q18-checkedD")));
    }
    if (localStorage.getItem("q18")) {
      setInput(JSON.parse(localStorage.getItem("q18")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows =
    lng === "English"
      ? [
          {
            key: "A",
            value:
              "My company is increasingly concerned about the reputational risks associated with the amount of taxes it pays",
          },
          {
            key: "B",
            value: "My company aims to minimise the amount of taxes it pays",
          },
          {
            key: "C",
            value:
              "My company effectively communicates to the public all the taxes it pays (e.g., income, payroll, property)",
          },
          {
            key: "D",
            value: "My company’s board regularly reviews its tax strategy",
          },
        ]
      : [
          {
            key: "A",
            value:
              "Моя компания все больше обеспокоена репутационными рисками, связанными с суммой уплачиваемых ею налогов",
          },
          {
            key: "B",
            value:
              "Моя компания стремится минимизировать сумму налогов, которые она платит",
          },
          {
            key: "C",
            value:
              "Моя компания официально придает огласке все налоги, которые она платит (напр., подоходный налог, налог на фонд заработной платы, налог на имущество) ",
          },
          {
            key: "D",
            value:
              "Правление моей компании регулярно анализирует ее налоговую стратегию",
          },
        ];

  const columns =
    lng === "English"
      ? [
          {
            key: 1,
            value: "Strongly disagree",
          },
          {
            key: 2,
            value: "Moderately disagree",
          },
          {
            key: 3,
            value: "Slightly disagree",
          },
          {
            key: 4,
            value: "Neither agree nor disagree",
          },
          {
            key: 5,
            value: "Slightly agree",
          },
          {
            key: 6,
            value: "Moderately agree",
          },
          {
            key: 7,
            value: "Strongly agree",
          },
          {
            key: 8,
            value: "Don't know",
          },
        ]
      : [
          {
            key: 1,
            value: "Категорически не согласен",
          },
          {
            key: 2,
            value: "Умеренно не согласен",
          },
          {
            key: 3,
            value: "Немного не согласен",
          },
          {
            key: 4,
            value: "Не могу сказать определенно",
          },
          {
            key: 5,
            value: "Немного согласен",
          },
          {
            key: 6,
            value: "Умеренно согласен",
          },
          {
            key: 7,
            value: "Полностью согласен",
          },
          {
            key: 8,
            value: "Затрудняюсь ответить",
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
  }

  useEffect(() => {
    localStorage.setItem("q18-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q18-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q18-checkedC", JSON.stringify(checkedC));
    localStorage.setItem("q18-checkedD", JSON.stringify(checkedD));
    localStorage.setItem("q18", JSON.stringify(input));
  }, [input, checkedA, checkedB, checkedC, checkedD, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      localStorage.setItem("q18", JSON.stringify(input));

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
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
        .catch((err) => console.log(err.response.data));

      history.push("/eng-q19");
    }
  }

  return (
    <Route path="/eng-q18">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 19).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 19).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              {" "}
              <p className="question">
                Thinking about the taxes your company pays, to what extent do
                you agree/disagree with the following statements?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                Если рассмотреть налоги, которые платит ваша компания, то в
                какой степени вы согласны / не согласны со следующими
                утверждениями?
              </p>
              <p className="question-i">
                <i>ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА</i>
              </p>
            </>
          )}
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
            <div style={{ overflow: "auto", height: "420px" }}>
              <table className="table">
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <tr>
                    <td colSpan="2"></td>
                    {columns.map((col) => {
                      return (
                        <td style={{ verticalAlign: "middle" }}>
                          <strong>{col.value}</strong>
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
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
