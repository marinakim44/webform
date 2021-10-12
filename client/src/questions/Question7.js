import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question7() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q7-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q7-checked")));
    }
    if (localStorage.getItem("q7")) {
      setInput(localStorage.getItem("q7"));
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

    localStorage.setItem("q7-checked", JSON.stringify(checked));
    localStorage.setItem("q7", input);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      localStorage.setItem("q7", input);

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
        .catch((err) => console.log(err));

      if (input === "option1" || input === "option2") {
        history.push("/eng-q9");
      } else {
        history.push("/eng-q10b");
      }
    }
  }

  return (
    <Route path="/eng-q7">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 8).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 8).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Which science-based target, if any, will your company’s net-zero
            commitment be aligned to?
          </p>
          <p className="question-i">
            <i>PLEASE SELECT ONE RESPONSE</i>
          </p>
        </div>
        <Form className="left-align-text">
          <div className="m-div">
            <label className="m-label label-cell">
              <input
                type="radio"
                className="m-input radio-input"
                name="option"
                value="option1"
                onChange={handleClick}
                checked={checked.option1}
              ></input>
              Limiting global warming to 1.5° Celsius
            </label>
          </div>
          <div className="m-div">
            <label className="m-label label-cell">
              <input
                type="radio"
                className="m-input radio-input"
                name="option"
                value="option2"
                onChange={handleClick}
                checked={checked.option2}
              ></input>
              Limiting global warming to well below 2.0° Celsius
            </label>
          </div>
          <div className="m-div">
            <label className="m-label label-cell">
              <input
                type="radio"
                className="m-input radio-input"
                name="option"
                value="option3"
                onChange={handleClick}
                checked={checked.option3}
              ></input>
              My company’s net-zero commitment will not be aligned to a
              science-based target
            </label>
          </div>
          <div className="m-div">
            <label className="m-label label-cell">
              <input
                type="radio"
                className="m-input radio-input"
                name="option"
                value="option4"
                onChange={handleClick}
                checked={checked.option4}
              ></input>
              Don't know
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
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
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
