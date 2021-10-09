import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question8r() {
  const width = window.screen.width;
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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q8")) {
      setInput(localStorage.getItem("q8"));
    }
    if (localStorage.getItem("q8-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q8-checked")));
    }
  }, []);

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
    localStorage.setItem("q8-checked", JSON.stringify(checked));
    localStorage.setItem("q8", input);
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
      };

      axios.post("/allinputs", data);

      history.push("/rus-q10a");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q8">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 9).toString())}% завершено
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
            <p className="left-align-text">
              Был ли подход вашей компании к сокращению выбросов парниковых
              газов (ПГ) независимо оценен и верифицирован (напр., SBTi)?
            </p>
            <p className="question">
              <i>(ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ)</i>
            </p>
          </div>
          <form className="left-align-text">
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option1"
                  onClick={handleClick}
                  checked={checked.option1}
                />
                Да, подход моей компании к сокращению выбросов ПГ прошел
                независимую оценку и верификацию
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option2"
                  onClick={handleClick}
                  checked={checked.option2}
                />
                Нет, но подход моей компании к сокращению выбросов ПГ в
                настоящее время проходит независимую оценку и верификацию
              </label>
            </div>
            <div className="m-div">
              <label className="m-label radio-input">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option3"
                  onClick={handleClick}
                  checked={checked.option3}
                />
                Нет, подход моей компании к сокращению выбросов ПГ не
                подвергался независимой оценке и не верифицировался
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="option4"
                  onClick={handleClick}
                  checked={checked.option4}
                />
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
          </form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
