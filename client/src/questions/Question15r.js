import { Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question15r() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q15-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q15-checked")));
    }
    if (localStorage.getItem("q15")) {
      setInput(JSON.parse(localStorage.getItem("q15")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value:
        "Одобрить/дать зеленый свет крупным инициативам после того, как идея была предложена",
    },
    {
      key: "B",
      value: "Выделить значительные ресурсы на новые крупные инициативы",
    },
  ];
  const columns = [
    {
      key: "1",
      value: "До 3 месяцев",
    },
    {
      key: "2",
      value: "4-6 месяца",
    },
    {
      key: "3",
      value: "7-12 месяцев",
    },
    {
      key: "4",
      value: "13-18 месяцев",
    },
    {
      key: "5",
      value: "19-24 месяца",
    },
    {
      key: "6",
      value: "25-36 месяцев",
    },
    {
      key: "7",
      value: "Более 36 месяцев",
    },
    {
      key: "8",
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

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    Object.entries(input).map((el) => {
      Object.keys(checked)
        .filter((y) => y.slice(0, 1) === name && y === index)
        .map((z) => {
          return (checked[z] = true);
        });
    });

    Object.entries(input).map((el) => {
      Object.keys(checked)
        .filter((y) => y.slice(0, 1) === name && y !== index)
        .map((z) => {
          return (checked[z] = false);
        });
    });
  }

  useEffect(() => {
    localStorage.setItem("q15", JSON.stringify(input));
    localStorage.setItem("q15-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/rus-q16");

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
        q15: JSON.parse(localStorage.getItem("q15")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <Route path="/rus-q15">
      <div className="main" style={{ height: width > 768 ? "100vh" : "" }}>
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 16).toString())}% завершено
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 16).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Обычно сколько времени требуется вашей компании, чтобы:
            одобрить/дать зеленый свет крупным инициативам после того, как идея
            была предложена? выделить значительные ресурсы на новые крупные
            инициативы?
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
                  <p>
                    <strong style={{ color: "#db536a" }}>
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
          </div>
        ) : (
          <form>
            <table className="table">
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return (
                      <td>
                        <strong>{col.value}</strong>
                      </td>
                    );
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
                                checked={checked[`${row.key}${col.key}`]}
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
          </form>
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

          <Button variant="danger" className="next-btn" onClick={handleSubmit}>
            Далее
            <i
              className="fas fa-chevron-right"
              style={{ marginLeft: "8px" }}
            ></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
