import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question6 from "./Question6";
import Question8 from "./Question8";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question7() {
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q7", input);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q7">
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
            <Breadcrumb.Item active>Q7</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 8).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q7. Which science-based target, if any, will your company’s net-zero
            commitment be aligned to? (PLEASE SELECT ONE RESPONSE)
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
                  value="1.5"
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
                  value="below 2"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={
                    "My company’s net-zero commitment will not be aligned to a science-based target"
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="not aligned"
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
            <Link to="/eng-q6">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q8">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q6">
          <Question6 />
        </Route>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
