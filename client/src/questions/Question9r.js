import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question9r() {
  const width = window.screen.width;
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
        q9: localStorage.getItem("q9"),
      };

      axios.post("/allinputs", data);

      history.push("/rus-q10b");
    }
  }

  return (
    <Route path="/rus-q9">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 10).toString())}% завершено
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
          <p className="left-align-text">
            Будет ли подход вашей компании к сокращению выбросов парниковых
            газов (ПГ) подвергаться независимой оценке и верификации (напр.,
            SBTi)?
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>(ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ)</i>
          </p>
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
              Да, подход моей компании к сокращению выбросов ПГ будет подвергнут
              независимой оценке и верификации
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
              Нет, подход моей компании к сокращению выбросов ПГ не будет
              подвергаться независимой оценке и верификации
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
