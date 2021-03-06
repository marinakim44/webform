import { Route, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
// import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question4({ lng }) {
  const rows = [
    {
      key: "1",
      value: lng === "English" ? "...option 1" : "...вариант 1",
    },
    {
      key: "2",
      value: lng === "English" ? "...option 2" : "...вариант 2",
    },
    {
      key: "3",
      value: lng === "English" ? "...option 3" : "...вариант 3",
    },
    {
      key: "4",
      value: lng === "English" ? "...option 4" : "...вариант 4",
    },
    {
      key: "5",
      value: lng === "English" ? "...option 5" : "...вариант 5",
    },
  ];

  const width = window.screen.width;
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const history = useHistory();
  const [concerns, setConcerns] = useState([]);
  const [checked, setChecked] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
  });
  // const errors = [];
  const [other, setOther] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("q4-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q4-checked")));
    }
    if (localStorage.getItem("q4-other")) {
      setOther(localStorage.getItem("q4-other"));
    }
    if (localStorage.getItem("q4-list")) {
      setList(JSON.parse(localStorage.getItem("q4-list")));
    }
    if (localStorage.getItem("q3-concerns")) {
      setConcerns(JSON.parse(localStorage.getItem("q3-concerns")));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;

    setChecked((prev) => {
      return {
        ...prev,
        [index]: !checked[index],
      };
    });
  }

  useEffect(() => {
    concerns.forEach((element) => {
      var i = element.slice(0, 1);

      Object.entries(checked)
        .filter((el) => el[0].slice(0, 1) === i)
        .forEach((v) => {
          if (v[1] === true) {
            if (list.filter((l) => l.slice(0, 1) === i).length < 3) {
              if (!list.includes(v[0])) {
                list.push(v[0]);
              }
            }
          } else {
            if (list.includes(v[0])) {
              setList(list.filter((x) => x !== v[0]));
            }
          }
        });
    });

    localStorage.setItem("q4-checked", JSON.stringify(checked));
    localStorage.setItem("q4-other", other);
    localStorage.setItem("q4-list", JSON.stringify(list));
  }, [checked, other, list, concerns]);

  const handleOther = (e) => {
    setOther(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    history.push("/eng-q5");
    // }
  };

  return (
    <Route path="/eng-q4">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 12) * 5).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 12) * 5).toString() + "%",
              }}
            ></div>
          </div>
          {/* <ModalAlert show={show} close={handleClose} /> */}
          <div className="left-align-text">
            {lng === "English" ? (
              <span className="question">
                How do you anticipate your company could be impacted by the
                following threat(s) over the next 12 months?
                <i>
                  <p className="question-i">
                    PLEASE SELECT UP TO THREE RESPONSES PER EACH COLUMN
                  </p>
                </i>
                <br />
                <strong>
                  <p>It could inhibit our company’s ability to…</p>
                </strong>
              </span>
            ) : (
              <span className="question">
                Насколько вы обеспокоены, что следующие глобальные угрозы
                негативно повлияют на вашу компанию в следующие 12 месяцев?
                <i>
                  <p className="question-i">
                    ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА
                  </p>
                </i>
                <br />
                <strong>
                  <p>Это может помешать нашей компании...</p>
                </strong>
              </span>
            )}
          </div>
        </div>

        {width <= 768 ? (
          <>
            <div className="left-align-text">
              {concerns.map((concern) => {
                return (
                  <div key={concern}>
                    <p className="question" style={{ color: "#db536a" }}>
                      {lng === "English" ? (
                        <strong>
                          {concern === "A"
                            ? "Threat 1"
                            : concern === "B"
                            ? "Threat 2"
                            : concern === "C"
                            ? "Threat 3"
                            : concern === "D"
                            ? "Threat 4"
                            : concern === "E"
                            ? "Threat 5"
                            : concern === "F"
                            ? "Threat 6"
                            : ""}
                        </strong>
                      ) : (
                        <strong>
                          {concern === "A"
                            ? "Угроза 1"
                            : concern === "B"
                            ? "Угроза 2"
                            : concern === "C"
                            ? "Угроза 3"
                            : concern === "D"
                            ? "Угроза 4"
                            : concern === "E"
                            ? "Угроза 5"
                            : concern === "F"
                            ? "Угроза 6"
                            : ""}
                        </strong>
                      )}
                    </p>
                    {rows.map((row) => {
                      return (
                        <div key={row.key} className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              name={concern.slice(0, 1)}
                              value={row.key}
                              onChange={handleChange}
                              checked={
                                checked[`${concern.slice(0, 1)}${row.key}`]
                              }
                              disabled={
                                Object.entries(checked).filter(
                                  (el) =>
                                    el[0].slice(0, 1) === concern.slice(0, 1) &&
                                    el[1] === true
                                ).length === 3 &&
                                !checked[`${concern.slice(0, 1)}${row.key}`]
                              }
                            ></input>
                            {row.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <Form.Group>
                <Form.Control
                  placeholder={
                    lng === "English"
                      ? "Other (please specify)"
                      : "Прочее (пожалуйста укажите)"
                  }
                  onChange={handleOther}
                  value={other}
                  className="input-text"
                ></Form.Control>
              </Form.Group>
            </div>
            <Buttons lng={lng} click={handleSubmit} />
          </>
        ) : (
          <Form>
            <table className="table">
              <tbody>
                <tr>
                  <th></th>
                  {concerns.map((concern) => {
                    return (
                      <th key={concern}>
                        {lng === "English" ? (
                          <strong>
                            {concern === "A"
                              ? "Threat 1"
                              : concern === "B"
                              ? "Threat 2"
                              : concern === "C"
                              ? "Threat 3"
                              : concern === "D"
                              ? "Threat 4"
                              : concern === "E"
                              ? "Threat 5"
                              : concern === "F"
                              ? "Threat 6"
                              : ""}
                          </strong>
                        ) : (
                          <strong>
                            {concern === "A"
                              ? "Угроза 1"
                              : concern === "B"
                              ? "Угроза 2"
                              : concern === "C"
                              ? "Угроза 3"
                              : concern === "D"
                              ? "Угроза 4"
                              : concern === "E"
                              ? "Угроза 5"
                              : concern === "F"
                              ? "Угроза 6"
                              : ""}
                          </strong>
                        )}
                      </th>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr className="table-row" key={row.key}>
                      <td className="left-align-text">{row.value}</td>
                      {concerns.map((concern) => {
                        return (
                          <td key={concern} className="input-cell">
                            <label className="label-cell">
                              <input
                                type="checkbox"
                                name={concern.slice(0, 1)}
                                value={row.key}
                                onChange={handleChange}
                                checked={
                                  checked[`${concern.slice(0, 1)}${row.key}`]
                                }
                                disabled={
                                  Object.entries(checked).filter(
                                    (el) =>
                                      el[0].slice(0, 1) ===
                                        concern.slice(0, 1) && el[1] === true
                                  ).length === 3 &&
                                  !checked[`${concern.slice(0, 1)}${row.key}`]
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

            <Form.Group>
              <Form.Control
                placeholder={
                  lng === "English"
                    ? "Other (please specify)"
                    : "Прочее (пожалуйста укажите)"
                }
                style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
                value={other}
                onChange={handleOther}
              ></Form.Control>
            </Form.Group>
            <Buttons lng={lng} click={handleSubmit} />
          </Form>
        )}
      </div>
    </Route>
  );
}
