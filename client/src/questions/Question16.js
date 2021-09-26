import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question15 from "./Question15";
import Question17 from "./Question17";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question16() {
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q16", input);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q16">
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
            <Breadcrumb.Item>Q9</Breadcrumb.Item>
            <Breadcrumb.Item>Q10</Breadcrumb.Item>
            <Breadcrumb.Item>Q11</Breadcrumb.Item>
            <Breadcrumb.Item>Q12</Breadcrumb.Item>
            <Breadcrumb.Item>Q13</Breadcrumb.Item>
            <Breadcrumb.Item>Q14</Breadcrumb.Item>
            <Breadcrumb.Item>Q15</Breadcrumb.Item>
            <Breadcrumb.Item active>Q16</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 17).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q16. During a typical review cycle, how many different profit and
            loss (P&L) statements do you personally examine? (PLEASE SELECT ONE
            RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"0"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="0"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"1"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="1"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"2-5"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="2-5"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"6-10"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="6-10"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"11-20"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="11-20"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"21-30"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="21-30"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"More than 30"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="More than 30"
                  onClick={handleClick}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Don't know"}
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="Don't know"
                  onClick={handleClick}
                />
              </div>
            ))}

            <Link to="/eng-q15">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q17">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q15">
          <Question15 />
        </Route>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
