import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function QuestionA({ lng }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("qa-checked")) {
      setChecked(JSON.parse(localStorage.getItem("qa-checked")));
    }
    if (localStorage.getItem("qa")) {
      setInput(localStorage.getItem("qa"));
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
    localStorage.setItem("qa", input);
    localStorage.setItem("qa-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      history.push("/eng-qb");

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

      history.push("/eng-qb");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qa">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 32).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 32).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  If willing, would you please record your gender below?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE</i>
                </p>
              </>
            ) : (
              <>
                <p className="question">Пожалуйста, укажите Ваш пол</p>
                <p className="question-i">
                  <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН ОТВЕТ</i>
                </p>
              </>
            )}
          </div>
          <Form>
            <Form.Group className="left-align-text">
              <div className="m-div">
                <label className="m-label label-cell">
                  <input
                    type="radio"
                    value="option1"
                    onChange={handleClick}
                    name="option"
                    className="m-input radio-input"
                    checked={checked.option1}
                  ></input>
                  {lng === "English" ? "Female" : "Женский"}
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    value="option2"
                    onChange={handleClick}
                    name="option"
                    className="m-input radio-input"
                    checked={checked.option2}
                  ></input>
                  {lng === "English" ? "Male" : "Мужской"}
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    id="not"
                    value="option3"
                    onChange={handleClick}
                    name="option"
                    className="m-input radio-input"
                    checked={checked.option3}
                  ></input>
                  {lng === "English"
                    ? "Prefer not to say"
                    : "Предпочитаю не говорить"}
                </label>
              </div>
            </Form.Group>
          </Form>
          <Buttons lng={lng} click={handleSubmit} />
        </div>
      </Route>
    </BrowserRouter>
  );
}
