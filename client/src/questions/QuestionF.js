import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function QuestionF() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const rows = [
    "Family-run",
    "Backed by private equity",
    "A partnership",
    "Owner-managed",
    "Other",
  ];
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
    console.log(input, other);

    if (!input && !other) {
      handleShow();
    } else {
      if (isOther && !other) {
        handleShow();
      } else {
        localStorage.setItem("qf", input);
        localStorage.setItem("qf-other", other);

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
        };

        axios.post("/allinputs", data);
        history.push("/eng-qh");
      }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qf">
        <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 37).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 37).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Is your company family-run, backed by private equity, a
              partnership or owner-managed?
            </p>
            <p className="question">
              <i>PLEASE SELECT ONE RESPONSE</i>
            </p>
          </div>
          <Form>
            {rows
              .filter((row) => row !== "Other")
              .map((row) => {
                return (
                  <div
                    className={
                      width <= 768
                        ? "left-align-text m-div"
                        : "left-align-text-no-margin"
                    }
                  >
                    <label className="m-label label-cell">
                      <input
                        type="radio"
                        className="m-input radio-input"
                        name="option"
                        value={row}
                        onChange={handleClick}
                      ></input>
                      {row}
                    </label>
                  </div>
                );
              })}
            <div className="left-align-text m-div">
              <label className="m-label label-cell">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="Other"
                  onChange={handleOther}
                ></input>
                Other
              </label>
            </div>

            {isOther ? (
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Other (please specify)"
                  onChange={handleChange}
                  value={other}
                  className="input-text"
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
