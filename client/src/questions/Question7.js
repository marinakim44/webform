import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question6 from "./Question6";
import Question8 from "./Question8";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function Question7() {
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q7", input);
    history.push("/eng-q8");

    const data = {
      name: localStorage.getItem("name"),
      company: localStorage.getItem("company"),
      title: localStorage.getItem("title"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      q1a: localStorage.getItem("q1a"),
      q1b: localStorage.getItem("q1b"),
      q2: JSON.parse(localStorage.getItem("countries")),
      q3: JSON.parse(localStorage.getItem("q3")),
      q4: JSON.parse(localStorage.getItem("q4")),
      q4other: localStorage.getItem("q4-other"),
      q5a: localStorage.getItem("q4-carbonNeutral"),
      q5b: localStorage.getItem("q4-netZero"),
      q6: localStorage.getItem("q6"),
      q7: localStorage.getItem("q7"),
    };

    axios.post("/allinputs", data);
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
                    "My company’s net-zero commitment will not be aligned to a science-based target"
                  }
                  style={{
                    textAlign: "left",
                  }}
                  name="option"
                  value="My company’s net-zero commitment will not be aligned to a science-based target"
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
