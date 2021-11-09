import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question9({ lng }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q9")) {
      setInput(localStorage.getItem("q9"));
    }
    if (localStorage.getItem("q9-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q9-checked")));
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

    //SAVING PREVIOUS INPUT
    Object.keys(checked)
      .filter((v) => v === value)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== value)
      .map((v) => (checked[v] = false));
  }

  useEffect(() => {
    localStorage.setItem("q9-checked", JSON.stringify(checked));
    localStorage.setItem("q9", input);
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

      history.push("/eng-q10b");
    }
  }

  return (
    <Route path="/eng-q9">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 10).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 10).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                Will your company’s approach to reducing greenhouse gas (GHG)
                emissions be independently assessed and validated (e.g., by
                SBTi)?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ONE RESPONSE</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                Будет ли подход вашей компании к сокращению выбросов парниковых
                газов (ПГ) подвергаться независимой оценке и верификации (напр.,
                SBTi)?
              </p>
              <p className="question-i">
                <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ</i>
              </p>
            </>
          )}
        </div>
        <Form className="left-align-text">
          <div className="m-div">
            <label className="m-label">
              <input
                type="radio"
                name="option"
                style={{ marginRight: "8px" }}
                onChange={handleClick}
                value="option1"
                className="m-input"
                checked={checked.option1}
              />
              {lng === "English"
                ? "Yes, my company’s approach to reducing GHG emissions will be independently assessed and validated"
                : "Да, подход моей компании к сокращению выбросов ПГ будет подвергнут независимой оценке и верификации"}
            </label>
          </div>
          <div className="m-div">
            <label className="m-label">
              <input
                type="radio"
                name="option"
                style={{ marginRight: "8px" }}
                onChange={handleClick}
                value="option2"
                className="m-input"
                checked={checked.option2}
              />
              {lng === "English"
                ? "No, my company’s approach to reducing GHG emissions will not be independently assessed and validated"
                : "Нет, подход моей компании к сокращению выбросов ПГ не будет подвергаться независимой оценке и верификации"}
            </label>
          </div>
          <div className="m-div">
            <label className="m-label">
              <input
                type="radio"
                name="option"
                style={{ marginRight: "8px" }}
                onChange={handleClick}
                value="option3"
                className="m-input"
                checked={checked.option3}
              />
              {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
            </label>
          </div>
          <Buttons lng={lng} click={handleSubmit} />
        </Form>
      </div>
    </Route>
  );
}
