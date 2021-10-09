import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table, Form, Col, Row } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25r() {
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
      index: 1,
      key: "A",
      value: " Квалифицированный и адаптивный персонал ",
    },
    {
      index: 2,
      key: "B",
      value: "Развитая инфраструктура  (включая цифровую инфраструктуру) ",
    },
    {
      index: 3,
      key: "C",
      value: "Снижение рисков изменения климата и ущерба окружающей среде",
    },
    {
      index: 4,
      key: "D",
      value: "Высокий уровень занятости",
    },
    {
      index: 5,
      key: "E",
      value: "Эффективная налоговая система",
    },
    {
      index: 6,
      key: "F",
      value: "Большее равенство доходов населения",
    },
    {
      index: 7,
      key: "G",
      value: "Здоровье и благополучие сотрудников",
    },
    {
      index: 8,
      key: "H",
      value: "Диверсифицированный и инклюзивный персонал",
    },
    {
      index: 9,
      key: "I",
      value: "Меры предосторожности при использовании личных данных",
    },
    {
      index: 10,
      key: "J",
      value: "Предсказуемая макроэкономическая среда",
    },
    {
      index: 11,
      key: "K",
      value: "Инвестиционная привлекательность страны",
    },
    {
      index: 12,
      key: "L",
      value: "Борьба с коррупцией и взяточничеством",
    },
    {
      index: 13,
      key: "M",
      value: "Верховенство права во всех сферах деятельности государства",
    },
    {
      index: 14,
      key: "N",
      value: "Доступ к недорогому капиталу",
    },
  ];

  const [input, setInput] = useState([]);
  const [other, setOther] = useState("");
  const [none, setNone] = useState(false);
  const [dontknow, setDontknow] = useState(false);
  const [checked, setChecked] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
  });
  const [disabled, setDisabled] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });

    if (checked[name]) {
      if (input.includes(`${name}: ${value}`)) {
        input.pop(`${name}: ${value}`);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(`${name}: ${value}`)) {
          input.push(`${name}: ${value}`);
        }
      } else {
        setChecked((prev) => {
          return {
            ...prev,
            [name]: !checked[name],
          };
        });
        setDisabled((prev) => {
          return {
            ...prev,
            [name]: !disabled[name],
          };
        });
      }
    }

    console.log(checked, input);
  };

  const handleChange = (e) => {
    setOther(e.target.value);
  };

  const handleNone = () => {
    if (dontknow) {
      setDontknow(false);
    }
    if (input) {
      setInput([]);
    }
    setNone(!none);

    if (none) {
      if (dontknow) {
        setDontknow(false);
      }
    }
    if (none || dontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  };

  const handleDontknow = () => {
    if (none) {
      setNone(false);
    }
    if (input) {
      setInput([]);
    }
    setDontknow(!dontknow);

    if (dontknow) {
      if (none) {
        setNone(false);
      }
    }
    if (none || dontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("q25-none", none);
    localStorage.setItem("q25-dontknow", dontknow);
    localStorage.setItem("q25", JSON.stringify(input));
    localStorage.setItem("q25-other", other);

    if (input.length === 0 && !none && !other && !dontknow) {
      handleShow();
    } else {
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
        q25none: localStorage.getItem("q25-none"),
        q25dontknow: localStorage.getItem("q25-dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
      };

      axios.post("/allinputs", data);
      history.push("/rus-q25b");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/rus-q25">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 26).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 26).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="question">
              На ваш взгляд, какие три из следующих целей развития должны быть
              приоритетами государственного управления в Казахстане?
            </p>
            <p
              className="question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>(ВЫБЕРИТЕ НЕ БОЛЕЕ ТРЕХ ОТВЕТОВ)</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        type="checkbox"
                        name={row.key}
                        value={row.value}
                        onChange={handleClick}
                        checked={checked[row.key] ? true : false}
                        disabled={
                          (input.length === 3 &&
                            !input.includes(`${row.key}: ${row.value}`)) ||
                          none ||
                          dontknow
                            ? true
                            : false
                        }
                        className="m-input"
                      ></input>
                      {row.value}
                    </label>
                  </div>
                );
              })}
              <div className="m-none-dontknow-div">
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  value="None of the above"
                  onClick={handleNone}
                  className="rus-none-btn"
                >
                  Ничего из вышеперечисленного
                </Button>
                <Button
                  type="button"
                  variant={dontknow ? "warning" : "outline-dark"}
                  value="Don't know"
                  onClick={handleDontknow}
                  className={
                    width <= 480
                      ? "rus-dontknow-btn"
                      : "m-dontknow-btn dontknow-btn"
                  }
                >
                  Затрудняюсь ответить
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
              <Row>
                <Col>
                  <Table style={{ marginTop: "8px" }}>
                    <tbody>
                      {rows
                        .filter((row) => row.index < 8)
                        .map((row) => {
                          return (
                            <tr style={{ height: "50px" }}>
                              <td>{row.key}</td>
                              <td className="left-align-text">{row.value}</td>
                              <td>
                                <label
                                  className="label-cell"
                                  style={{
                                    width: "150px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key] ? true : false}
                                    disabled={
                                      (input.length === 3 &&
                                        !input.includes(
                                          `${row.key}: ${row.value}`
                                        )) ||
                                      none ||
                                      dontknow
                                        ? true
                                        : false
                                    }
                                    className="m-input"
                                  ></input>
                                </label>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Table>
                    <tbody>
                      {rows
                        .filter((row) => row.index >= 8)
                        .map((row) => {
                          return (
                            <tr style={{ height: "50px" }}>
                              <td>{row.key}</td>
                              <td
                                className="left-align-text"
                                onClick={handleClick}
                              >
                                {row.value}
                              </td>
                              <td>
                                <label
                                  className="label-cell"
                                  style={{
                                    width: "150px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    disabled={none || dontknow ? true : false}
                                  ></input>
                                </label>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Form.Control
                type="text"
                placeholder="Прочее (пожалуйста, уточните)"
                style={{ width: "415px", marginTop: "1rem" }}
                onChange={handleChange}
                value={other}
                disabled={none || dontknow ? true : false}
              ></Form.Control>
              <div style={{ textAlign: "left", padding: "1rem 0" }}>
                <Button
                  type="button"
                  variant={none ? "warning" : "light"}
                  value="None of the above"
                  onClick={handleNone}
                  className="rus-none-btn"
                >
                  Ничего из вышеперечисленного
                </Button>
                <Button
                  type="button"
                  variant={dontknow ? "warning" : "light"}
                  value="Don't know"
                  onClick={handleDontknow}
                  className="rus-dontknow-btn"
                >
                  Затрудняюсь ответить
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
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
