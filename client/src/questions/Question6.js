import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question6({ lng }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q6-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q6-checked")));
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
    localStorage.setItem("q6", input);
    localStorage.setItem("q6-checked", JSON.stringify(checked));
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
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
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

      if (
        localStorage.getItem("q6") === "option1" ||
        localStorage.getItem("q6") === "option2"
      ) {
        history.push("/eng-q8");
      } else {
        history.push("/eng-q10a");
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q6">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 7).toString())}%{" "}
              {lng === "English" ? "completed" : "завершено"}
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
            {lng === "English" ? (
              <>
                <p className="question">
                  Which science-based target, if any, is your company’s net-zero
                  commitment aligned to?
                </p>
                <p className="question-i">
                  <i>PLEASE SELECT ONE RESPONSE</i>
                </p>
              </>
            ) : (
              <>
                <p className="question">
                  С какой научно обоснованной целью, если таковая имеется,
                  согласуется обязательство вашей компании по нулевым выбросам?
                </p>
                <p className="question-i">
                  <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ</i>
                </p>
              </>
            )}
          </div>
          <Form>
            <div className="left-align-text">
              <div className="m-div">
                <label className="m-label label-cell">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    onChange={handleClick}
                    className="m-input radio-input"
                    checked={checked.option1}
                  />
                  {lng === "English"
                    ? "Limiting global warming to 1.5° Celsius"
                    : "Ограничение глобального потепления до 1.5° по Цельсию"}
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    onChange={handleClick}
                    className="m-input radio-input"
                    checked={checked.option2}
                  />
                  {lng === "English"
                    ? "Limiting global warming to well below 2.0° Celsius"
                    : "Ограничение глобального потепления до уровня значительно ниже 2.0° по Цельсию"}
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    onChange={handleClick}
                    className="m-input radio-input"
                    checked={checked.option3}
                  />
                  {lng === "English"
                    ? "My company’s net-zero commitment is not aligned to a science-based target"
                    : "Обязательство моей компании по нулевым выбросам не соответствует научно обоснованной цели"}
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="option4"
                    onChange={handleClick}
                    className="m-input radio-input"
                    checked={checked.option4}
                  />
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </label>
              </div>
            </div>
            <Buttons lng={lng} click={handleSubmit} />
          </Form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
