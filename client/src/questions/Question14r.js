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
    if (localStorage.getItem("q14-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q14-checkedA")));
    }
    if (localStorage.getItem("q14-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q14-checkedB")));
    }
    if (localStorage.getItem("q14-checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q14-checkedC")));
    }
    if (localStorage.getItem("q14")) {
      setInput(JSON.parse(localStorage.getItem("q14")));
    }
    if (localStorage.getItem("q14-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q14-checked")));
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

  const [checked, setChecked] = useState([]);
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
    A7: false,
    A8: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
    B7: false,
    B8: false,
  });
  const [checkedC, setCheckedC] = useState({
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

    if (!checked.includes(name)) {
      checked.push(name);
    }

    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));
    }
    if (name === "C") {
      Object.keys(checkedC)
        .filter((v) => v === index)
        .map((v) => (checkedC[v] = true));
      Object.keys(checkedC)
        .filter((v) => v !== index)
        .map((v) => (checkedC[v] = false));
    }
  }

  useEffect(() => {
    localStorage.setItem("q14-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q14-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q14-checkedC", JSON.stringify(checkedC));
    localStorage.setItem("q14-checked", JSON.stringify(checked));
    localStorage.setItem("q14", JSON.stringify(input));
  }, [input, checkedA, checkedB, checkedC, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 3) {
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
            <p className="left-align-text">
              Обычно как часто ваша компания формально: оценивает свои основные
              инициативы? меняет свои основные инициативы? информирует персонал
              о своих основных инициативах?
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
                              onClick={handleClick}
                              className="m-input"
                              checked={
                                row.key === "A"
                                  ? checkedA[`${row.key}${col.key}`]
                                  : row.key === "B"
                                  ? checkedB[`${row.key}${col.key}`]
                                  : row.key === "C"
                                  ? checkedC[`${row.key}${col.key}`]
                                  : ""
                              }
                              autoComplete="on"
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
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
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
                                  onClick={handleClick}
                                  checked={
                                    row.key === "A"
                                      ? checkedA[`${row.key}${col.key}`]
                                      : row.key === "B"
                                      ? checkedB[`${row.key}${col.key}`]
                                      : row.key === "C"
                                      ? checkedC[`${row.key}${col.key}`]
                                      : ""
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
