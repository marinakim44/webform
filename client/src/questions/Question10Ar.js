import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question10A() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q10a-checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q10a-checkedA")));
    }
    if (localStorage.getItem("q10a-checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q10a-checkedB")));
    }
    if (localStorage.getItem("q10a-checkedC")) {
      setCheckedC(JSON.parse(localStorage.getItem("q10a-checkedC")));
    }
    if (localStorage.getItem("q10a-checkedD")) {
      setCheckedD(JSON.parse(localStorage.getItem("q10a-checkedD")));
    }
    if (localStorage.getItem("q10a-checkedE")) {
      setCheckedE(JSON.parse(localStorage.getItem("q10a-checkedE")));
    }
    if (localStorage.getItem("q10a-checkedF")) {
      setCheckedF(JSON.parse(localStorage.getItem("q10a-checkedF")));
    }
    if (localStorage.getItem("q10a-checkedG")) {
      setCheckedG(JSON.parse(localStorage.getItem("q10a-checkedG")));
    }
    if (localStorage.getItem("q10a")) {
      setInput(JSON.parse(localStorage.getItem("q10a")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Привлечение и/или удержание сотрудников ",
    },
    {
      key: "B",
      value: "Удовлетворение требований инвесторов",
    },
    {
      key: "C",
      value: "Соответствие ожиданиям клиентов",
    },
    {
      key: "D",
      value: "Соответствие государственным и/или межправительственным целям ",
    },
    {
      key: "E",
      value: "Снижение рисков изменения климата",
    },
    {
      key: "F",
      value: "Стимулирование инноваций в продуктах/услугах",
    },
    {
      key: "G",
      value: "Соответствие уровню обязательств конкурентов",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Не важны",
    },
    {
      key: 2,
      value: "Важны в незначительной степени",
    },
    {
      key: 3,
      value: "Относительно важны",
    },
    {
      key: 4,
      value: "Очень важны",
    },
    {
      key: 5,
      value: "Чрезвычайно важны",
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
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
  });
  const [checkedC, setCheckedC] = useState({
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
  });
  const [checkedD, setCheckedD] = useState({
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,
  });
  const [checkedE, setCheckedE] = useState({
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,
  });
  const [checkedF, setCheckedF] = useState({
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
  });
  const [checkedG, setCheckedG] = useState({
    G1: false,
    G2: false,
    G3: false,
    G4: false,
    G5: false,
    G6: false,
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
    if (name === "D") {
      Object.keys(checkedD)
        .filter((v) => v === index)
        .map((v) => (checkedD[v] = true));
      Object.keys(checkedD)
        .filter((v) => v !== index)
        .map((v) => (checkedD[v] = false));
    }
    if (name === "E") {
      Object.keys(checkedE)
        .filter((v) => v === index)
        .map((v) => (checkedE[v] = true));
      Object.keys(checkedE)
        .filter((v) => v !== index)
        .map((v) => (checkedE[v] = false));
    }
    if (name === "F") {
      Object.keys(checkedF)
        .filter((v) => v === index)
        .map((v) => (checkedF[v] = true));
      Object.keys(checkedF)
        .filter((v) => v !== index)
        .map((v) => (checkedF[v] = false));
    }
    if (name === "G") {
      Object.keys(checkedG)
        .filter((v) => v === index)
        .map((v) => (checkedG[v] = true));
      Object.keys(checkedG)
        .filter((v) => v !== index)
        .map((v) => (checkedG[v] = false));
    }
  }

  useEffect(() => {
    localStorage.setItem("q10a-checkedA", JSON.stringify(checkedA));
    localStorage.setItem("q10a-checkedB", JSON.stringify(checkedB));
    localStorage.setItem("q10a-checkedC", JSON.stringify(checkedC));
    localStorage.setItem("q10a-checkedD", JSON.stringify(checkedD));
    localStorage.setItem("q10a-checkedE", JSON.stringify(checkedE));
    localStorage.setItem("q10a-checkedF", JSON.stringify(checkedF));
    localStorage.setItem("q10a-checkedG", JSON.stringify(checkedG));
    localStorage.setItem("q10a", JSON.stringify(input));
  }, [
    input,
    checkedA,
    checkedB,
    checkedC,
    checkedD,
    checkedE,
    checkedF,
    checked,
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !input.A &&
      !input.B &&
      !input.C &&
      !input.D &&
      !input.E &&
      !input.F &&
      !input.G
    ) {
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
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
      };

      axios.post("/allinputs", data);

      history.push("/rus-q12");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q10a">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 11).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 11).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Насколько важны следующие факторы, лежащие в основе обязательств
              вашей компании по углеродной нейтральности и/или нулевым выбросам?
            </p>
            <p className="question">
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
                                  : row.key === "D"
                                  ? checkedD[`${row.key}${col.key}`]
                                  : row.key === "E"
                                  ? checkedE[`${row.key}${col.key}`]
                                  : row.key === "F"
                                  ? checkedF[`${row.key}${col.key}`]
                                  : row.key === "G"
                                  ? checkedG[`${row.key}${col.key}`]
                                  : ""
                              }
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
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>
                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
            <form>
              <table className="table">
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
                                      : row.key === "D"
                                      ? checkedD[`${row.key}${col.key}`]
                                      : row.key === "E"
                                      ? checkedE[`${row.key}${col.key}`]
                                      : row.key === "F"
                                      ? checkedF[`${row.key}${col.key}`]
                                      : row.key === "G"
                                      ? checkedG[`${row.key}${col.key}`]
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
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
