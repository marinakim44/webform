import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question1r() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("q1-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q1-checked")));
    }
    if (localStorage.getItem("q1")) {
      setInput(JSON.parse(localStorage.getItem("q1")));
    }
  }, []);

  const rows = [
    {
      key: "A",
      value: "Глобальный экономический рост - следующие 12 месяцев",
    },
    {
      key: "B",
      value: "Экономический рост Казахстана  - следующие 12 месяцев",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Значительно снизится",
    },
    {
      key: "2",
      value: "Умеренно снизится",
    },
    {
      key: "3",
      value: "Немного снизится",
    },
    {
      key: "4",
      value: "Останется на прежнем уровне",
    },
    {
      key: "5",
      value: "Немного повысится",
    },
    {
      key: "6",
      value: "Умеренно повысится",
    },
    {
      key: "7",
      value: "Значительно повысится",
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

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;

    setInput((prev) => {
      return {
        ...prev,
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
      .filter((el) => el === index)
      .map((el) => {
        return (checked[el] = true);
      });
    Object.keys(checked)
      .filter((el) => el !== index && el.slice(0, 1) === name)
      .map((el) => {
        return (checked[el] = false);
      });
  }

  useEffect(() => {
    localStorage.setItem("q1", JSON.stringify(input));
    localStorage.setItem("q1-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (input.A && input.B) {
      history.push("/rus-q2");
    } else {
      handleShow();
    }

    const data = {
      uuid: localStorage.getItem("uuid"),
      name: localStorage.getItem("name"),
      company: localStorage.getItem("company"),
      title: localStorage.getItem("title"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      q1: JSON.parse(localStorage.getItem("q1")),
    };

    axios.post("/allinputs", data);
  }

  return (
    <Route path="/rus-q1" exact>
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 2).toString())}% завершено
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 2).toString() + "%",
              }}
            ></div>
          </div>

          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p className="question">
              Как, по вашему мнению, изменится экономический рост (т.е. валовой
              внутренний продукт) в следующие 12 месяцев, если вообще изменится:{" "}
              <br />
              <span style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                A) глобальная экономика?
              </span>
              <br />
              <span style={{ marginLeft: "2rem" }}>
                B) экономика Казахстана?{" "}
              </span>
            </p>
            <i>
              <p
                className="question"
                style={{ margin: width <= 480 ? "1rem 0" : "" }}
              >
                (ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)
              </p>
            </i>
          </div>
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div>
                  <strong>
                    <p style={{ color: "#db536a" }} className="question">
                      {row.key}) ${row.value}
                    </p>
                  </strong>
                  {columns.map((col) => {
                    return (
                      <div className="m-div">
                        <label className="m-label">
                          <input
                            className="m-input"
                            name={row.key}
                            value={col.key}
                            type="radio"
                            onChange={handleChange}
                            checked={checked[`${row.key}${col.key}`]}
                          ></input>
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
          <Form>
            <table className="table">
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return (
                      <td key={col.key}>
                        <strong>{col.value}</strong>
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr key={row.key} className="table-row">
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>

                      {columns.map((col) => {
                        return (
                          <td key={col.key} className="input-cell">
                            <label className="label-cell">
                              <input
                                name={row.key}
                                value={col.key}
                                type="radio"
                                onChange={handleChange}
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
          </Form>
        )}
        <div className="back-next-btns">
          <Button
            variant="secondary"
            className="back-btn"
            onClick={() => history.goBack()}
          >
            <i className="fas fa-chevron-left back-arrow"></i>
            Назад
          </Button>

          <Button variant="danger" className="next-btn" onClick={handleSubmit}>
            Далее
            <i className="fas fa-chevron-right next-arrow"></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
