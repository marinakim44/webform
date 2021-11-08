import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table, Form, Col, Row } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question25({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q25-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q25-checked")));
    }
    if (localStorage.getItem("q25")) {
      setInput(JSON.parse(localStorage.getItem("q25")));
    }
    if (localStorage.getItem("q25-other")) {
      setOther(localStorage.getItem("q25-other"));
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
            index: "1",
            key: "A",
            value: "A skilled, educated and adaptable workforce",
          },
          {
            index: "2",
            key: "B",
            value: "Adequate physical and digital infrastructure",
          },
          {
            index: "3",
            key: "C",
            value: "Reducing climate change and environmental damage",
          },
          {
            index: "4",
            key: "D",
            value: "High levels of employment",
          },
          {
            index: "5",
            key: "E",
            value: "An effective tax system",
          },
          {
            index: "6",
            key: "F",
            value: "Greater income equality",
          },
          {
            index: "7",
            key: "G",
            value: "The good health and well-being of the workforce",
          },
          {
            index: "8",
            key: "H",
            value: "A diverse and inclusive workforce",
          },
          {
            index: "9",
            key: "I",
            value: "Safeguards around usage of personal data",
          },
          {
            index: "10",
            key: "J",
            value: "Predictable macroeconomic environment",
          },
          {
            index: "11",
            key: "K",
            value: "Investment attractiveness of the country",
          },
          {
            index: "12",
            key: "L",
            value: "Fighting against corruption and bribery",
          },
          {
            index: "13",
            key: "M",
            value: "The supremacy of law in all spheres of state activity",
          },
          {
            index: "14",
            key: "N",
            value: "Access to affordable capital",
          },
        ]
      : [
          {
            index: "1",
            key: "A",
            value: " Квалифицированный и адаптивный персонал ",
          },
          {
            index: "2",
            key: "B",
            value:
              "Развитая инфраструктура  (включая цифровую инфраструктуру) ",
          },
          {
            index: "3",
            key: "C",
            value:
              "Снижение рисков изменения климата и ущерба окружающей среде",
          },
          {
            index: "4",
            key: "D",
            value: "Высокий уровень занятости",
          },
          {
            index: "5",
            key: "E",
            value: "Эффективная налоговая система",
          },
          {
            index: "6",
            key: "F",
            value: "Большее равенство доходов населения",
          },
          {
            index: "7",
            key: "G",
            value: "Здоровье и благополучие сотрудников",
          },
          {
            index: "8",
            key: "H",
            value: "Диверсифицированный и инклюзивный персонал",
          },
          {
            index: "9",
            key: "I",
            value: "Меры предосторожности при использовании личных данных",
          },
          {
            index: "10",
            key: "J",
            value: "Предсказуемая макроэкономическая среда",
          },
          {
            index: "11",
            key: "K",
            value: "Инвестиционная привлекательность страны",
          },
          {
            index: "12",
            key: "L",
            value: "Борьба с коррупцией и взяточничеством",
          },
          {
            index: "13",
            key: "M",
            value: "Верховенство права во всех сферах деятельности государства",
          },
          {
            index: "14",
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

  const handleClick = (e) => {
    const { name } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });
    setNone(false);
    setDontknow(false);
  };

  const handleChange = (e) => {
    setOther(e.target.value);
    setNone(false);
    setDontknow(false);
  };

  const handleNone = () => {
    setNone(!none);

    if (none === false) {
      setDontknow(false);
      setOther("");
    }
  };

  const handleDontknow = () => {
    setDontknow(!dontknow);

    if (dontknow === false) {
      setNone(false);
      setOther("");
    }
  };

  useEffect(() => {
    if (dontknow === true || none === true) {
      Object.keys(checked).map((el) => {
        return (checked[el] = false);
      });
    }

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .forEach((x) => {
        if (!input.includes(x[0])) {
          input.push(x[0]);
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === false)
      .forEach((x) => {
        if (input.includes(x[0])) {
          setInput(input.filter((el) => el !== x[0]));
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .forEach((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .forEach((a) => {
            checked[a] = true;
          });
      });
    Object.entries(checked)
      .filter((x) => x[1] === false)
      .forEach((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .forEach((a) => {
            checked[a] = false;
          });
      });

    localStorage.setItem("q25-none", none);
    localStorage.setItem("q25-dontknow", dontknow);
    localStorage.setItem("q25", JSON.stringify(input));
    localStorage.setItem("q25-other", other);
    localStorage.setItem("q25-checked", JSON.stringify(checked));
  }, [none, dontknow, input, checked, other]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 0 && none === false && !other && dontknow === false) {
      handleShow();
    } else {
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
        q19: JSON.parse(localStorage.getItem("q19")),
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
        q24: JSON.parse(localStorage.getItem("q24")),
        q24none: JSON.parse(localStorage.getItem("q24-none")),
        q24not: JSON.parse(localStorage.getItem("q24-not")),
        q25none: localStorage.getItem("q25-none"),
        q25dontknow: localStorage.getItem("q25-dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
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
      history.push("/eng-q25b");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/eng-q25">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 26).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
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
            {lng === "English" ? (
              <>
                <p className="question">
                  Which three of these outcomes do you think should be
                  government priorities in Kazakhstan?
                </p>
                <p className="question-i">
                  <i className="question-i">
                    PLEASE SELECT UP TO THREE RESPONSES ONLY
                  </i>
                </p>
              </>
            ) : (
              <>
                <p className="question">
                  На ваш взгляд, какие три из следующих целей развития должны
                  быть приоритетами государственного управления в Казахстане?
                </p>
                <p className="question-i">
                  <i className="question-i">ВЫБЕРИТЕ НЕ БОЛЕЕ ТРЕХ ОТВЕТОВ</i>
                </p>
              </>
            )}
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="m-div" key={row.key}>
                    <label className="m-label">
                      <input
                        type="checkbox"
                        name={row.key}
                        value={row.value}
                        onChange={handleClick}
                        checked={checked[row.key]}
                        disabled={
                          Object.entries(checked).filter((c) => c[1] === true)
                            .length === 3 && !checked[row.key]
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
              <Form.Control
                type="text"
                placeholder={
                  lng === "English"
                    ? "Other (please specify)"
                    : "Прочее (пожалуйста уточните)"
                }
                className="text-input"
                onChange={handleChange}
                value={other}
              ></Form.Control>
              <div className="m-none-dontknow-div">
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  value="None of the above"
                  onClick={handleNone}
                  className="m-none-btn none-btn rus-none-btn"
                >
                  {lng === "English"
                    ? "NONE OF THE ABOVE"
                    : "Ничего из вышеперечисленного"}
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
                  {lng === "English" ? "DON'T KNOW" : "Затрудняюсь ответить"}
                </Button>
                <Buttons lng={lng} click={handleSubmit} />
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
                            <tr className="left-align-text" key={row.key}>
                              <td>
                                <label className="alt-label-cell">
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    disabled={
                                      Object.entries(checked).filter(
                                        (c) => c[1] === true
                                      ).length === 3 && !checked[row.key]
                                        ? true
                                        : false
                                    }
                                    className="m-input radio-input"
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
                            <tr className="left-align-text" key={row.key}>
                              <td>
                                <label className="alt-label-cell">
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    className="m-input radio-input"
                                    disabled={
                                      Object.entries(checked).filter(
                                        (c) => c[1] === true
                                      ).length === 3 && !checked[row.key]
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
                placeholder={
                  lng === "English"
                    ? "Other (please specify)"
                    : "Прочее (пожалуйста уточните)"
                }
                style={{ width: "415px", marginTop: "1rem" }}
                onChange={handleChange}
                value={other}
              ></Form.Control>
              <div style={{ textAlign: "left", padding: "1rem 0" }}>
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  value="None of the above"
                  onClick={handleNone}
                  className="none-btn"
                >
                  {lng === "English"
                    ? "NONE OF THE ABOVE"
                    : "Ничего из вышеперечисленного"}
                </Button>
                <Button
                  type="button"
                  variant={dontknow ? "warning" : "outline-dark"}
                  value="Don't know"
                  onClick={handleDontknow}
                  className="dontknow-btn"
                >
                  {lng === "English" ? "DON'T KNOW" : "Затрудняюсь ответить"}
                </Button>
              </div>
              <Buttons lng={lng} click={handleSubmit} />
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
