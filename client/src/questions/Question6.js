import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question6() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
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
    if (!input) {
      handleShow();
    } else {
      if (
        localStorage.getItem("q6") ===
          "Limiting global warming to 1.5° Celsius" ||
        localStorage.getItem("q6") ===
          "Limiting global warming to well below 2.0° Celsius"
      ) {
        if (localStorage.getItem("q5-carbonNeutral") === "yes") {
          history.push("/eng-q8");
        } else if (localStorage.getItem("q5-netZero") === "no but") {
          history.push("/eng-q9");
        } else if (
          (localStorage.getItem("q5-carbonNeutral") === "no" &&
            localStorage.getItem("q5-netZer0") === "no") ||
          (localStorage.getItem("q5-carbonNeutral") === "dontKnow" &&
            localStorage.getItem("q5-netZero") === "no") ||
          (localStorage.getItem("q5-carbonNeutral") === "no" &&
            localStorage.getItem("q5-netZero") === "dontKnow")
        ) {
          history.push("/eng-q11");
        } else {
          history.push("/eng-q12");
        }
      } else {
        if (
          localStorage.getItem("q5-carbonNeutral") === "yes" ||
          localStorage.getItem("q5-netZero") === "yes"
        ) {
          history.push("/eng-q10a");
        }
        if (
          localStorage.getItem("q5-carbonNeutral") === "no but" ||
          localStorage.getItem("q5-netZero") === "no but"
        ) {
          history.push("/eng-q10b");
        }
        if (
          (localStorage.getItem("q5-carbonNeutral") === "no" &&
            localStorage.getItem("q5-netZero") === "no") ||
          (localStorage.getItem("q5-carbonNeutral") === "dontKnow" &&
            localStorage.getItem("q5-netZero") === "no") ||
          (localStorage.getItem("q5-carbonNeutral") === "no" &&
            localStorage.getItem("q5-netZero") === "dontKnow")
        ) {
          history.push("/eng-q11");
        }
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q6">
        <div className="main">
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
            <h2 className="percent">
              {Math.round(((100 / 39) * 7).toString())}% completed
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
              Which science-based target, if any, is your company’s net-zero
              commitment aligned to?
            </p>
            <p className="question">
              <i>PLEASE SELECT ONE RESPONSE</i>
            </p>
          </div>
          <Form>
            <div className="left-align-text">
              <div className="m-div">
                <label className="m-label label-cell">
                  <input
                    type="radio"
                    name="option"
                    value="Limiting global warming to 1.5° Celsius"
                    onClick={handleClick}
                    className="m-input radio-input"
                  />
                  Limiting global warming to 1.5° Celsius
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="Limiting global warming to well below 2.0° Celsius"
                    onClick={handleClick}
                    className="m-input radio-input"
                  />
                  Limiting global warming to well below 2.0° Celsius
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="My company’s net-zero commitment is not aligned to a
                  science-based target"
                    onClick={handleClick}
                    className="m-input radio-input"
                  />
                  My company’s net-zero commitment is not aligned to a
                  science-based target
                </label>
              </div>
              <div className="m-div">
                <label className="m-label">
                  <input
                    type="radio"
                    name="option"
                    value="Don't know"
                    onClick={handleClick}
                    className="m-input radio-input"
                  />
                  Don't know
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
