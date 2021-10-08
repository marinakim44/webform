import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question5() {
  const width = window.screen.width;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q5checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q5checkedA")));
    }
    if (localStorage.getItem("q5checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q5checkedB")));
    }
    if (localStorage.getItem("q5")) {
      setInput(JSON.parse(localStorage.getItem("q5")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value: "Обязательство по углеродной нейтральности",
      text: "Достигается, когда компания сводит к нулю выбросы парниковых газов (ПГ) (напр., путем покупки добровольных квот на выбросы углерода)",
    },
    {
      key: "B",
      value: "Обязательство по нулевым выбросам",
      text: "Достигается, когда компания сокращает выбросы парниковых газов (ПГ) почти до нуля и устраняет оставшиеся неизбежные выбросы",
    },
  ];
  const columns = [
    {
      key: "1",
      value: "Да, моя компания приняла это обязательство",
    },
    {
      key: "2",
      value: "Нет, но моя компания работает над принятием этого обязательства",
    },
    {
      key: "3",
      value: "Нет, моя компания не принимала этого обязательства",
    },
    {
      key: "4",
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
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));

      localStorage.setItem("q5checkedA", JSON.stringify(checkedA));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));

      localStorage.setItem("q5checkedB", JSON.stringify(checkedB));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input.A && input.B) {
      localStorage.setItem("q5", JSON.stringify(input));
      localStorage.setItem("q5-carbonNeutral", input.A);
      localStorage.setItem("q5-netZero", input.B);

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
      };

      axios.post("/allinputs", data);

      if (input.B === "1") {
        history.push("/rus-q6");
      } else if (input.B === "2") {
        history.push("/rus-q7");
      } else if (input.B === "3") {
        if (input.A === "1") {
          history.push("/rus-q10a");
        } else if (input.A === "2") {
          history.push("/rus-q10b");
        } else if (input.A === "4" || input.A === "3") {
          history.push("/rus-q11");
        }
      } else if (input.B === "4") {
        if (input.A === "1") {
          history.push("/rus-q10a");
        } else if (input.A === "2") {
          history.push("/rus-q10b");
        } else if (input.A === "4") {
          history.push("/rus-q12");
        } else if (input.A === "3") {
          history.push("/rus-q11");
        }
      }
    } else {
      handleShow();
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q5">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 6).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 6).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="question">Приняла ли ваша компания:</p>
            {width <= 768 ? (
              <p className="left-align-text">
                <span>A) обязательство по углеродной нейтральности?</span>
                <br />
                <span>B) обязательство по нулевым выбросам?</span>
              </p>
            ) : (
              <p className="question">
                <br />
                <span style={{ marginLeft: "20px" }}>
                  A) обязательство по углеродной нейтральности?
                </span>
                <br />
                <span style={{ marginLeft: "20px" }}>
                  B) обязательство по нулевым выбросам?
                </span>
              </p>
            )}
            <p
              style={{
                margin: width <= 480 ? "1rem 0" : "",
                textAlign: "left",
              }}
            >
              <i>(ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)</i>
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
                              className="m-input"
                              name={row.key}
                              value={col.key}
                              type="radio"
                              onChange={handleChange}
                              checked={
                                row.key === "A"
                                  ? checkedA[`${row.key}${col.key}`]
                                  : checkedB[`${row.key}${col.key}`]
                              }
                              autoComplete="on"
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
                              style={{ width: "250px" }}
                            >
                              <label className="label-cell">
                                <input
                                  name={row.key}
                                  value={col.key}
                                  type="radio"
                                  onChange={handleChange}
                                  checked={
                                    row.key === "A"
                                      ? checkedA[`${row.key}${col.key}`]
                                      : checkedB[`${row.key}${col.key}`]
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
                  Назад
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Далее
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
