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
        localStorage.getItem("q6") === "1" ||
        localStorage.getItem("q6") === "2"
      ) {
        if (localStorage.getItem("q5-carbonNeutral") === "1") {
          history.push("/eng-q8");
        } else if (localStorage.getItem("q5-netZero") === "2") {
          history.push("/eng-q9");
        } else if (
          (localStorage.getItem("q5-carbonNeutral") === "3" &&
            localStorage.getItem("q5-netZer0") === "3") ||
          (localStorage.getItem("q5-carbonNeutral") === "4" &&
            localStorage.getItem("q5-netZero") === "3") ||
          (localStorage.getItem("q5-carbonNeutral") === "3" &&
            localStorage.getItem("q5-netZero") === "4")
        ) {
          history.push("/eng-q11");
        } else {
          history.push("/eng-q12");
        }
      } else {
        if (
          localStorage.getItem("q5-carbonNeutral") === "1" ||
          localStorage.getItem("q5-netZero") === "1"
        ) {
          history.push("/eng-q10a");
        }
        if (
          localStorage.getItem("q5-carbonNeutral") === "2" ||
          localStorage.getItem("q5-netZero") === "2"
        ) {
          history.push("/eng-q10b");
        }
        if (
          (localStorage.getItem("q5-carbonNeutral") === "3" &&
            localStorage.getItem("q5-netZero") === "3") ||
          (localStorage.getItem("q5-carbonNeutral") === "4" &&
            localStorage.getItem("q5-netZero") === "3") ||
          (localStorage.getItem("q5-carbonNeutral") === "3" &&
            localStorage.getItem("q5-netZero") === "4")
        ) {
          history.push("/eng-q11");
        }
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q6">
        <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
          <div className="sticky-sub-div">
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
                    value="option1"
                    onClick={handleClick}
                    className="m-input radio-input"
                    checked={checked.option1 ? true : false}
                    autoComplete="on"
                  />
                  Limiting global warming to 1.5° Celsius
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
                  Limiting global warming to well below 2.0° Celsius
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
                  My company’s net-zero commitment is not aligned to a
                  science-based target
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
