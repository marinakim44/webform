import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function QuestionE({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("qe-checked")) {
      setChecked(JSON.parse(localStorage.getItem("qe-checked")));
    }
    if (localStorage.getItem("qe")) {
      setInput(localStorage.getItem("qe"));
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
    localStorage.setItem("qe", input);
    localStorage.setItem("qe-checked", JSON.stringify(checked));
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

      if (localStorage.getItem("qe") === "option1") {
        history.push("/eng-qf");
      } else {
        history.push("/eng-qg");
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qe">
        <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 40) * 36).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 40) * 36).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  Is your company privately owned or publicly listed?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE</i>
                </p>
              </>
            ) : (
              <>
                <p className="question">
                  Является ли ваша компания частной или зарегистрированной на
                  фондовой бирже?
                </p>
                <p className="question-i">
                  <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН ОТВЕТ</i>
                </p>
              </>
            )}
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
                {lng === "English" ? "Privately owned" : "Частная"}
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
                {lng === "English"
                  ? "Publicly owned"
                  : "Зарегистрирована на фондовой бирже"}
              </label>
            </div>
            <Buttons lng={lng} click={handleSubmit} />
          </Form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
