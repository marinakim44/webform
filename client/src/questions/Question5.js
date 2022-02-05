import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question5({ lng }) {
  const width = window.screen.width;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q5-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q5-checked")));
    }
    if (localStorage.getItem("q5")) {
      setInput(JSON.parse(localStorage.getItem("q5")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value:
        lng === "English"
          ? "Carbon-neutral commitment"
          : "Обязательство по углеродной нейтральности",
      text:
        lng === "English"
          ? "Achieved when a company offsets its greenhouse gas (GHG) emissions to zero (e.g., by purchasing voluntary carbon credits)"
          : "Достигается, когда компания сводит к нулю выбросы парниковых газов (ПГ) (напр., путем покупки добровольных квот на выбросы углерода)",
    },
    {
      key: "B",
      value:
        lng === "English"
          ? "Net-zero commitment"
          : "Обязательство по нулевым выбросам",
      text:
        lng === "English"
          ? "Achieved when a company reduces its greenhouse gas (GHG) emissions to near zero and removes its remaining unavoidable emissions"
          : "Достигается, когда компания сокращает выбросы парниковых газов (ПГ) почти до нуля и устраняет оставшиеся неизбежные выбросы",
    },
  ];
  const columns = [
    {
      key: "1",
      value:
        lng === "English"
          ? "Yes, my company has made this commitment"
          : "Да, моя компания приняла это обязательство",
    },
    {
      key: "2",
      value:
        lng === "English"
          ? "No, but my company is working toward making this commitment"
          : "Нет, но моя компания работает над принятием этого обязательства",
    },
    {
      key: "3",
      value:
        lng === "English"
          ? "No, my company has not made this commitment"
          : "Нет, моя компания не принимала этого обязательства",
    },
    {
      key: "4",
      value: lng === "English" ? "Don't know" : "Затрудняюсь ответить",
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

    B1: false,
    B2: false,
    B3: false,
    B4: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setChecked((prev) => {
      return {
        ...prev,
        [index]: true,
      };
    });

    Object.keys(checked)
      .filter((el) => el === index)
      .forEach((el) => {
        checked[el] = true;
      });
    Object.keys(checked)
      .filter((el) => el !== index && el.slice(0, 1) === name)
      .forEach((el) => {
        checked[el] = false;
      });
  }

  useEffect(() => {
    localStorage.setItem("q5", JSON.stringify(input));
    localStorage.setItem("q5-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (input.A && input.B) {
      localStorage.setItem("q5-carbonNeutral", input.A);
      localStorage.setItem("q5-netZero", input.B);

      const data = {
        uuid: localStorage.getItem("uuid"),
        date: localStorage.getItem("date"),
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

      if (input.B === "1") {
        history.push("/eng-q6");
      } else if (input.B === "2") {
        history.push("/eng-q7");
      } else if (input.B === "3") {
        if (input.A === "1") {
          history.push("/eng-q10a");
        } else if (input.A === "2") {
          history.push("/eng-q10b");
        } else if (input.A === "4" || input.A === "3") {
          history.push("/eng-q11");
        }
      } else if (input.B === "4") {
        if (input.A === "1") {
          history.push("/eng-q10a");
        } else if (input.A === "2") {
          history.push("/eng-q10b");
        } else if (input.A === "4") {
          history.push("/eng-q12");
        } else if (input.A === "3") {
          history.push("/eng-q11");
        }
      }
    } else {
      handleShow();
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q5">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 12) * 6).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 12) * 6).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  <strong>Has your company made a:</strong>
                  <br />
                  <span>A) carbon-neutral commitment?</span>
                  <br />
                  <span>B) net-zero commitment?</span>
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
                </p>
              </>
            ) : (
              <>
                <strong>
                  <p className="question">Приняла ли ваша компания:</p>
                </strong>
                <p className="question">
                  <li style={{ listStyle: "none" }}>
                    A) обязательство по углеродной нейтральности?
                  </li>

                  <li style={{ listStyle: "none" }}>
                    B) обязательство по нулевым выбросам?
                  </li>
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
                    <p
                      className="question question-options"
                      style={{ color: "#db536a" }}
                    >
                      <strong>
                        {row.key}) {row.value}
                      </strong>
                    </p>
                    {columns.map((col) => {
                      return (
                        <div className="m-div" key={col.key}>
                          <label className="m-label">
                            <input
                              className="m-input"
                              name={row.key}
                              value={col.key}
                              type="radio"
                              onChange={handleChange}
                              checked={checked[`${row.key}${col.key}`]}
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
            <>
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
                      <tr key={row.key} className="table-row">
                        <td>{row.key}</td>
                        <td
                          className="left-align-text"
                          style={{ width: "200px" }}
                        >
                          {row.value}
                        </td>
                        {columns.map((col) => {
                          return (
                            <td
                              key={col.key}
                              className="input-cell"
                              // style={{ width: "250px" }}
                            >
                              <label className="label-cell">
                                <input
                                  name={row.key}
                                  value={col.key}
                                  type="radio"
                                  onChange={handleChange}
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
            </>
          )}
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
