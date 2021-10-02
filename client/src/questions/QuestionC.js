import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionC() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");
  const [other, setOther] = useState("");
  const [isOther, setIsOther] = useState(false);

  function handleClick(e) {
    setInput(e.target.value);
    if (isOther) {
      setIsOther(false);
    }
  }

  function handleClickOther(e) {
    setIsOther(!isOther);
    setInput(e.target.value);
  }

  function handleChange(e) {
    setOther(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qc", input);
    localStorage.setItem("qcOther", other);

    if (!input && !other) {
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
        q5a: localStorage.getItem("q5-carbonNeutral"),
        q5b: localStorage.getItem("q5-netZero"),
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
      };

      axios.post("/allinputs", data);

      if (input === "CEO of an entity within a multi-entity parent company") {
        history.push("/eng-qd");
      } else {
        history.push("/eng-qe");
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qc">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 32).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 32).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Which of these most accurately describes your role? (PLEASE SELECT
            ONE RESPONSE)
          </p>
          <Form>
            <Form.Group style={{ width: "60%", textAlign: "left" }}>
              <div>
                <input
                  type="radio"
                  id="option1"
                  value="CEO of a single or multi-entity parent company"
                  onChange={handleClick}
                  name="option"
                ></input>
                <label for="#option1" style={{ marginLeft: "8px" }}>
                  CEO of a single or multi-entity parent company
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option2"
                  value="CEO of an entity within a multi-entity parent company"
                  onChange={handleClick}
                  name="option"
                ></input>
                <label for="#option2" style={{ marginLeft: "8px" }}>
                  CEO of an entity within a multi-entity parent company
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="not"
                  value="Prefer not to say"
                  onChange={handleClick}
                  name="option"
                ></input>
                <label for="#not" style={{ marginLeft: "8px" }}>
                  Prefer not to say
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="option"
                  value="Other"
                  onChange={handleClickOther}
                ></input>
                <label for="#other" style={{ marginLeft: "8px" }}>
                  Other
                </label>
              </div>
            </Form.Group>
            {isOther ? (
              <Form.Group
                style={{ width: "40%", textAlign: "left", marginTop: "1rem" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Other (please specify)"
                  onChange={handleChange}
                  value={other}
                ></Form.Control>
              </Form.Group>
            ) : (
              ""
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
