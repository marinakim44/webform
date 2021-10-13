import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table, Form, Col, Row } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25C() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q25c-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q25c-checked")));
    }
    if (localStorage.getItem("q25c")) {
      setInput(JSON.parse(localStorage.getItem("q25c")));
    }
    if (localStorage.getItem("q25c-other")) {
      setOther(localStorage.getItem("q25c-other"));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const rows = [
    {
      index: 1,
      key: "A",
      value: "Квалифицированный и адаптивный персона",
    },
    {
      index: 2,
      key: "B",
      value: "Развитая инфраструктура  (включая цифровую инфраструктуру)",
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
    const { name } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });
  };

  const handleChange = (e) => {
    setOther(e.target.value);
  };

  const handleNone = () => {
    setNone(!none);

    if (none === false) {
      setDontknow(false);
      Object.keys(disabled).map((el) => {
        disabled[el] = true;
      });
      setOther("");
    }
    if (none === true) {
      Object.keys(disabled).map((el) => {
        disabled[el] = false;
      });
    }
  };

  const handleDontknow = () => {
    setDontknow(!dontknow);

    if (dontknow === false) {
      setNone(false);
      Object.keys(disabled).map((el) => {
        disabled[el] = true;
      });
      setOther("");
    }
    if (dontknow === true) {
      Object.keys(disabled).map((el) => {
        disabled[el] = false;
      });
    }
  };

  useEffect(() => {
    if (dontknow === true || none === true) {
      Object.keys(checked).map((el) => {
        checked[el] = false;
      });
    }

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .map((x) => {
        if (!input.includes(x[0])) {
          input.push(x[0]);
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === false)
      .map((x) => {
        if (input.includes(x[0])) {
          setInput(input.filter((el) => el !== x[0]));
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .map((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .map((a) => {
            checked[a] = true;
          });
      });
    Object.entries(checked)
      .filter((x) => x[1] === false)
      .map((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .map((a) => {
            checked[a] = false;
          });
      });

    localStorage.setItem("q25c-none", none);
    localStorage.setItem("q25c", JSON.stringify(input));
    localStorage.setItem("q25c-other", other);
    localStorage.setItem("q25c-checked", JSON.stringify(checked));

    Object.entries(checked)
      .filter((k) => k[1] === true)
      .map((k) => {
        console.log(k[0]);
      });
  }, [none, dontknow, input, checked, other, disabled]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 0 && none === false && !other) {
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
        q25none: localStorage.getItem("q25none"),
        q25dontknow: localStorage.getItem("q25dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
        q25cOther: localStorage.getItem("q25c-other"),
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
      history.push("/rus-q26");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/rus-q25c">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 28).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 28).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="question">
              В достижении каких из указанных целей (при наличии таковых) ваша
              компания заинтересована в сотрудничестве с государственными
              органами в ближайшие три года?
            </p>
            <p className="question-i">
              <i>ОТМЕТЬТЕ ВСЕ ПОДХОДЯЩИЕ ОТВЕТЫ</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        className="m-input"
                        type="checkbox"
                        name={row.key}
                        value={row.value}
                        onChange={handleClick}
                        checked={checked[row.key]}
                        disabled={
                          none === true || dontknow === true ? true : false
                        }
                      ></input>
                      {row.value}
                    </label>
                  </div>
                );
              })}
              <div>
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  className="none-btn"
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
              <Row>
                <Col>
                  <Table>
                    <tbody>
                      {rows
                        .filter((row) => row.index < 8)
                        .map((row) => {
                          return (
                            <tr>
                              <td className="left-align-text">
                                <label className="alt-label-cell">
                                  <input
                                    className="radio-input"
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    disabled={
                                      none === true || dontknow === true
                                        ? true
                                        : false
                                    }
                                  ></input>

                                  {row.value}
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
                            <tr>
                              <td className="left-align-text">
                                <label className="alt-label-cell">
                                  <input
                                    type="checkbox"
                                    className="radio-input"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    disabled={
                                      none === true || dontknow === true
                                        ? true
                                        : false
                                    }
                                  ></input>

                                  {row.value}
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
                placeholder="Прочее (пожалуйста уточните)"
                style={{ width: "33.5%", marginTop: "1rem" }}
                onChange={handleChange}
                value={other}
                disabled={none || dontknow ? true : false}
              ></Form.Control>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "33.5%",
                  marginTop: "2rem",
                }}
              >
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  className="none-btn"
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
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
