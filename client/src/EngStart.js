import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Question1 from "./questions/Question1";
import Responses from "./questions/Responses";
// import App from "./App";
import "./App.css";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import axios from "axios";

function EngStart() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    title: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name === null && input.email === null && input.title === null) {
      console.log("No input provided");
    } else {
      const dataInput = {
        name: input.name,
        email: input.email,
        title: input.title,
      };
      axios.post("/name", dataInput);

      setInput({
        name: "",
        email: "",
        title: "",
      });
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-start">
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link className="before-link" to="/responses">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Credentials</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{ width: ((100 / 41) * 1).toString() + "%" }}
            ></div>
          </div>
          <Form>
            <Form.Group style={{ width: "35%", margin: "auto auto" }}>
              <Form.Control
                type="text"
                placeholder="Full name"
                style={{ margin: "1rem" }}
                name="name"
                value={input.name}
                onChange={handleChange}
                autoComplete="off"
              ></Form.Control>

              <Form.Control
                type="text"
                placeholder="Email"
                style={{ margin: "1rem" }}
                name="email"
                value={input.email}
                onChange={handleChange}
                autoComplete="off"
              ></Form.Control>

              <Form.Control
                type="text"
                placeholder="Job title"
                style={{ margin: "1rem" }}
                name="title"
                value={input.title}
                onChange={handleChange}
                autoComplete="off"
              ></Form.Control>
            </Form.Group>

            <br></br>
            <div className="back-next-btns">
              <Link to="/">
                <Button variant="light" className="back-btn">
                  <i
                    class="fas fa-chevron-left"
                    style={{ color: "#000", marginRight: "10px" }}
                  ></i>
                  Back
                </Button>
              </Link>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                <Link to="/eng-q1" style={{ color: "#fff" }}>
                  Start
                  <i
                    class="fas fa-chevron-right"
                    style={{ color: "#fff", marginLeft: "10px" }}
                  ></i>
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/responses">
          <Responses />
        </Route>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default EngStart;
