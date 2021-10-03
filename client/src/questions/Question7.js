import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question7() {
  const width = window.screen.width;
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
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

      axios.post("/allinputs", data);

      if (
        input === "Limiting global warming to 1.5° Celsius" ||
        input === "Limiting global warming to well below 2.0° Celsius"
      ) {
        history.push("/eng-q9");
      } else {
        if (JSON.parse(localStorage.getItem("q5")).A === "yes") {
          history.push("/eng-q10a");
        } else if (JSON.parse(localStorage.getItem("q5")).A === "no but") {
          history.push("/eng-q10b");
        }
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q7">
        <div className="main">
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
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
            <p
              className="question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>PLEASE SELECT ONE RESPONSE</i>
            </p>
          </div>
          <Form className="left-align-text">
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input"
                  name="option"
                  value="Limiting global warming to 1.5° Celsius"
                  onClick={handleClick}
                ></input>
                Limiting global warming to 1.5° Celsius
              </label>
            </div>
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input"
                  name="option"
                  value="Limiting global warming to well below 2.0° Celsius"
                  onClick={handleClick}
                ></input>
                Limiting global warming to well below 2.0° Celsius
              </label>
            </div>
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input"
                  name="option"
                  value="My company’s net-zero commitment will not be aligned to a
                science-based target"
                  onClick={handleClick}
                ></input>
                My company’s net-zero commitment will not be aligned to a
                science-based target
              </label>
            </div>
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input"
                  name="option"
                  value="Don't know"
                  onClick={handleClick}
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
    </BrowserRouter>
  );
}
