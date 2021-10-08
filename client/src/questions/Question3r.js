import { Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import ModalAlert from "../ModalAlert";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Question3() {
  const width = window.screen.width;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Макроэкономическая волатильность",
      text: "(включая ВВП, безработицу, инфляцию)",
    },
    {
      key: "B",
      value: "Изменение климата",
      text: "(включая физические риски и переходные риски, такие как политические и юридические, рыночные, технологические и репутационные риски)",
    },
    {
      key: "C",
      value: "Социальное неравенство",
      text: "(включая связанное с полом, расой и этнической принадлежностью, финансовым положением)",
    },
    {
      key: "D",
      value: "Геополитические конфликты",
      text: "(включая ресурсные и торговые споры, терроризм, межгосударственные силовые действия)",
    },
    {
      key: "E",
      value: "Кибер-риски",
      text: "(включая взлом, слежку, дезинформацию)",
    },
    {
      key: "F",
      value: "Риски для здоровья",
      text: "(включая COVID-19 и другие пандемии, хронические заболевания, перенапряжение психики)",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Не обеспокоен (-а)",
    },
    {
      key: "2",
      value: "Немного обеспокоен (-а)",
    },
    {
      key: "3",
      value: "Незначительно обеспокоен (-а)",
    },
    {
      key: "4",
      value: "Очень обеспокоен (-а)",
    },
    {
      key: "5",
      value: "Крайне обеспокоен (-а)",
    },
    {
      key: "6",
      value: "Затрудняюсь ответить",
    },
  ];

  const [concerns, setConcerns] = useState([]);
  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
  });

  const [checked, setChecked] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,

    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,

    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,

    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,

    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,

    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("q3-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q3-checked")));
    }
    if (localStorage.getItem("q3")) {
      setInput(JSON.parse(localStorage.getItem("q3")));
    }
    if (localStorage.getItem("q3-concerns")) {
      setConcerns(JSON.parse(localStorage.getItem("q3-concerns")));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    Object.keys(checked)
      .filter((el) => el.slice(0, 1) === name && el === index)
      .map((y) => {
        checked[y] = true;
      });
    Object.keys(checked)
      .filter((z) => z.slice(0, 1) === name && z !== index)
      .map((a) => {
        checked[a] = false;
      });
  }

  useEffect(() => {
    Object.entries(input)
      .filter((x) => x[0] && x[1])
      .map((e) => {
        var index = e[0] + e[1];

        Object.keys(checked)
          .filter((el) => el.slice(0, 1) === e[0] && el === index)
          .map((y) => {
            checked[y] = true;
          });
        Object.keys(checked)
          .filter((z) => z.slice(0, 1) === e[0] && z !== index)
          .map((a) => {
            checked[a] = false;
          });
      });
  }, [input, checked, concerns]);

  useEffect(() => {
    Object.entries(input).map((el) => {
      if (el[1] === "3" || el[1] === "4" || el[1] === "5") {
        if (!concerns.includes(el[0])) {
          concerns.push(el[0]);
        }
      } else if (el[1] === "1" || el[1] === "2" || el[1] === "6") {
        if (concerns.includes(el[0])) {
          concerns.pop(el[0]);
        }
      }
    });
  }, [input]);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q3-checked", JSON.stringify(checked));
    localStorage.setItem("q3-concerns", JSON.stringify(concerns));
    localStorage.setItem("q3", JSON.stringify(input));

    if (input.A && input.B && input.C && input.D && input.E && input.F) {
      if (concerns.length > 0) {
        history.push("/rus-q4");
      } else {
        history.push("/rus-q5");
      }
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
      q2: JSON.parse(localStorage.getItem("q2")),
      q3: JSON.parse(localStorage.getItem("q3")),
    };

    axios.post("/allinputs", data);
  }

  return (
    <Route path="/rus-q3">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 4).toString())}% завершено
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 4).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p>
              Насколько вы обеспокоены, что следующие глобальные угрозы
              негативно повлияют на вашу компанию в следующие 12 месяцев?
            </p>
            <i>
              <p className="question">
                (ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)
              </p>
            </i>
          </div>
        </div>
        {width <= 768 ? (
          <div>
            {rows.map((row) => {
              return (
                <>
                  <div className="left-align-text">
                    <p className="question" style={{ color: "#db536a" }}>
                      <strong>{row.value}</strong>
                    </p>
                    <p>{row.text}</p>
                    {columns.map((col) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="radio"
                              name={row.key}
                              className="m-input"
                              value={col.key}
                              onChange={handleChange}
                              checked={checked[`${row.key}${col.key}`]}
                            ></input>
                            {col.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <form>
            <div style={{ overflow: "auto", height: "400px" }}>
              <table className="table" style={{ fontSize: "12px" }}>
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <tr style={{ position: "sticky", top: 0 }}>
                    <td colSpan="2"></td>
                    {columns.map((col) => {
                      return (
                        <td key={col.key}>
                          <strong>{col.value}</strong>
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr key={row.key} className="table-row">
                        <td style={{ width: "2%" }}>{row.key}</td>
                        <td
                          className="left-align-text"
                          style={{ width: "20%" }}
                        >
                          <p style={{ margin: 0, padding: 0 }}>
                            <strong>{row.value}</strong>
                          </p>
                          <p style={{ margin: 0, padding: 0 }}>{row.text}</p>
                        </td>
                        {columns.map((col) => {
                          return (
                            <td
                              className="input-cell"
                              style={{ width: "100px" }}
                            >
                              <label className="label-cell">
                                <input
                                  type="radio"
                                  name={row.key}
                                  value={col.key}
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
            </div>
          </form>
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

          <Button
            type="button"
            variant="danger"
            className="next-btn"
            onClick={handleSubmit}
          >
            Далее
            <i class="fas fa-chevron-right next-arrow"></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
