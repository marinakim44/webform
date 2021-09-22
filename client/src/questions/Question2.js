import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Table, Button, Form, Breadcrumb } from "react-bootstrap";
import { default as ReactSelect } from "react-select";
// import makeAnimated from "react-select/animated";
import Question1 from "./Question1";
import Question3 from "./Question3";
import "../App.css";
import { countries } from "../countries.js";

export default function Question2() {
  return (
    <BrowserRouter>
      <Route path="/eng-q2">
        <div className="main" style={{ display: "block", overflow: "scroll" }}>
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
            <Breadcrumb.Item active>Q2</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 3).toString() + "%",
              }}
            ></div>
          </div>
          <div className="left-align-text">
            <p>
              Q2. Which three countries/territories, excluding the
              country/territory in which you are based, do you consider most
              important for your company’s prospects for revenue growth over the
              next 12 months?
            </p>
          </div>

          <Form>
            <div
              style={{
                width: "35%",
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              <ReactSelect
                options={countries}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                placeholder="Please select 3 countries..."
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Other country 1 (please specify)"
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
            ></Form.Control>

            <Form.Control
              type="text"
              placeholder="Other country 2 (please specify)"
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
            ></Form.Control>

            <Link to="/eng-q1">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q3">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>
      <Switch>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
