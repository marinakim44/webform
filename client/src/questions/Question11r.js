import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Question10A from "./Question10A";
import Switch from "react-bootstrap/esm/Switch";

export default function Question11() {
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
      value:
        "Моя компания не производит значительного количества выбросов парниковых газов (ПГ)",
    },
    {
      key: "B",
      value:
        "Моя компания в настоящее время не имеет технических возможностей для измерения выбросов парниковых газов (ПГ)",
    },
    {
      key: "C",
      value:
        "Моя компания не может с финансовой точки зрения позволить себе взять на себя обязательство по углеродной нейтральности или нулевым выбросам",
    },
    {
      key: "D",
      value:
        "Внешние заинтересованные стороны моей компании (напр., инвесторы, клиенты, поставщики) не сильно обеспокоены изменением климата",
    },
    {
      key: "E",
      value:
        "Моя компания не уверена, что сможет выполнить обязательство по углеродной нейтральности или нулевым выбросам",
    },
    {
      key: "F",
      value:
        "В отрасли моей компании нет разработанного подхода к декарбонизации",
    },
    {
      key: "G",
      value:
        "Внутренние заинтересованные стороны моей компании (напр., сотрудники, члены правления, владельцы) не сильно обеспокоены изменением климата",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Не точно",
    },
    {
      key: 2,
      value: "Точно в незначительной степени",
    },
    {
      key: 3,
      value: "Относительно точно",
    },
    {
      key: 4,
      value: "Очень точно",
    },
    {
      key: 5,
      value: "Чрезвычайно точно",
    },
    {
      key: 6,
      value: "Затрудняюсь ответить",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
  });

  const [checked, setChecked] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    if (!checked.includes(name)) {
      checked.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 7) {
      handleShow();
    } else {
      localStorage.setItem("q11", JSON.stringify(input));

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
      };

      axios.post("/allinputs", data);

      history.push("/rus-q12");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q11">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 12).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 12).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Насколько точны следующие утверждения относительно того, почему
              ваша компания не взяла на себя обязательство по углеродной
              нейтральности или нулевым выбросам?
            </p>
            <p
              className="question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>(ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="left-align-text">
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
                              className="m-input"
                              type="radio"
                              name={row.key}
                              value={col.value}
                              onClick={handleClick}
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
                  className="next-btn"
                  onClick={handleSubmit}
                  style={{ border: "none" }}
                >
                  Next
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
            <form>
              <Table bordered style={{ fontSize: "14px" }}>
                <thead>
                  <tr>
                    <th colSpan="2"></th>
                    {columns.map((column) => {
                      return <th>{column.value}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr>
                        <td>{row.key}</td>
                        <td className="left-align-text">{row.value}</td>
                        {columns.map((column) => {
                          return (
                            <td className="input-cell">
                              <label className="label-cell">
                                <input
                                  type="radio"
                                  className="m-input"
                                  name={row.key}
                                  value={column.value}
                                  onClick={handleClick}
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
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
      <Switch>
        <Route path="/eng-q10a">
          <Question10A />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
