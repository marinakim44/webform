import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question11({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q11-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q11-checked")));
    }
    if (localStorage.getItem("q11")) {
      setInput(JSON.parse(localStorage.getItem("q11")));
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
            value:
              "My company does not produce a meaningful amount of greenhouse gas (GHG) emissions",
          },
          {
            key: "B",
            value:
              "My company does not currently have the capabilities to measure its greenhouse gas (GHG) emissions",
          },
          {
            key: "C",
            value:
              "My company cannot financially afford to make a carbon-neutral or net-zero commitment",
          },
          {
            key: "D",
            value:
              "My company’s external stakeholders (e.g., investors, customers, suppliers) are not significantly concerned about climate change",
          },
          {
            key: "E",
            value:
              "My company is not confident it could fulfil a carbon-neutral or net-zero commitment",
          },
          {
            key: "F",
            value:
              "My company's sector does not have an established decarbonisation approach",
          },
          {
            key: "G",
            value:
              "My company’s internal stakeholders (e.g., employees, board members, owners) are not significantly concerned about climate change",
          },
        ]
      : [
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

  const columns =
    lng === "English"
      ? [
          {
            key: "1",
            value: "Not accurate",
          },
          {
            key: "2",
            value: "Slightly accurate",
          },
          {
            key: "3",
            value: "Moderately accurate",
          },
          {
            key: "4",
            value: "Very accurate",
          },
          {
            key: "5",
            value: "Extremely accurate",
          },
          {
            key: "6",
            value: "Don't know",
          },
        ]
      : [
          {
            key: "1",
            value: "Не точно",
          },
          {
            key: "2",
            value: "Точно в незначительной степени",
          },
          {
            key: "3",
            value: "Относительно точно",
          },
          {
            key: "4",
            value: "Очень точно",
          },
          {
            key: "5",
            value: "Чрезвычайно точно",
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
    A7: false,

    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
    B7: false,

    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,

    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    D6: false,
    D7: false,

    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    E6: false,
    E7: false,

    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,

    G1: false,
    G2: false,
    G3: false,
    G4: false,
    G5: false,
    G6: false,
    G7: false,
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
    localStorage.setItem("q11-checked", JSON.stringify(checked));
    localStorage.setItem("q11", JSON.stringify(input));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
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
        q11: JSON.parse(localStorage.getItem("q11")),
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
    <Route path="/eng-q11">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 12) * 12).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 12) * 12).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                How accurate are the following statements regarding why your
                company has not made a carbon-neutral or net-zero commitment?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
              </p>
            </>
          ) : (
            <>
              <p className="left-align-text question">
                Насколько точны следующие утверждения относительно того, почему
                ваша компания не взяла на себя обязательство по углеродной
                нейтральности или нулевым выбросам?
              </p>
              <p className="question-i">
                <i>(ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)</i>
              </p>
            </>
          )}
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div className="left-align-text" key={row.key}>
                  <strong>
                    <p className="question" style={{ color: "#db536a" }}>
                      {row.key}) {row.value}
                    </p>
                  </strong>
                  {columns.map((col) => {
                    return (
                      <div className="m-div" key={col.key}>
                        <label className="m-label">
                          <input
                            className="m-input"
                            type="radio"
                            name={row.key}
                            value={col.key}
                            onChange={handleClick}
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
            <Table bordered style={{ fontSize: "14px" }}>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                  {columns.map((column) => {
                    return <th key={column.key}>{column.value}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  return (
                    <tr key={row.key}>
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell" key={col.key}>
                            <label className="label-cell">
                              <input
                                type="radio"
                                className="m-input"
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
            </Table>
          </form>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
