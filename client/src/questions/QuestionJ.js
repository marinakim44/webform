import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import QuestionI from "./QuestionI";
import EngFinish from "../EngFinish";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionJ() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    "Fewer than 500",
    "500-999",
    "1,000-4,999",
    "5,000–9,999",
    "10,000–24,999",
    "25,000–49,999",
    "50,000 or more",
    "Don't know",
  ];

  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qj", input);

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
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
        q24: JSON.parse(localStorage.getItem("q24")),
        q25none: localStorage.getItem("q25none"),
        q25dontknow: localStorage.getItem("q25dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25b: JSON.parse(localStorage.getItem("q25b")),
        q25bNone: localStorage.getItem("q25b-none"),
        q25bDontknow: localStorage.getItem("q25b-dontknow"),
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
        q26: localStorage.getItem("q26"),
        q27: localStorage.getItem("q27"),
        q28: localStorage.getItem("q28"),
        qa: localStorage.getItem("qa"),
        qaOther: localStorage.getItem("qa-other"),
        qb: localStorage.getItem("qb"),
        qc: localStorage.getItem("qc"),
        qcOther: localStorage.getItem("qc-other"),
        qd: localStorage.getItem("qd"),
        qe: localStorage.getItem("qe"),
        qf: localStorage.getItem("qf"),
        qfOther: localStorage.getItem("qf-other"),
        qg: localStorage.getItem("qg"),
        qh: localStorage.getItem("qh"),
        qi: localStorage.getItem("qi"),
        qj: localStorage.getItem("qj"),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <Route path="/eng-qj">
      <div className="main">
        <div className={width <= 768 ? "sticky-sub-div" : ""}>
          <h2 className="percent">
            {Math.round(((100 / 40) * 39).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 40) * 39).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            How many employees does your company have?
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>PLEASE SELECT ONE RESPONSE</i>
          </p>
        </div>
        <Form>
          <Form.Group>
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div
                    className={
                      width <= 768 ? "m-div" : "left-align-text-no-margin"
                    }
                  >
                    <label className="label-cell m-label">
                      <input
                        type="radio"
                        value={row}
                        onClick={handleClick}
                        name="option"
                        className="radio-input m-input"
                      ></input>
                      {row}
                    </label>
                  </div>
                );
              })}
            </div>
          </Form.Group>
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
              variant="success"
              className="next-btn"
              onClick={handleSubmit}
            >
              <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
              <Link
                to="/eng-finish"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Finish
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}
