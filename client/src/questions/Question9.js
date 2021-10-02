import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question9() {
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
      localStorage.setItem("q9", input);

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
        q9: localStorage.getItem("q9"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q10b");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q9">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 10).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 10).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Will your company’s approach to reducing greenhouse gas (GHG)
            emissions be independently assessed and validated (e.g., by SBTi)?
            <br />
            (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            <div style={{ textAlign: "left" }}>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="option"
                  style={{ marginRight: "8px" }}
                  onChange={handleClick}
                  value="yes"
                />
                Yes, my company’s approach to reducing GHG emissions will be
                independently assessed and validated
              </label>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="option"
                  style={{ marginRight: "8px" }}
                  onChange={handleClick}
                  value="no"
                />
                No, my company’s approach to reducing GHG emissions will not be
                independently assessed and validated
              </label>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="option"
                  style={{ marginRight: "8px" }}
                  onChange={handleClick}
                  value="dontknow"
                />
                Don't know
              </label>
            </div>
            {/* {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3 left-align-text">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "Yes, my company’s approach to reducing GHG emissions will be independently assessed and validated"
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="yes"
                  onClick={handleClick}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "No, my company’s approach to reducing GHG emissions will not be independently assessed and validated"
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="no"
                  onClick={handleClick}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Don’t know"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="don't know"
                  onClick={handleClick}
                />
              </div>
            ))} */}
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

      {/* <Switch>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
        <Route path="/eng-q10a">
          <Question10A />
        </Route>
        <Route path="/eng-q10b">
          <Question10B />
        </Route>
      </Switch> */}
    </BrowserRouter>
  );
}
