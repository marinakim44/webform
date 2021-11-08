import { Route, Link, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionJ({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("qj-checked")) {
      setChecked(JSON.parse(localStorage.getItem("qj-checked")));
    }
    if (localStorage.getItem("qj")) {
      setInput(localStorage.getItem("qj"));
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
            value: "Fewer than 500",
          },
          {
            key: "B",
            value: "500-999",
          },
          {
            key: "C",
            value: "1,000-4,999",
          },
          {
            key: "D",
            value: "5000–9,999",
          },
          {
            key: "E",
            value: "10,000–24,999",
          },
          {
            key: "F",
            value: "25,000–49,999",
          },
          {
            key: "G",
            value: "50,000 or more",
          },
          {
            key: "H",
            value: "Don't know",
          },
        ]
      : [
          {
            key: "A",
            value: "Менее 500",
          },
          {
            key: "B",
            value: "500-999",
          },
          {
            key: "C",
            value: "1,000-4,999",
          },
          {
            key: "D",
            value: "5000–9,999",
          },
          {
            key: "E",
            value: "10,000–24,999",
          },
          {
            key: "F",
            value: "25,000–49,999",
          },
          {
            key: "G",
            value: "50,000 или более",
          },
          {
            key: "H",
            value: "Затрудняюсь ответить",
          },
        ];

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
  });

  function handleClick(e) {
    const { value } = e.target;
    setInput(value);

    setChecked((prev) => {
      return {
        ...prev,
        [value]: true,
      };
    });

    Object.keys(checked)
      .filter((v) => v === value)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== value)
      .map((v) => (checked[v] = false));
  }

  useEffect(() => {
    localStorage.setItem("qj", input);
    localStorage.setItem("qj-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
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
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
        q25cOther: localStorage.getItem("q25c-other"),
        q26: localStorage.getItem("q26"),
        q27: localStorage.getItem("q27"),
        q28: localStorage.getItem("q28"),
        qa: localStorage.getItem("qa"),
        qaOther: localStorage.getItem("qa-other"),
        qbString: localStorage.getItem("qb-string"),
        qc: localStorage.getItem("qc"),
        qcOther: localStorage.getItem("qc-other"),
        qd: localStorage.getItem("qd"),
        qe: localStorage.getItem("qe"),
        qf: localStorage.getItem("qf"),
        qfOther: localStorage.getItem("qf-other"),
        qg: localStorage.getItem("qg"),
        qh: localStorage.getItem("qh"),
        qi: localStorage.getItem("qi"),
        qj: localStorage.getItem("qj"),
      };

      axios
        .post("allinputs", data)
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
    <Route path="/eng-qj">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 40) * 39).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 40) * 39).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                How many employees does your company have?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">Сколько сотрудников в Вашей компании?</p>
              <p className="question-i">
                <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН ОТВЕТ</i>
              </p>
            </>
          )}
        </div>
        <Form>
          <Form.Group>
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div
                    key={row.key}
                    className={
                      width <= 768 ? "m-div" : "left-align-text-no-margin"
                    }
                  >
                    <label className="label-cell m-label">
                      <input
                        type="radio"
                        value={row.key}
                        onChange={handleClick}
                        name="option"
                        className="radio-input m-input"
                        checked={checked[row.key]}
                      ></input>
                      {row.value}
                    </label>
                  </div>
                );
              })}
            </div>
          </Form.Group>
          <div className="back-next-btns">
            <Button
              variant="secondary"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: "8px" }}
              ></i>
              {lng === "English" ? "Back" : "Назад"}
            </Button>

            <Button className="finish-btn" onClick={handleSubmit}>
              <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
              <Link
                to="/eng-finish"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {lng === "English" ? "Finish" : "Завершить"}
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}
