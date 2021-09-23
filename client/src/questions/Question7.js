import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question6 from "./Question6";
import Question8 from "./Question8";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question7() {
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
            <Breadcrumb.Item >Q1</Breadcrumb.Item>
            <Breadcrumb.Item >Q2</Breadcrumb.Item>
            <Breadcrumb.Item >Q3</Breadcrumb.Item>
            <Breadcrumb.Item >Q4</Breadcrumb.Item>
            <Breadcrumb.Item >Q5</Breadcrumb.Item>
            <Breadcrumb.Item >Q6</Breadcrumb.Item>
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
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Limiting global warming to well below 2.0° Celsius"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"My company’s net-zero commitment will not be aligned to a science-based target"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Don’t know"}
                  style={{
                    textAlign: "left",
                  }}
                />
              </div>
            ))}
            <Link to="/eng-q6">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q8">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
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
