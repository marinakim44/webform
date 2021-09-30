import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import Question1 from "./questions/Question1";
import ModalAlert from "./ModalAlert";
import App from "./App";
import Responses from "./questions/Responses";
import "./App.css";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import axios from "axios";

function EngStart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    uuid: "",
  });
  const [errorName, setErrorName] = useState(false);
  const [errorCompany, setErrorCompany] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [validationErrorEmail, setValidationErrorEmail] = useState(false);
  const [anyError, setAnyError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleBlurName() {
    if (!input.name) {
      setErrorName(true);
    }
  }

  function handleFocusName() {
    if (errorName) {
      setErrorName(false);
    }
  }

  function handleBlurCompany() {
    if (!input.company) {
      setErrorCompany(true);
    }
  }

  function handleFocusCompany() {
    if (errorCompany) {
      setErrorCompany(false);
    }
  }

  function handleBlurTitle() {
    if (!input.title) {
      setErrorTitle(true);
    }
  }

  function handleFocusTitle() {
    if (errorTitle) {
      setErrorTitle(false);
    }
  }

  function validateEmail(email) {
    const re = /[a-z]+@[a-z]+.[a-z]+/;
    return re.test(email);
  }

  function handleBlurEmail() {
    if (!input.email) {
      setErrorEmail(true);
    } else {
      validateEmail(input.email);
      if (validateEmail(input.email)) {
        setValidationErrorEmail(false);
      } else {
        setValidationErrorEmail(true);
      }
    }
  }

  function handleFocusEmail() {
    if (errorEmail) {
      setErrorEmail(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      errorName ||
      errorCompany ||
      errorTitle ||
      errorEmail ||
      validationErrorEmail ||
      !input
    ) {
      setAnyError(true);
      handleShow();
    } else {
      localStorage.setItem("name", input.name);
      localStorage.setItem("company", input.company);
      localStorage.setItem("title", input.title);
      localStorage.setItem("email", input.email);
      localStorage.setItem("phone", input.phone);
      console.log(history);

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: input.name,
        company: input.company,
        title: input.title,
        email: input.email,
        phone: input.phone,
      };
      axios.post("/allinputs", data);
      history.push("/eng-q1");
    }
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
          <ModalAlert show={show} close={handleClose} />
          <Form>
            <Form.Group style={{ width: "35%", margin: "auto auto" }}>
              {errorName ? (
                <p
                  style={{
                    color: "#dc3545",
                    fontStyle: "italic",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "100%",
                    margin: 0,
                    padding: "0 1rem",
                  }}
                >
                  *Name field should not be empty
                </p>
              ) : (
                ""
              )}
              <Form.Control
                autoFocus="true"
                type="text"
                placeholder="Full name*"
                style={{ margin: "1rem", marginTop: errorName ? 0 : "1rem" }}
                name="name"
                value={input.name}
                onChange={handleChange}
                autoComplete="on"
                // onClick={handleClickName}
                onBlur={handleBlurName}
                onFocus={handleFocusName}
              ></Form.Control>

              {errorCompany ? (
                <p
                  style={{
                    color: "#dc3545",
                    fontStyle: "italic",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "100%",
                    margin: 0,
                    padding: "0 1rem",
                  }}
                >
                  *Company field should not be empty
                </p>
              ) : (
                ""
              )}

              <Form.Control
                type="text"
                placeholder="Company name*"
                style={{ margin: "1rem", marginTop: errorCompany ? 0 : "1rem" }}
                name="company"
                value={input.company}
                onChange={handleChange}
                autoComplete="on"
                // onClick={handleClickCompany}
                onBlur={handleBlurCompany}
                onFocus={handleFocusCompany}
              ></Form.Control>

              {errorTitle ? (
                <p
                  style={{
                    color: "#dc3545",
                    fontStyle: "italic",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "100%",
                    margin: 0,
                    padding: "0 1rem",
                  }}
                >
                  *Title field should not be empty
                </p>
              ) : (
                ""
              )}

              <Form.Control
                type="text"
                placeholder="Job title*"
                style={{ margin: "1rem", marginTop: errorTitle ? 0 : "1rem" }}
                name="title"
                value={input.title}
                onChange={handleChange}
                autoComplete="on"
                onBlur={handleBlurTitle}
                onFocus={handleFocusTitle}
              ></Form.Control>

              {errorEmail ? (
                <p
                  style={{
                    color: "#dc3545",
                    fontStyle: "italic",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "100%",
                    margin: 0,
                    padding: "0 1rem",
                  }}
                >
                  *Email fields should not be empty
                </p>
              ) : (
                ""
              )}

              {validationErrorEmail ? (
                <p
                  style={{
                    color: "#dc3545",
                    fontStyle: "italic",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "100%",
                    margin: 0,
                    padding: "0 1rem",
                  }}
                >
                  *Please specify a valid email address
                </p>
              ) : (
                ""
              )}

              <Form.Control
                type="text"
                placeholder="Email*"
                style={{
                  margin: "1rem",
                  marginTop: errorEmail || validationErrorEmail ? 0 : "1rem",
                }}
                name="email"
                value={input.email}
                onChange={handleChange}
                autoComplete="on"
                onBlur={handleBlurEmail}
                onFocus={handleFocusEmail}
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Phone number (optional)"
                style={{ margin: "1rem" }}
                name="phone"
                value={input.phone}
                onChange={handleChange}
                autoComplete="on"
                // onClick={handleClickPhone}
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
