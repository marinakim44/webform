import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question8({ lng }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q8-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q8-checked")));
    }
    if (localStorage.getItem("q8")) {
      setInput(localStorage.getItem("q8"));
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
    option4: false,
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
    localStorage.setItem("q8", input);
    localStorage.setItem("q8-checked", JSON.stringify(checked));
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

      history.push("/eng-q10a");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q8">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 9).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 9).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            {lng === "English" ? (
              <>
                <p className="question">
                  Has your company's approach to reducing greenhouse gas (GHG)
                  emissions been independently assessed and validated (e.g., by
                  SBTi)?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE</i>
                </p>
              </>
            ) : (
              <>
                <p className="left-align-text question">
                  Был ли подход вашей компании к сокращению выбросов парниковых
                  газов (ПГ) независимо оценен и верифицирован (напр., SBTi)?
                </p>
                <p className="question-i">
                  <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ</i>
                </p>
              </>
            )}
          </div>
          <form className="left-align-text">
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option1"
                  onChange={handleClick}
                  checked={checked.option1}
                />
                {lng === "English"
                  ? "Yes, my company’s approach to reducing GHG emissions has been independently assessed and validated"
                  : "Да, подход моей компании к сокращению выбросов ПГ прошел независимую оценку и верификацию"}
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option2"
                  onChange={handleClick}
                  checked={checked.option2}
                />
                {lng === "English"
                  ? "No, but my company’s approach to reducing GHG emissions is currently being independently assessed and validated"
                  : "Нет, но подход моей компании к сокращению выбросов ПГ в настоящее время проходит независимую оценку и верификацию"}
              </label>
            </div>
            <div className="m-div">
              <label className="m-label radio-input">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option3"
                  onChange={handleClick}
                  checked={checked.option3}
                />
                {lng === "English"
                  ? "No, my company’s approach to reducing GHG emissions has not been independently assessed and validated"
                  : "Нет, подход моей компании к сокращению выбросов ПГ не подвергался независимой оценке и не верифицировался"}
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option4"
                  onChange={handleClick}
                  checked={checked.option4}
                />
                {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
              </label>
            </div>

            <Buttons lng={lng} click={handleSubmit} />
          </form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
