import { Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionHr() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("qh-checked")) {
      setChecked(JSON.parse(localStorage.getItem("qh-checked")));
    }
    if (localStorage.getItem("qh")) {
      setInput(localStorage.getItem("qh"));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
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
    localStorage.setItem("qh", input);
    localStorage.setItem("qh-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      history.push("/rus-qi");

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
      };

      axios
        .post("allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Route path="/rus-qh">
      <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 40) * 38).toString())}% завершено
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 40) * 38).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="question">
            Имеет ли ваша компания государственную собственность или поддержку в
            какой-либо форме?
          </p>
          <p className="question-i">
            <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН ОТВЕТ</i>
          </p>
        </div>
        <Form>
          <div
            className={
              width <= 768
                ? "left-align-text m-div"
                : "left-align-text-no-margin"
            }
          >
            <label className="label-cell m-label">
              <input
                type="radio"
                name="option"
                value="option1"
                className="radio-input m-input"
                onChange={handleClick}
                checked={checked.option1}
              ></input>
              Да
            </label>
          </div>
          <div
            className={
              width <= 768
                ? "left-align-text m-div"
                : "left-align-text-no-margin"
            }
          >
            <label className="label-cell m-label">
              <input
                type="radio"
                name="option"
                value="option2"
                className="radio-input m-input"
                onChange={handleClick}
                checked={checked.option2}
              ></input>
              Нет
            </label>
          </div>
          <div
            className={
              width <= 768
                ? "left-align-text m-div"
                : "left-align-text-no-margin"
            }
          >
            <label className="label-cell m-label">
              <input
                type="radio"
                name="option"
                value="option3"
                className="radio-input m-input"
                onChange={handleClick}
                checked={checked.option3}
              ></input>
              Затрудняюсь ответить
            </label>
          </div>
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
              Назад
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Далее
              <i
                className="fas fa-chevron-right"
                style={{ marginLeft: "8px" }}
              ></i>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}