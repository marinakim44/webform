import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question14r() {
  const history = useHistory();
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q14-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q14-checked")));
    }
    if (localStorage.getItem("q14")) {
      setInput(JSON.parse(localStorage.getItem("q14")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value: "Оценивает свои основные инициативы",
    },
    {
      key: "B",
      value: "Меняет свои основные инициативы",
    },
    {
      key: "C",
      value: "Информирует персонал о своих основных инициативах",
    },
  ];

  const columns = [
    {
      key: "1",
      title: "<- Реже",
      value: "Каждые четыре года или реже",
    },
    {
      key: "2",
      title: "<- Реже",
      value: "Каждые три года",
    },
    {
      key: "3",
      title: "<- Реже",
      value: "Каждые два года",
    },
    {
      key: "4",
      title: "Каждый год",
      value: "Каждый год",
    },
    {
      key: "5",
      title: " Чаще ->",
      value: "Дважды в год",
    },
    {
      key: "6",
      title: " Чаще ->",
      value: "Три раза в год",
    },
    {
      key: "7",
      title: " Чаще ->",
      value: "Четыре раза в год или чаще",
    },
    {
      key: "8",
      title: "Затрудняюсь ответить",
      value: "Затрудняюсь ответить",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
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

    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
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

    setChecked((prev) => {
      return {
        ...prev,
        [index]: true,
      };
    });

    Object.keys(checked)
      .filter((y) => y.slice(0, 1) === name && y[0] === index)
      .map((z) => {
        return (checked[z] = true);
      });

    Object.keys(checked)
      .filter((y) => y.slice(0, 1) === name && y[0] !== index)
      .map((z) => {
        return (checked[z] = false);
      });
  }

  useEffect(() => {
    localStorage.setItem("q14-checked", JSON.stringify(checked));
    localStorage.setItem("q14", JSON.stringify(input));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/rus-q15");

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
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q14">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 15).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 15).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text question">
              <strong>Обычно как часто ваша компания формально:</strong>
              <br />- оценивает свои основные инициативы?
              <br />- меняет свои основные инициативы?
              <br />- информирует персонал о своих основных инициативах?
            </p>
            <p className="question-i">
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
            <form>
              <Table bordered className="table">
                <tbody>
                  <tr style={{ fontWeight: "bold", color: "#dc3545" }}>
                    <td colSpan="2" rowSpan="2"></td>
                    <td colSpan="3">Реже</td>
                    <td rowSpan="2">Каждый год</td>
                    <td colSpan="3">Чаще</td>
                    <td rowSpan="2">Затрудняюсь ответить</td>
                  </tr>
                  <tr>
                    {columns
                      .filter(
                        (col) =>
                          col.value !== "Каждый год" &&
                          col.value !== "Затрудняюсь ответить"
                      )
                      .map((col) => {
                        return <td>{col.value}</td>;
                      })}
                  </tr>
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
                                    checked[`${row.key}${col.key}`] === true
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
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
