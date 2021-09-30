import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question6() {
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
      q5a: localStorage.getItem("q5-carbonNeutral"),
      q5b: localStorage.getItem("q5-netZero"),
      q6: localStorage.getItem("q6"),
    };

    axios.post("/allinputs", data);
    if (!input) {
      handleShow();
    } else {
      // history.push("/eng-q7");
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
            <Breadcrumb.Item active>Q6</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 7).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p>
            Q6. Which science-based target, if any, is your company’s net-zero
            commitment aligned to? (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Limiting global warming to 1.5° Celsius"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="Limiting global warming to 1.5° Celsius"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Limiting global warming to well below 2.0° Celsius"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="Limiting global warming to well below 2.0° Celsius"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "My company’s net-zero commitment is not aligned to a science-based target"
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="My company’s net-zero commitment is not aligned to a science-based target"
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
                  value="Don't know"
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
    </BrowserRouter>
  );
}
