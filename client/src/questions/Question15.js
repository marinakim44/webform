import { Route, useHistory } from "react-router-dom";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question15({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q15-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q15-checked")));
    }
    if (localStorage.getItem("q15")) {
      setInput(JSON.parse(localStorage.getItem("q15")));
    }
  }, []);
  const rows =
    lng === "English"
      ? [
          {
            key: "A",
            value:
              "Approve/green-light major initiatives once an idea has been proposed",
          },
          {
            key: "B",
            value: "Commit significant resources to new major initiatives",
          },
        ]
      : [
          {
            key: "A",
            value:
              "Одобрить/дать зеленый свет крупным инициативам после того, как идея была предложена",
          },
          {
            key: "B",
            value: "Выделить значительные ресурсы на новые крупные инициативы",
          },
        ];

  const columns =
    lng === "English"
      ? [
          {
            key: "1",
            value: "Up to three months",
          },
          {
            key: "2",
            value: "4-6 months",
          },
          {
            key: "3",
            value: "7-12 months",
          },
          {
            key: "4",
            value: "13-18 months",
          },
          {
            key: "5",
            value: "19-24 months",
          },
          {
            key: "6",
            value: "25-36 months",
          },
          {
            key: "7",
            value: "More than 36 months",
          },
          {
            key: "8",
            value: "Don't know",
          },
        ]
      : [
          {
            key: "1",
            value: "До 3 месяцев",
          },
          {
            key: "2",
            value: "4-6 месяца",
          },
          {
            key: "3",
            value: "7-12 месяцев",
          },
          {
            key: "4",
            value: "13-18 месяцев",
          },
          {
            key: "5",
            value: "19-24 месяца",
          },
          {
            key: "6",
            value: "25-36 месяцев",
          },
          {
            key: "7",
            value: "Более 36 месяцев",
          },
          {
            key: "8",
            value: "Затрудняюсь ответить",
          },
        ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState({
    A: "",
    B: "",
  });

  const [checked, setChecked] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
    A7: false,
    A8: false,

    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
    B7: false,
    B8: false,
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

    Object.entries(input).forEach((el) => {
      Object.keys(checked)
        .filter((y) => y.slice(0, 1) === name && y === index)
        .forEach((z) => {
          checked[z] = true;
        });
    });

    Object.entries(input).forEach((el) => {
      Object.keys(checked)
        .filter((y) => y.slice(0, 1) === name && y !== index)
        .forEach((z) => {
          checked[z] = false;
        });
    });
  }

  useEffect(() => {
    localStorage.setItem("q15", JSON.stringify(input));
    localStorage.setItem("q15-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q16");

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
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status === 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Route path="/eng-q15">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 16).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 16).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                <strong>
                  Typically, how long does it take for your company to:
                </strong>
                <br />- approve/green-light major initiatives once an idea has
                been proposed?
                <br />- commit significant resources to new major initiatives?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                <strong>
                  Обычно сколько времени требуется вашей компании, чтобы:
                </strong>
                <br />
                <span>
                  - одобрить/дать зеленый свет крупным инициативам после того,
                  как идея была предложена?
                </span>
                <br />
                <span>
                  - выделить значительные ресурсы на новые крупные инициативы?
                </span>
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
                <div key={row.key}>
                  <p className="question">
                    <strong style={{ color: "#db536a" }}>
                      {row.key}) {row.value}
                    </strong>
                  </p>
                  {columns.map((col) => {
                    return (
                      <div className="m-div" key={col.key}>
                        <label className="m-label">
                          <input
                            type="radio"
                            name={row.key}
                            value={col.key}
                            onChange={handleClick}
                            className="m-input"
                            checked={checked[`${row.key}${col.key}`]}
                          />
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
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return (
                      <td key={col.key}>
                        <strong>{col.value}</strong>
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr className="table-row" key={row.key}>
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell" key={col.key}>
                            <label className="label-cell">
                              <input
                                type="radio"
                                name={row.key}
                                value={col.key}
                                onChange={handleClick}
                                checked={checked[`${row.key}${col.key}`]}
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

        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
