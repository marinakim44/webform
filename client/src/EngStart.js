import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Question1 from "./questions/Question1";
import App from "./App";
import Responses from "./questions/Responses";
import "./App.css";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { credentials } from "./actions";
import axios from "axios";

function EngStart() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
    phone: "",
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
    dispatch(credentials(input));
    localStorage.setItem("name", input.name);
    localStorage.setItem("company", input.company);
    localStorage.setItem("title", input.title);
    localStorage.setItem("email", input.email);
    localStorage.setItem("phone", input.phone);
    console.log(history);
    console.log(location);
    history.push("/eng-q1");
    const data = {
      name: input.name,
      company: input.company,
      title: input.title,
      email: input.email,
      phone: input.phone,
    };
    axios.post("/allinputs", data);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-start">
        <div className="main">
          <Breadcrumb className="nav-div" style={{ marginBottom: "1rem" }}>
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
          {/* <h1>{x ? x : "no input"}</h1> */}
          <Form>
            <Form.Group style={{ width: "35%", margin: "auto auto" }}>
              <Form.Control
                type="text"
                placeholder="Full name"
                style={{ margin: "1rem" }}
                name="name"
                value={input.name}
                onChange={handleChange}
                autoComplete="on"
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Company name"
                style={{ margin: "1rem" }}
                name="company"
                value={input.company}
                onChange={handleChange}
                autoComplete="on"
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Job title"
                style={{ margin: "1rem" }}
                name="title"
                value={input.title}
                onChange={handleChange}
                autoComplete="on"
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Email"
                style={{ margin: "1rem" }}
                name="email"
                value={input.email}
                onChange={handleChange}
                autoComplete="on"
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Phone number (optional)"
                style={{ margin: "1rem" }}
                name="phone"
                value={input.phone}
                onChange={handleChange}
                autoComplete="on"
              ></Form.Control>
            </Form.Group>

            <br></br>
            <div className="back-next-btns">
              {/* <Link to="/"> */}
              <Button
                variant="light"
                className="back-btn"
                type="button"
                onClick={() => history.goBack()}
              >
                <i
                  class="fas fa-chevron-left"
                  style={{ color: "#000", marginRight: "10px" }}
                ></i>
                Back
              </Button>
              {/* </Link> */}

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
                component={Link}
              >
                Start
                <i
                  class="fas fa-chevron-right"
                  style={{ color: "#fff", marginLeft: "10px" }}
                ></i>
              </Button>
            </div>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/responses">
          <Responses />
        </Route>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/eng-q1">
          <Question1 input={input} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default EngStart;
