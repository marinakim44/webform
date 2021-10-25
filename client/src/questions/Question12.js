import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question12({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q12-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q12-checked")));
    }
    if (localStorage.getItem("q12")) {
      setInput(JSON.parse(localStorage.getItem("q12")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value:
        lng === "English"
          ? "The industry’s long-term trends"
          : "Долгосрочные тенденции отрасли",
    },
    {
      key: "B",
      value:
        lng === "English"
          ? "The regulatory environment(s) in which my company operates"
          : "Нормативная среда, в которой работает моя компания",
    },
    {
      key: "C",
      value:
        lng === "English"
          ? "Macro environmental forces (including demographic, cultural, environmental, technological)"
          : "Макро-экологические факторы (включая демографические, культурные, экологические, технологические)",
    },
    {
      key: "D",
      value:
        lng === "English"
          ? "My company’s specific assets, capabilities and relationships"
          : "Конкретные активы, технические возможности и отношения моей компании",
    },
  ];

  const columns = [
    {
      key: "1",
      value: lng === "English" ? "Very unfavourable" : "Очень неблагоприятны",
    },
    {
      key: "2",
      value:
        lng === "English"
          ? "Moderately unfavourable"
          : "Умеренно неблагоприятны",
    },
    {
      key: "3",
      value:
        lng === "English"
          ? "Slightly unfavourable"
          : "Незначительно неблагоприятны",
    },
    {
      key: "4",
      value:
        lng === "English"
          ? "Neither favourable nor unfavourable"
          : "Не могу сказать определенно",
    },
    {
      key: "5",
      value:
        lng === "English"
          ? "Slightly favourable"
          : "Незначительно благоприятны",
    },
    {
      key: "6",
      value:
        lng === "English" ? "Moderately favourable" : "Умеренно благоприятны",
    },
    {
      key: "7",
      value: lng === "English" ? "Very favourable" : "Очень благоприятны",
    },
    {
      key: "8",
      value: lng === "English" ? "Don't know" : "Затрудняюсь ответить",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
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
    localStorage.setItem("q12", JSON.stringify(input));
    localStorage.setItem("q12-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q13");

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
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
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
      <Route path="/eng-q12">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 13).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 13).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="left-align-text">
                  How favourable are the following factors with regard to your
                  company’s ability to reduce greenhouse gas (GHG) emissions?{" "}
                  <br />
                </p>
                <p className="question-i">
                  <i>
                    (favourable factors are those that may help your company,
                    unfavourable factors are those that may hinder your company)
                  </i>
                </p>
              </>
            ) : (
              <>
                <p
                  className="left-align-text question"
                  style={{ marginBottom: width <= 480 ? "0.5rem" : "" }}
                >
                  Насколько благоприятны следующие факторы в отношении
                  способности вашей компании создавать финансовую ценность?
                </p>

                <p className="left-align-text question-i">
                  <i>
                    (благоприятные факторы - это те, которые могут помочь вашей
                    компании, неблагоприятные - те, которые могут помешать вашей
                    компании)
                  </i>
                </p>
              </>
            )}
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div>
                    <p
                      className="question question-options"
                      style={{ color: "#db536a" }}
                    >
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
            </div>
          ) : (
            <>
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
            </>
          )}
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
