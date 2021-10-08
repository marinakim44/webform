import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25B() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Квалифицированный и адаптивный персонал ",
    },
    {
      key: "B",
      value: "Развитая инфраструктура  (включая цифровую инфраструктуру) ",
    },
    {
      key: "C",
      value: "Снижение рисков изменения климата и ущерба окружающей среде",
    },
    {
      key: "D",
      value: "Высокий уровень занятости",
    },
    {
      key: "E",
      value: "Эффективная налоговая система",
    },
    {
      key: "F",
      value: "Большее равенство доходов населения",
    },
    {
      key: "G",
      value: "Здоровье и благополучие сотрудников",
    },
    {
      key: "H",
      value: "Диверсифицированный и инклюзивный персонал",
    },
    {
      key: "I",
      value: "Меры предосторожности при использовании личных данных",
    },
    {
      key: "J",
      value: "Предсказуемая макроэкономическая среда",
    },
    {
      key: "K",
      value: "Инвестиционная привлекательность страны",
    },
    {
      key: "L",
      value: "Борьба с коррупцией и взяточничеством",
    },
    {
      key: "M",
      value: "Верховенство права во всех сферах деятельности государства",
    },
    {
      key: "N",
      value: "Доступ к недорогому капиталу",
    },
  ];

  const columns = [
    "Очень неэффективно",
    "Неэффективно",
    "Не могу сказать определенно",
    "Эффективно",
    "Очень эффективно",
    "Затрудняюсь ответить",
    "Отказ от ответа",
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
  });

  const [checkedList, setCheckedList] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (!checkedList.includes(name)) {
      checkedList.push(name);
    }
    console.log(input, checkedList);
  }

  const [isNone, setIsNone] = useState(false);
  const [isDontknow, setIsDontknow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleNone(e) {
    e.preventDefault();
    if (isDontknow) {
      setIsDontknow(false);
    }
    if (input) {
      setInput([]);
    }
    setIsNone(!isNone);
    if (isNone) {
      if (isDontknow) {
        setIsDontknow(false);
      }
    }
    if (isNone || isDontknow) {
      setInput([]);
    }

    setDisabled(!disabled);
    setChecked(!checked);
  }

  function handleDontknow(e) {
    e.preventDefault();
    if (isNone) {
      setIsNone(false);
    }
    if (input) {
      setInput([]);
    }
    setIsDontknow(!isDontknow);

    if (isDontknow) {
      if (isNone) {
        setIsNone(false);
      }
    }
    if (isNone || isDontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checkedList.length < 14) {
      if (!isNone) {
        if (!isDontknow) {
          handleShow();
        } else {
          localStorage.setItem("q25b-none", isNone);
          localStorage.setItem("q25b-dontknow", isDontknow);
          localStorage.setItem("q25b", JSON.stringify(input));

          history.push("/rus-q25c");

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
            q25none: localStorage.getItem("q25none"),
            q25dontknow: localStorage.getItem("q25dontknow"),
            q25other: localStorage.getItem("q25-other"),
            q25: JSON.parse(localStorage.getItem("q25")),
            q25b: JSON.parse(localStorage.getItem("q25b")),
            q25bNone: localStorage.getItem("q25b-none"),
            q25bDontknow: localStorage.getItem("q25b-dontknow"),
          };

          axios.post("/allinputs", data);
        }
      } else {
        localStorage.setItem("q25b-none", isNone);
        localStorage.setItem("q25b-dontknow", isDontknow);
        localStorage.setItem("q25b", JSON.stringify(input));

        history.push("/rus-q25c");

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
          q25none: localStorage.getItem("q25none"),
          q25dontknow: localStorage.getItem("q25dontknow"),
          q25other: localStorage.getItem("q25-other"),
          q25: JSON.parse(localStorage.getItem("q25")),
          q25b: JSON.parse(localStorage.getItem("q25b")),
          q25bNone: localStorage.getItem("q25b-none"),
          q25bDontknow: localStorage.getItem("q25b-dontknow"),
        };

        axios.post("/allinputs", data);
      }
    } else {
      localStorage.setItem("q25b-none", isNone);
      localStorage.setItem("q25b-dontknow", isDontknow);
      localStorage.setItem("q25b", JSON.stringify(input));

      history.push("/rus-q25c");

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
        q25none: localStorage.getItem("q25none"),
        q25dontknow: localStorage.getItem("q25dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25b: JSON.parse(localStorage.getItem("q25b")),
        q25bNone: localStorage.getItem("q25b-none"),
        q25bDontknow: localStorage.getItem("q25b-dontknow"),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q25b">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 27).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 27).toString() + "%",
                }}
              ></div>
            </div>

            <ModalAlert show={show} close={handleClose} />

            <p className="left-align-text">
              Насколько эффективно добивается правительство достижения этих
              целей в Казахстане?
            </p>
            <p
              className="question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>(ВЫБЕРИТЕ ОДИН ВАРИАНТ ОТВЕТА ДЛЯ КАЖДОЙ СТРОКИ)</i>
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
                              value={col}
                              onClick={handleClick}
                              disabled={isNone || isDontknow ? true : false}
                              className="m-input"
                            ></input>
                            {col}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="dontknow-div">
                <Button
                  type="button"
                  variant={isNone ? "warning" : "outline-dark"}
                  className="none-btn rus-none-btn"
                  value="None of the above"
                  onClick={handleNone}
                >
                  Ничего из вышеперечисленного
                </Button>
              </div>
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
          ) : (
            <Form>
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
                    <tr style={{ position: "sticky", top: 0 }}>
                      <th
                        colSpan="2"
                        style={{ position: "sticky", top: 0, zIndex: 1 }}
                      ></th>
                      {columns.map((col) => {
                        return (
                          <th
                            style={{
                              position: "sticky",
                              top: 0,
                              zIndex: 1,
                              width: "120px",
                              verticalAlign: "middle",
                            }}
                          >
                            {col}
                          </th>
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
                                    value={col}
                                    onClick={handleClick}
                                    disabled={
                                      isNone || isDontknow ? true : false
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

                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    width: "35%",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    type="button"
                    variant={isNone ? "warning" : "light"}
                    className="rus-none-btn"
                    value="None of the above"
                    onClick={handleNone}
                  >
                    Ничего из вышеперечисленного
                  </Button>
                </div>
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
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
