import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question25B({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q25b")) {
      setInput(JSON.parse(localStorage.getItem("q25b")));
    }
    if (localStorage.getItem("q25b-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q25b-checked")));
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
            value: "A skilled, educated and adaptable workforce",
          },
          {
            key: "B",
            value: "Adequate digital and physical infrastructure",
          },
          {
            key: "C",
            value: "Reducing climate change and environmental damage",
          },
          {
            key: "D",
            value: "High levels of employment",
          },
          {
            key: "E",
            value: "An effective tax system",
          },
          {
            key: "F",
            value: "Greater income equality",
          },
          {
            key: "G",
            value: "The good health and well-being of the workforce",
          },
          {
            key: "H",
            value: "A diverse and inclusive workforce",
          },
          {
            key: "I",
            value: "Safeguards around usage of personal data",
          },
          {
            key: "J",
            value: "Predictable macroeconomic environment",
          },
          {
            key: "K",
            value: "Investment attractiveness of the country",
          },
          {
            key: "L",
            value: "Fighting against corruption and bribery",
          },
          {
            key: "M",
            value: "The supremacy of law in all spheres of state activity",
          },
          {
            key: "N",
            value: "Access to affordable capital",
          },
        ]
      : [
          {
            key: "A",
            value: "Квалифицированный и адаптивный персонал ",
          },
          {
            key: "B",
            value:
              "Развитая инфраструктура  (включая цифровую инфраструктуру) ",
          },
          {
            key: "C",
            value:
              "Снижение рисков изменения климата и ущерба окружающей среде",
          },
          {
            key: "D",
            value: "Высокий уровень занятости",
          },
          {
            key: "E",
            value: "Эффективная налоговая система",
          },
          {
            key: "F",
            value: "Большее равенство доходов населения",
          },
          {
            key: "G",
            value: "Здоровье и благополучие сотрудников",
          },
          {
            key: "H",
            value: "Диверсифицированный и инклюзивный персонал",
          },
          {
            key: "I",
            value: "Меры предосторожности при использовании личных данных",
          },
          {
            key: "J",
            value: "Предсказуемая макроэкономическая среда",
          },
          {
            key: "K",
            value: "Инвестиционная привлекательность страны",
          },
          {
            key: "L",
            value: "Борьба с коррупцией и взяточничеством",
          },
          {
            key: "M",
            value: "Верховенство права во всех сферах деятельности государства",
          },
          {
            key: "N",
            value: "Доступ к недорогому капиталу",
          },
        ];

  const columns =
    lng === "English"
      ? [
          {
            key: "1",
            value: "Greatly ineffective",
          },
          {
            key: "2",
            value: "Ineffective",
          },
          {
            key: "3",
            value: "Neither / nor",
          },
          {
            key: "4",
            value: "Effective",
          },
          {
            key: "5",
            value: "Greatly effective",
          },
          {
            key: "6",
            value: "Don't know",
          },
          {
            key: "7",
            value: "Refused",
          },
        ]
      : [
          {
            key: "1",
            value: "Очень неэффективно",
          },
          {
            key: "2",
            value: "Неэффективно",
          },
          {
            key: "3",
            value: "Не могу сказать определенно",
          },
          {
            key: "4",
            value: "Эффективно",
          },
          {
            key: "5",
            value: "Очень эффективно",
          },
          {
            key: "6",
            value: "Затрудняюсь ответить",
          },
          {
            key: "7",
            value: "Отказ от ответа",
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
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
  });

  const [none, setNone] = useState(false);
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

    H1: false,
    H2: false,
    H3: false,
    H4: false,
    H5: false,
    H6: false,
    H7: false,

    I1: false,
    I2: false,
    I3: false,
    I4: false,
    I5: false,
    I6: false,
    I7: false,

    J1: false,
    J2: false,
    J3: false,
    J4: false,
    J5: false,
    J6: false,
    J7: false,

    K1: false,
    K2: false,
    K3: false,
    K4: false,
    K5: false,
    K6: false,
    K7: false,

    L1: false,
    L2: false,
    L3: false,
    L4: false,
    L5: false,
    L6: false,
    L7: false,

    M1: false,
    M2: false,
    M3: false,
    M4: false,
    M5: false,
    M6: false,
    M7: false,

    N1: false,
    N2: false,
    N3: false,
    N4: false,
    N5: false,
    N6: false,
    N7: false,
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    const index = name + value;
    setNone(false);
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
  };

  const handleNone = () => {
    setNone(!none);
  };

  useEffect(() => {
    if (none === true) {
      Object.keys(checked).forEach((el) => {
        checked[el] = false;
      });
      Object.keys(input).forEach((el) => {
        input[el] = "";
      });
    }

    localStorage.setItem("q25b-none", none);
    localStorage.setItem("q25b", JSON.stringify(input));
    localStorage.setItem("q25b-checked", JSON.stringify(checked));
  }, [input, checked, none]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      Object.entries(input).filter((x) => x[1] === "").length > 0 &&
      none === false
    ) {
      handleShow();
    } else {
      history.push("/eng-q25c");

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
        q25none: localStorage.getItem("q25-none"),
        q25dontknow: localStorage.getItem("q25-dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25b: JSON.parse(localStorage.getItem("q25b")),
        q25bNone: localStorage.getItem("q25b-none"),
        q25bDontknow: localStorage.getItem("q25b-dontknow"),
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
      <Route path="/eng-q25b">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 27).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 27).toString() + "%",
                }}
              ></div>
            </div>

            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  How effective do you think the government has been in
                  achieving these outcomes in Kazakhstan?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE ONLY PER ROW</i>
                </p>
              </>
            ) : (
              <>
                <p className="question">
                  Насколько эффективно добивается правительство достижения этих
                  целей в Казахстане?
                </p>
                <p className="question-i">
                  <i>ВЫБЕРИТЕ ОДИН ВАРИАНТ ОТВЕТА ДЛЯ КАЖДОЙ СТРОКИ</i>
                </p>
              </>
            )}
          </div>

          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div key={row.key}>
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
                              type="radio"
                              name={row.key}
                              value={col.key}
                              onChange={handleClick}
                              checked={checked[`${row.key}${col.key}`]}
                              className="m-input"
                            ></input>
                            {col.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="dontknow-div">
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  className="none-btn"
                  value="None of the above"
                  onClick={handleNone}
                >
                  {lng === "English"
                    ? "NONE OF THE ABOVE"
                    : "Ничего из вышеперечисленного"}
                </Button>
              </div>
            </div>
          ) : (
            <Form>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th
                        colSpan="2"
                        style={{ position: "sticky", top: 0, zIndex: 1 }}
                      ></th>
                      {columns.map((col) => {
                        return (
                          <th
                            key={col.key}
                            style={{
                              position: "sticky",
                              top: 0,
                              zIndex: 1,
                              width: "120px",
                              verticalAlign: "middle",
                            }}
                          >
                            {col.value}
                          </th>
                        );
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
                                      none === true
                                        ? false
                                        : checked[`${row.key}${col.key}`]
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
                </table>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    width: "35%",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    type="button"
                    variant={none ? "warning" : "outline-dark"}
                    className="none-btn"
                    value="None of the above"
                    onClick={handleNone}
                  >
                    {lng === "English"
                      ? "NONE OF THE ABOVE"
                      : "Ничего из вышеперечисленного"}
                  </Button>
                </div>
              </div>
            </Form>
          )}
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
