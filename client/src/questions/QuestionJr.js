import { Route, Link, useHistory } from "react-router-dom";

import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionJr() {
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
  const rows = [
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
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("countries")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
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
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
        q24: JSON.parse(localStorage.getItem("q24")),
        q25none: localStorage.getItem("q25none"),
        q25dontknow: localStorage.getItem("q25dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25b: JSON.parse(localStorage.getItem("q25b")),
        q25bNone: localStorage.getItem("q25b-none"),
        q25bDontknow: localStorage.getItem("q25b-dontknow"),
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
        q26: localStorage.getItem("q26"),
        q27: localStorage.getItem("q27"),
        q28: localStorage.getItem("q28"),
        qa: localStorage.getItem("qa"),
        qaOther: localStorage.getItem("qa-other"),
        qb: localStorage.getItem("qb"),
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

      axios.post("/allinputs", data);
    }
  }

  return (
    <Route path="/rus-qj">
      <div
        className="main"
        style={{ height: width <= 768 && width > 480 ? "100vh" : "" }}
      >
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 40) * 39).toString())}% завершено
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
          <p className="left-align-text">
            Сколько сотрудников в Вашей компании?
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>(ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН ОТВЕТ)</i>
          </p>
        </div>
        <Form>
          <Form.Group>
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div
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
              style={{ fontSize: width <= 480 ? "14px" : "" }}
            >
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: "8px" }}
              ></i>
              Назад
            </Button>

            <Button
              className="finish-btn"
              onClick={handleSubmit}
              style={{ fontSize: width <= 480 ? "14px" : "" }}
            >
              <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
              <Link
                to="/rus-finish"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Завершить
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}
