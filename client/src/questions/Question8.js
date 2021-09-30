import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question8() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    if (!input) {
      handleShow();
    } else {
      localStorage.setItem("q8", input);

      const data = {
        uuid: localStorage.getItem("uuid"),
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
      };

      axios.post("/allinputs", data);

      history.push("/eng-q10a");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q8">
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link className="before-link" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="before-link" to="/eng-start">
                Credentials
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Q1</Breadcrumb.Item>
            <Breadcrumb.Item>Q2</Breadcrumb.Item>
            <Breadcrumb.Item>Q3</Breadcrumb.Item>
            <Breadcrumb.Item>Q4</Breadcrumb.Item>
            <Breadcrumb.Item>Q5</Breadcrumb.Item>
            <Breadcrumb.Item>Q6</Breadcrumb.Item>
            <Breadcrumb.Item>Q7</Breadcrumb.Item>
            <Breadcrumb.Item active>Q8</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 9).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p>
            Q8. Has your company's approach to reducing greenhouse gas (GHG)
            emissions been independently assessed and validated (e.g., by SBTi)?
            (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "Yes, my company’s approach to reducing GHG emissions has been independently assessed and validated"
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
                    "No, but my company’s approach to reducing GHG emissions is currently being independently assessed and validated "
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="no but"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "No, my company’s approach to reducing GHG emissions has not been independently assessed and validated"
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
            ))}

            <Button
              variant="light"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Form>
        </div>
      </Route>

      {/* <Switch>
        <Route path="/eng-q7">
          <Question7 />
        </Route>
        <Route path="/eng-q9">
          <Question9 />
        </Route>
      </Switch> */}
    </BrowserRouter>
  );
}
