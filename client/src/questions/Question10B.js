import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question10B({ lng }) {
  const width = window.screen.width;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q10b-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q10b-checked")));
    }
    if (localStorage.getItem("q10b")) {
      setInput(JSON.parse(localStorage.getItem("q10b")));
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
            key: "A",
            value: "Attracting and/or retaining employees",
          },
          {
            key: "B",
            value: "Satisfying investor demands",
          },
          {
            key: "C",
            value: "Meeting customer expectations",
          },
          {
            key: "D",
            value: "Complying with government and/or intergovernmental targets",
          },
          {
            key: "E",
            value: "Mitigating climate change risks",
          },
          {
            key: "F",
            value: "Driving product/service innovation",
          },
          {
            key: "G",
            value: "Keeping pace with competitor commitments",
          },
        ]
      : [
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
            value:
              "Соответствие государственным и/или межправительственным целям ",
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

  const columns =
    lng === "English"
      ? [
          {
            key: "1",
            value: "Not influential",
          },
          {
            key: "2",
            value: "Slightly influential",
          },
          {
            key: "3",
            value: "Moderately influential",
          },
          {
            key: "4",
            value: "Very influential",
          },
          {
            key: "5",
            value: "Extremely influential",
          },
          {
            key: "6",
            value: "Don't know",
          },
        ]
      : [
          {
            key: "1",
            value: "Не важны",
          },
          {
            key: "2",
            value: "Важны в незначительной степени",
          },
          {
            key: "3",
            value: "Относительно важны",
          },
          {
            key: "4",
            value: "Очень важны",
          },
          {
            key: "5",
            value: "Чрезвычайно важны",
          },
          {
            key: "6",
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
      .filter((v) => v[0].slice(0, 1) === name && v[0] === index)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v[0].slice(0, 1) === name && v[0] !== index)
      .map((v) => (checked[v] = false));
  }

  useEffect(() => {
    localStorage.setItem("q10b-checked", JSON.stringify(checked));
    localStorage.setItem("q10b", JSON.stringify(input));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((el) => el[1] === "").length > 0) {
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

      history.push("/eng-q12");
    }
  }

  return (
    <Route path="/eng-q10b">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 11).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
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
          {lng === "English" ? (
            <>
              <p className="question">
                How influential are the following factors behind the
                carbon-neutral and/or net-zero commitment your company is
                developing?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                Насколько важны следующие факторы, лежащие в основе обязательств
                вашей компании по углеродной нейтральности и/или нулевым
                выбросам?
              </p>
              <p className="question-i">
                <i>ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА</i>
              </p>
            </>
          )}
        </div>

        {width <= 768 ? (
          <div>
            {rows.map((row) => {
              return (
                <div key={row.key}>
                  <strong>
                    <p
                      className="question question-options"
                      style={{ color: "#db536a" }}
                    >
                      {row.key}) {row.value}
                    </p>
                  </strong>
                  {columns.map((col) => {
                    return (
                      <div className="m-div left-align-text" key={col.key}>
                        <label className="m-label">
                          <input
                            type="radio"
                            name={row.key}
                            value={col.key}
                            onChange={handleClick}
                            className="m-input"
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
          <form>
            <table className="table">
              <tbody>
                <tr>
                  <th colSpan="2"></th>
                  {columns.map((column) => {
                    return <th key={column.value}>{column.value}</th>;
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr
                      key={row.key}
                      className="table-row"
                      style={{ padding: 0 }}
                    >
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td key={col.key} className="input-cell">
                            <label className="alt-label-cell">
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
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
