import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question17({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q17-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q17-checked")));
    }
    if (localStorage.getItem("q17")) {
      setInput(JSON.parse(localStorage.getItem("q17")));
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
            value: "Initiate investments in new projects",
          },
          {
            key: "B",
            value: "Stop low-potential or nonaligned projects",
          },
          {
            key: "C",
            value: "Invest in high-potential projects",
          },
          {
            key: "D",
            value: "Scale-up high-performing small businesses",
          },
          {
            key: "E",
            value: "Trim low-performing large businesses",
          },
          {
            key: "F",
            value: "Divest businesses",
          },
          {
            key: "G",
            value: "Acquire businesses",
          },
        ]
      : [
          {
            key: "A",
            value: "Организация инвестиций в новые проекты ",
          },
          {
            key: "B",
            value:
              "Приостановка проектов с низким потенциалом или несогласованных проектов",
          },
          {
            key: "C",
            value: "Инвестирование в перспективные проекты ",
          },
          {
            key: "D",
            value: "Расширение высокопроизводительных малых предприятий ",
          },
          {
            key: "E",
            value: "Сокращение неэффективных крупных предприятий",
          },
          {
            key: "F",
            value: "Вывод инвестиций из бизнеса",
          },
          {
            key: "G",
            value: "Приобретение компаний",
          },
        ];

  const columns =
    lng === "English"
      ? [
          {
            key: "1",
            title: "Less often",
            value: "Every four years or less frequently",
          },
          {
            key: "2",
            title: "Less often",
            value: "Every three years",
          },
          {
            key: "3",
            title: "Less often",
            value: "Every two years",
          },
          {
            key: "4",
            title: "Every year",
            value: "Every year",
          },
          {
            key: "5",
            title: "More often",
            value: "Twice a year",
          },
          {
            key: "6",
            title: "More often",
            value: "Three times a year",
          },
          {
            key: "7",
            title: "More often",
            value: "Four times a year or more frequently",
          },
          {
            key: "8",
            title: "Not applicable / Don't know",
            value: "Not applicable / Don't know",
          },
        ]
      : [
          {
            key: "1",
            title: "Реже",
            value: "Каждые четыре года или реже",
          },
          {
            key: "2",
            title: "Реже",
            value: "Каждые три года",
          },
          {
            key: "3",
            title: "Реже",
            value: "Каждые два года",
          },
          {
            key: "4",
            title: "Каждый год",
            value: "Каждый год",
          },
          {
            key: "5",
            title: "Чаще",
            value: "Дважды в год",
          },
          {
            key: "6",
            title: "Чаще",
            value: "Три раза в год",
          },
          {
            key: "7",
            title: "Чаще",
            value: "Четыре раза в год или чаще",
          },
          {
            key: "8",
            title: "Не применимо / Затрудняюсь ответить",
            value: "Не применимо / Затрудняюсь ответить",
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

    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,
    D7: false,
    D8: false,

    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,
    E7: false,
    E8: false,

    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,
    F8: false,

    G1: false,
    G2: false,
    G3: false,
    G4: false,
    G5: false,
    G6: false,
    G7: false,
    G8: false,
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
    localStorage.setItem("q17-checked", JSON.stringify(checked));
    localStorage.setItem("q17", JSON.stringify(input));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q18");

      const data = {
        uuid: localStorage.getItem("uuid"),
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
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q17">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 18).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 18).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  How frequently does your company typically engage in the
                  following processes?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
                </p>
              </>
            ) : (
              <>
                <p className="left-align-text question">
                  Как часто ваша компания обычно участвует в следующих
                  процессах?
                </p>
                <p className="question-i">
                  <i>ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА</i>
                </p>
              </>
            )}
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div key={row.key}>
                    <p className="question" style={{ color: "#db536a" }}>
                      <strong>
                        {row.key}) {row.value}
                      </strong>
                    </p>
                    {columns.map((col) => {
                      return (
                        <div className="m-div" key={col.key}>
                          <label className="m-label">
                            <input
                              type="radio"
                              name={row.key}
                              value={col.key}
                              className="m-input"
                              onChange={handleClick}
                              checked={
                                checked[`${row.key}${col.key}`] === true
                                  ? true
                                  : false
                              }
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
              <div>
                <Table bordered className="table">
                  <thead>
                    <tr
                      style={{
                        fontWeight: "bold",
                        color: "#db536a",
                      }}
                    >
                      <td colSpan="2" rowSpan="2"></td>
                      <td colSpan="3">
                        {lng === "English" ? "Less often" : "Реже"}
                      </td>
                      <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                        {lng === "English" ? "Every year" : "Каждый год"}
                      </td>
                      <td colSpan="3">
                        {lng === "English" ? "More often" : "Чаще"}
                      </td>
                      <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                        {lng === "English"
                          ? "Not applicable / Don't know"
                          : "Не применимо / Затрудняюсь ответить"}
                      </td>
                    </tr>
                    <tr>
                      {columns
                        .filter(
                          (col) =>
                            col.value !== "Every year" &&
                            col.value !== "Not applicable / Don't know" &&
                            col.value !==
                              "Не применимо / Затрудняюсь ответить" &&
                            col.value !== "Каждый год"
                        )
                        .map((column) => {
                          return <td key={column.key}>{column.value}</td>;
                        })}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr className="table-row" key={row.key}>
                          <td>{row.key}</td>
                          <td className="left-align-text">{row.value}</td>
                          {columns.map((col) => {
                            return (
                              <td className="input-cell" key={col.key}>
                                <label className="alt-label-cell">
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
              </div>
            </form>
          )}
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
