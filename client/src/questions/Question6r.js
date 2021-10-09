import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question6r() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q6checked")) {
      setChecked(JSON.parse(localStorage.getItem("q6checked")));
    }
    if (localStorage.getItem("q6")) {
      setInput(localStorage.getItem("q6"));
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

    //SAVING PREVIOUS INPUT
    Object.keys(checked)
      .filter((v) => v === value)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== value)
      .map((v) => (checked[v] = false));

    localStorage.setItem("q6checked", JSON.stringify(checked));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      localStorage.setItem("q6", input);

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
      };

      axios.post("/allinputs", data);

      if (
        localStorage.getItem("q6") === "option1" ||
        localStorage.getItem("q6") === "option2"
      ) {
        history.push("/rus-q8");
      } else {
        history.push("/rus-q10a");
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/rus-q6">
        <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 7).toString())}% завершено
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 7).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="question">
              С какой научно обоснованной целью, если таковая имеется,
              согласуется обязательство вашей компании по нулевым выбросам?
            </p>
            <p className="question">
              <i>(ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ)</i>
            </p>
          </div>
          <Form>
            <div className="left-align-text">
              <div className="m-div">
                <label className="m-label label-cell">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    onClick={handleClick}
                    className="m-input radio-input"
                    checked={checked.option1 ? true : false}
                  />
                  Ограничение глобального потепления до 1.5° по Цельсию
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    onClick={handleClick}
                    className="m-input radio-input"
                    checked={checked.option2 ? true : false}
                    autoComplete="on"
                  />
                  Ограничение глобального потепления до уровня значительно ниже
                  2.0° по Цельсию
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    onClick={handleClick}
                    className="m-input radio-input"
                    checked={checked.option3 ? true : false}
                    autoComplete="on"
                  />
                  Обязательство моей компании по нулевым выбросам не
                  соответствует научно обоснованной цели
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option4"
                    onClick={handleClick}
                    className="m-input radio-input"
                    checked={checked.option4 ? true : false}
                    autoComplete="on"
                  />
                  Затрудняюсь ответить
                </label>
              </div>
            </div>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                <i
                  className="fas fa-chevron-left"
                  style={{ color: "#fff", marginRight: "8px" }}
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
                  style={{ color: "#fff", marginLeft: "8px" }}
                ></i>
              </Button>
            </div>
          </Form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
