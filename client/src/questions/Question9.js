import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question8 from "./Question8";
import Question10 from "./Question10";
import { useState } from "react";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question9() {
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q9", input);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q9">
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
            <Breadcrumb.Item>Q8</Breadcrumb.Item>
            <Breadcrumb.Item active>Q9</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 10).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q9. Will your company’s approach to reducing greenhouse gas (GHG)
            emissions be independently assessed and validated (e.g., by SBTi)?
            (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
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
            ))}
            <Link to="/eng-q8">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q10">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
        <Route path="/eng-q10">
          <Question10 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
