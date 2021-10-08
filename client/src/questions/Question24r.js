import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question24r() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q24")) {
      setInput(JSON.parse(localStorage.getItem("q24")));
    }
    if (localStorage.getItem("q24-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q24-checked")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      index: "1",
      key: "A",
      value: "Целевые показатели выбросов парниковых газов (ПГ)",
    },
    { index: "2", key: "B", value: "Показатели гендерной представленности" },
    {
      index: "3",
      key: "C",
      value: "Показатели расовой и этнической представленности ",
    },
    { index: "4", key: "D", value: "Показатели удовлетворенности клиентов" },
    { index: "5", key: "E", value: "Цели автоматизации и цифровых технологий" },
    { index: "6", key: "F", value: "Показатели вовлеченности сотрудников " },
    { index: "7", key: "G", value: "Ничего из вышеперечисленного" },
    { index: "8", key: "H", value: "Предпочел бы не отвечать" },
  ];

  const columns = [
    {
      key: "A",
      value: "Долгосрочная корпоративная стратегия Компании",
    },
    {
      key: "B",
      value: "Личный годовой бонус или долгосрочная система вознаграждений",
    },
  ];

  const [input, setInput] = useState({
    A: [],
    B: [],
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

  const [noneA, setNoneA] = useState(false);
  const [noneB, setNoneB] = useState(false);
  const [notA, setNotA] = useState(false);
  const [notB, setNotB] = useState(false);

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;
    setChecked((prev) => {
      return {
        ...prev,
        [index]: !checked[index],
      };
    });
    if (name === "A" && value === "Ничего из вышеперечисленного") {
      setNoneA(!noneA);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Ничего из вышеперечисленного"],
        };
      });
    }
    if (name === "B" && value === "Ничего из вышеперечисленного") {
      setNoneB(!noneB);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Ничего из вышеперечисленного"],
        };
      });
    }
    if (name === "A" && value === "Предпочел бы не отвечать") {
      setNotA(!notA);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Предпочел бы не отвечать"],
        };
      });
    }
    if (name === "B" && value === "Предпочел бы не отвечать") {
      setNotB(!notB);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Предпочел бы не отвечать"],
        };
      });
    }
    if (name === "A" && !input.A.includes(value)) {
      input.A.push(value);
    }
    if (name === "B" && !input.B.includes(value)) {
      input.B.push(value);
    }
  }

  useEffect(() => {
    localStorage.setItem("q24", JSON.stringify(input));
    localStorage.setItem("q24-checked", JSON.stringify(checked));
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);

    if (input.A.length === 0) {
      if (input.B.length === 0) {
        handleShow();
      }
    } else if (input.B.length === 0) {
      handleShow();
    } else {
      history.push("/rus-q25");

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
        q5a: localStorage.getItem("q5-carbonNeutral"),
        q5b: localStorage.getItem("q5-netZero"),
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
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
        q24: JSON.parse(localStorage.getItem("q24")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q24">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 25).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 25).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Включены ли следующие результаты, не связанные с финансами:
              <p style={{ margin: "4px auto 0 20px" }}>
                A) в долгосрочную корпоративную стратегию вашей компании?{" "}
              </p>
              <p style={{ margin: "0 auto 0 20px" }}>
                B) в ваш личный годовой бонус или в долгосрочную систему
                вознаграждений?{" "}
              </p>
            </p>
            <p className="question">
              <i>(ПОЖАЛУЙСТА, ВЫБЕРИТЕ ВСЕ, ЧТО ПРИМЕНИМО)</i>
            </p>
          </div>

          {width <= 768 ? (
            <div className="left-align-text">
              {columns.map((col) => {
                return (
                  <div>
                    <strong>
                      <p className="question" style={{ color: "#db536a" }}>
                        {col.key}) {col.value}
                      </p>
                    </strong>
                    {rows.map((row) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              className="m-input"
                              name={col.key}
                              value={row.value}
                              onChange={handleClick}
                              disabled={
                                (noneA && row.key !== "G" && col.key === "A") ||
                                (noneB && row.key !== "G" && col.key === "B") ||
                                (notA && row.key !== "H" && col.key === "A") ||
                                (notB && row.key !== "H" && col.key === "B")
                                  ? true
                                  : false
                              }
                            ></input>
                            {row.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>

                  {columns.map((col) => {
                    return (
                      <td>
                        {col.key}) {col.value}
                      </td>
                    );
                  })}
                </tr>
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
                                type="checkbox"
                                name={col.key}
                                value={row.value}
                                onChange={handleClick}
                                // checked={checked[`${col.key}${row.index}`]}
                                disabled={
                                  (noneA &&
                                    row.key !== "G" &&
                                    col.key === "A") ||
                                  (noneB &&
                                    row.key !== "G" &&
                                    col.key === "B") ||
                                  (notA &&
                                    row.key !== "H" &&
                                    col.key === "A") ||
                                  (notB && row.key !== "H" && col.key === "B")
                                    ? true
                                    : false
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
              Назад
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Далее
              <i
                className="fas fa-chevron-right"
                style={{ marginLeft: "8px" }}
              ></i>
            </Button>
          </div>
        </div>
      </Route>
    </BrowserRouter>
  );
}
