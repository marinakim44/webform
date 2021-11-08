import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question24({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q24")) {
      setInput(JSON.parse(localStorage.getItem("q24")));
    }
    if (localStorage.getItem("q24-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q24-checked")));
    }
    if (localStorage.getItem("q24-none")) {
      setNone(JSON.parse(localStorage.getItem("q24-none")));
    }
    if (localStorage.getItem("q24-not")) {
      setNot(JSON.parse(localStorage.getItem("q24-not")));
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
            index: "1",
            value: "Greenhouse gas (GHG) emission targets",
          },
          {
            key: "B",
            index: "2",
            value: "Gender representation rates",
          },
          {
            key: "C",
            index: "3",
            value: "Race and ethnicity representation rates",
          },
          {
            key: "D",
            index: "4",
            value: "Customer satisfaction metrics",
          },
          {
            key: "E",
            index: "5",
            value: "Automation and digitisation goals",
          },
          {
            key: "F",
            index: "6",
            value: "Employee engagement metrics",
          },
        ]
      : [
          {
            index: "1",
            key: "A",
            value: "Целевые показатели выбросов парниковых газов (ПГ)",
          },
          {
            index: "2",
            key: "B",
            value: "Показатели гендерной представленности",
          },
          {
            index: "3",
            key: "C",
            value: "Показатели расовой и этнической представленности ",
          },
          {
            index: "4",
            key: "D",
            value: "Показатели удовлетворенности клиентов",
          },
          {
            index: "5",
            key: "E",
            value: "Цели автоматизации и цифровых технологий",
          },
          {
            index: "6",
            key: "F",
            value: "Показатели вовлеченности сотрудников ",
          },
        ];

  const columns =
    lng === "English"
      ? [
          {
            key: "A",
            value: "Company’s long-term corporate strategy",
          },
          {
            key: "B",
            value: "Personal annual bonus or long-term incentive plan",
          },
        ]
      : [
          {
            key: "A",
            value: "Долгосрочная корпоративная стратегия компании",
          },
          {
            key: "B",
            value:
              "Личный годовой бонус или долгосрочная система вознаграждений",
          },
        ];

  const [input, setInput] = useState([]);

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
  });

  const [none, setNone] = useState({
    A: false,
    B: false,
  });
  const [not, setNot] = useState({
    A: false,
    B: false,
  });

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;

    setChecked((prev) => {
      return {
        ...prev,
        [index]: !checked[index],
      };
    });
  }

  const handleNone = (e) => {
    const { name, value } = e.target;
    const index = name + value;

    setNone((prev) => {
      return {
        ...prev,
        [name]: !none[name],
      };
    });

    if (none[name] === false) {
      Object.entries(checked)
        .filter((x) => x[0].slice(0, 1) === name && x[0] !== index)
        .map((x) => {
          return (
            (checked[x[0]] = false),
            setNot((prev) => {
              return {
                ...prev,
                [name]: false,
              };
            }),
            setInput(input.filter((el) => el[0].slice(0, 1) !== name))
          );
        });
    }
  };

  const handleNot = (e) => {
    const { name, value } = e.target;
    const index = name + value;

    setNot((prev) => {
      return {
        ...prev,
        [name]: !not[name],
      };
    });

    if (not[name] === false) {
      Object.entries(checked)
        .filter((x) => x[0].slice(0, 1) === name && x[0] !== index)
        .map((x) => {
          return (
            (checked[x[0]] = false),
            setNone((prev) => {
              return {
                ...prev,
                [name]: false,
              };
            }),
            setInput(input.filter((el) => el[0].slice(0, 1) !== name))
          );
        });
    }
  };

  useEffect(() => {
    Object.entries(checked)
      .filter((x) => x[1] === true)
      .forEach((x) => {
        if (input.filter((el) => el === x[0]).length === 0) {
          input.push(x[0]);
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === false)
      .forEach((x) => {
        if (input.includes(x[0])) {
          setInput(input.filter((e) => e !== x[0]));
        }
      });

    localStorage.setItem("q24-checked", JSON.stringify(checked));
    localStorage.setItem("q24", JSON.stringify(input));
    localStorage.setItem("q24-none", JSON.stringify(none));
    localStorage.setItem("q24-not", JSON.stringify(not));
  }, [checked, input, none, not]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      input.filter((x) => x.slice(0, 1) === "A").length === 0 &&
      none.A === false &&
      not.A === false
    ) {
      handleShow();
    } else if (
      input.filter((x) => x.slice(0, 1) === "B").length === 0 &&
      none.B === false &&
      not.B === false
    ) {
      handleShow();
    } else {
      history.push("/eng-q25");

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
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
        q24: JSON.parse(localStorage.getItem("q24")),
        q24none: JSON.parse(localStorage.getItem("q24-none")),
        q24not: JSON.parse(localStorage.getItem("q24-not")),
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
      <Route path="/eng-q24">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 25).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 25).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  <strong>
                    Are the following non-financial related outcomes included in
                    your:
                  </strong>

                  <li style={{ listStyle: "none" }}>
                    {" "}
                    A) company’s long-term corporate strategy?
                  </li>

                  <li style={{ listStyle: "none" }}>
                    B) personal annual bonus or long-term incentive plan?
                  </li>
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ALL THAT APPLY</i>
                </p>
              </>
            ) : (
              <>
                <p className="question">
                  <strong>
                    Включены ли следующие результаты, не связанные с финансами:
                  </strong>
                  <li style={{ listStyle: "none" }}>
                    A) в долгосрочную корпоративную стратегию вашей компании?
                  </li>
                  <li style={{ listStyle: "none", marginBottom: "8px" }}>
                    B) в ваш личный годовой бонус или в долгосрочную систему
                    вознаграждений?
                  </li>
                  <i className="question-i">
                    ПОЖАЛУЙСТА, ВЫБЕРИТЕ ВСЕ, ЧТО ПРИМЕНИМО
                  </i>
                </p>
              </>
            )}
          </div>

          {width <= 768 ? (
            <div className="left-align-text">
              {columns.map((col) => {
                return (
                  <div key={col.key}>
                    <strong>
                      <p className="question" style={{ color: "#db536a" }}>
                        {col.key}) {col.value}
                      </p>
                    </strong>
                    {rows.map((row) => {
                      return (
                        <div key={row.index} className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              name={col.key}
                              className="radio-input"
                              value={row.index}
                              onChange={handleClick}
                              checked={checked[`${col.key}${row.index}`]}
                              disabled={
                                none[col.key] === true || not[col.key] === true
                                  ? true
                                  : false
                              }
                            ></input>
                            {row.value}
                          </label>
                        </div>
                      );
                    })}
                    <div className="m-div">
                      <label className="m-label">
                        <input
                          type="checkbox"
                          className="radio-input"
                          name={col.key}
                          value="7"
                          onChange={handleNone}
                          checked={none[col.key] === true ? true : false}
                          disabled={not[col.key] === true ? true : false}
                        ></input>
                        {lng === "English"
                          ? "None of the above"
                          : "Ничего из вышеперечисленного"}
                      </label>
                    </div>
                    <div className="m-div">
                      <label className="m-label">
                        <input
                          type="checkbox"
                          className="radio-input"
                          name={col.key}
                          value="8"
                          onChange={handleNot}
                          checked={not[col.key] === true ? true : false}
                          disabled={none[col.key] === true ? true : false}
                        ></input>
                        {lng === "English"
                          ? "Prefer not to answer"
                          : "Предпочел бы не отвечать"}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>

                  {columns.map((col) => {
                    return (
                      <td key={col.key}>
                        <strong>
                          {col.key}) {col.value}
                        </strong>
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr key={row.index}>
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell" key={col.key}>
                            <label className="alt-label-cell">
                              <input
                                type="checkbox"
                                name={col.key}
                                value={row.index}
                                onChange={handleClick}
                                checked={checked[`${col.key}${row.index}`]}
                                disabled={
                                  none[col.key] === true ||
                                  not[col.key] === true
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
                <tr>
                  <td>G</td>
                  <td className="left-align-text">
                    {lng === "English"
                      ? "None of the above"
                      : "Ничего из вышеперечисленного"}
                  </td>
                  <td className="input-cell">
                    <label className="alt-label-cell">
                      <input
                        type="checkbox"
                        name="A"
                        value="7"
                        onChange={handleNone}
                        checked={none.A === true ? true : false}
                        disabled={not.A === true ? true : false}
                      ></input>
                    </label>
                  </td>
                  <td className="input-cell">
                    <label className="alt-label-cell">
                      <input
                        type="checkbox"
                        name="B"
                        value="7"
                        onChange={handleNone}
                        checked={none.B === true ? true : false}
                        disabled={not.B === true ? true : false}
                      ></input>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>H</td>
                  <td className="left-align-text">
                    {lng === "English"
                      ? "Prefer not to answer"
                      : "Предпочел бы не отвечать"}
                  </td>
                  <td className="input-cell">
                    <label className="alt-label-cell">
                      <input
                        type="checkbox"
                        name="A"
                        value="8"
                        onChange={handleNot}
                        checked={not.A === true ? true : false}
                        disabled={none.A === true ? true : false}
                      ></input>
                    </label>
                  </td>
                  <td className="input-cell">
                    <label className="alt-label-cell">
                      <input
                        type="checkbox"
                        name="B"
                        value="8"
                        onChange={handleNot}
                        checked={not.B === true ? true : false}
                        disabled={none.B === true ? true : false}
                      ></input>
                    </label>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
