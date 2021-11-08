import { Route, useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question14({ lng }) {
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
      value:
        lng === "English"
          ? "Assess its major initiatives"
          : "Оценивает свои основные инициативы",
    },
    {
      key: "B",
      value:
        lng === "English"
          ? "Change its major initiatives"
          : "Меняет свои основные инициативы",
    },
    {
      key: "C",
      value:
        lng === "English"
          ? "Update its workforce about its major initiatives"
          : "Информирует персонал о своих основных инициативах",
    },
  ];

  const columns = [
    {
      key: "1",
      title: lng === "English" ? "<- Less often" : "<- Реже",
      value:
        lng === "English"
          ? "Every four years or less frequently"
          : "Каждые четыре года или реже",
    },
    {
      key: "2",
      title: lng === "English" ? "<- Less often" : "<- Реже",
      value: lng === "English" ? "Every three years" : "Каждые три года",
    },
    {
      key: "3",
      title: lng === "English" ? "<- Less often" : "<- Реже",
      value: lng === "English" ? "Every two years" : "Каждые два года",
    },
    {
      key: "4",
      title: lng === "English" ? "Every year" : "Каждый год",
      value: lng === "English" ? "Every year" : "Каждый год",
    },
    {
      key: "5",
      title: lng === "English" ? "More often ->" : "Чаще ->",
      value: lng === "English" ? "Twice a year" : "Дважды в год",
    },
    {
      key: "6",
      title: lng === "English" ? "More often ->" : "Чаще ->",
      value: lng === "English" ? "Three times a year" : "Три раза в год",
    },
    {
      key: "7",
      title: lng === "English" ? "More often ->" : "Чаще ->",
      value:
        lng === "English"
          ? "Four times a year or more frequently"
          : "Четыре раза в год или чаще",
    },
    {
      key: "8",
      title: lng === "English" ? "Don't know" : "Затрудняюсь ответить",
      value: lng === "English" ? "Don't know" : "Затрудняюсь ответить",
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
      history.push("/eng-q15");

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
    <Route path="/eng-q14">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 15).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
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
          {lng === "English" ? (
            <>
              <p className="question">
                <strong>
                  Typically, how frequently does your company formally:
                </strong>{" "}
                <br />- assess its major initiatives?
                <br />- change its major initiatives?
                <br />- update its workforce about its major initiatives?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
              </p>
            </>
          ) : (
            <>
              <p className="left-align-text question">
                <strong>Обычно как часто ваша компания формально:</strong>
                <br />- оценивает свои основные инициативы?
                <br />- меняет свои основные инициативы?
                <br />- информирует персонал о своих основных инициативах?
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
                      <div key={col.key} className="m-div">
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
          <>
            <Table bordered className="table">
              <tbody>
                <tr style={{ fontWeight: "bold", color: "#dc3545" }}>
                  <td colSpan="2" rowSpan="2"></td>
                  <td colSpan="3">
                    {lng === "English" ? "Less often" : "Реже"}
                  </td>
                  <td rowSpan="2">
                    {lng === "English" ? "Every year" : "Каждый год"}
                  </td>
                  <td colSpan="3">
                    {lng === "English" ? "More often" : "Чаще"}
                  </td>
                  <td rowSpan="2">
                    {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                  </td>
                </tr>
                <tr>
                  {columns
                    .filter(
                      (col) =>
                        col.value !== "Every year" &&
                        col.value !== "Don't know" &&
                        col.value !== "Каждый год" &&
                        col.value !== "Затрудняюсь ответить"
                    )
                    .map((col) => {
                      return <td key={col.key}>{col.value}</td>;
                    })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr className="table-row" key={row.key}>
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell" key={col.key}>
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
          </>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
