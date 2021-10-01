import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionA() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");
  const [other, setOther] = useState("");
  const [isOther, setIsOther] = useState(false);

  function handleClick(e) {
    setInput(e.target.value);
    setIsOther(false);
    setOther("");
  }

  function handleOther(e) {
    if (!isOther) {
      setIsOther(true);
    }
  }

  function handleChange(e) {
    setOther(e.target.value);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qa", input);
    localStorage.setItem("qa-other", other);

    if (!input) {
      if (isOther && !other) {
        handleShow();
      } else {
        history.push("/eng-qb");

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
        };

        axios.post("/allinputs", data);
      }
    } else {
      history.push("/eng-qb");

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
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qa">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 30).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 30).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            If willing, would you please record your gender below? (PLEASE
            SELECT ONE RESPONSE)
          </p>
          <Form>
            <Form.Group style={{ width: "40%", textAlign: "left" }}>
              <div>
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#female" style={{ marginLeft: "8px" }}>
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#male" style={{ marginLeft: "8px" }}>
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="not"
                  value="Prefer not to say"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#not" style={{ marginLeft: "8px" }}>
                  Prefer not to say
                </label>
              </div>
              {/* <div>
                <input
                  type="radio"
                  name="option"
                  value="Other (please specify)"
                  id="other"
                  onClick={handleOther}
                ></input>
                <label for="#other" style={{ marginLeft: "8px" }}>
                  Other
                </label>
              </div> */}
            </Form.Group>

            {/* {isOther ? (
              <Form.Group style={{ width: "40%", textAlign: "left" }}>
                <input
                  type="text"
                  placeholder="Other (please specify)"
                  onChange={handleChange}
                  value={other}
                ></input>
              </Form.Group>
            ) : (
              ""
            )} */}
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
