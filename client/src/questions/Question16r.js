import { Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question16r() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q16-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q16-checked")));
    }
    if (localStorage.getItem("q16")) {
      setInput(localStorage.getItem("q16"));
    }
    console.log(checked, input);
  }, []);
  const rows = [
    {
      key: "option1",
      value: "0",
    },
    {
      key: "option2",
      value: "1",
    },
    {
      key: "option3",
      value: "2-5",
    },
    {
      key: "option4",
      value: "6-10",
    },
    {
      key: "option5",
      value: "11-20",
    },
    {
      key: "option6",
      value: "21-30",
    },
    {
      key: "option7",
      value: "Более 30",
    },
    {
      key: "option8",
      value: "Затрудняюсь ответить",
    },
  ];
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
    option5: false,
    option6: false,
    option7: false,
    option8: false,
  });

  function handleClick(e) {
    const { value } = e.target;
    setInput(value);
    Object.keys(checked)
      .filter((v) => v === value)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== value)
      .map((v) => (checked[v] = false));
  }

  useEffect(() => {
    Object.keys(checked)
      .filter((v) => v === input)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== input)
      .map((v) => (checked[v] = false));

    localStorage.setItem("q16", input);
    localStorage.setItem("q16-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      history.push("/rus-q17");

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
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Route path="/rus-q16">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 17).toString())}% завершено
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 17).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text question">
            В течение обычного цикла проверок сколько различных отчетов о
            прибыли и убытках (P&L) вы лично проверяете?
          </p>
          <p className="question-i">
            <i>ПОЖАЛУЙСТА, ВЫБЕРИТЕ ТОЛЬКО ОДИН ОТВЕТ</i>
          </p>
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div className="m-div">
                  <label className="m-label">
                    <input
                      type="radio"
                      name="option"
                      value={row.key}
                      onChange={handleClick}
                      className="m-input"
                      checked={checked[row.key] === true ? true : false}
                    />
                    {row.value}
                  </label>
                </div>
              );
            })}
          </div>
        ) : (
          <Form>
            <div style={{ textAlign: "left" }}>
              {rows.map((row) => {
                return (
                  <div className="m-div">
                    <label className="m-label label-cell">
                      <input
                        type="radio"
                        name="option"
                        value={row.key}
                        onChange={handleClick}
                        className="m-input radio-input"
                        checked={checked[row.key] === true ? true : false}
                      ></input>
                      {row.value}
                    </label>
                  </div>
                );
              })}
            </div>
          </Form>
        )}
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

          <Button variant="danger" className="next-btn" onClick={handleSubmit}>
            Далее
            <i
              className="fas fa-chevron-right"
              style={{ marginLeft: "8px" }}
            ></i>
          </Button>
        </div>
      </div>
    </Route>
  );
}
