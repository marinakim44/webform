import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalAlert from "./ModalAlert";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function EngStart({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("name")) {
      setInput((prev) => {
        return {
          ...prev,
          name: localStorage.getItem("name"),
        };
      });
    }
    if (localStorage.getItem("company")) {
      setInput((prev) => {
        return {
          ...prev,
          company: localStorage.getItem("company"),
        };
      });
    }
    if (localStorage.getItem("title")) {
      setInput((prev) => {
        return {
          ...prev,
          title: localStorage.getItem("title"),
        };
      });
    }
    if (localStorage.getItem("email")) {
      setInput((prev) => {
        return {
          ...prev,
          email: localStorage.getItem("email"),
        };
      });
    }
    if (localStorage.getItem("phone")) {
      setInput((prev) => {
        return {
          ...prev,
          phone: localStorage.getItem("phone"),
        };
      });
    }
  }, []);
  // const [lng, setLng] = useState("English");
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
    const re = /.+@.+\.+.+/;
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
      handleShow();
    } else {
      localStorage.setItem("name", input.name);
      localStorage.setItem("company", input.company);
      localStorage.setItem("title", input.title);
      localStorage.setItem("email", input.email);
      localStorage.setItem("phone", input.phone);

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
    <Route path="/eng-start">
      <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
        <div className="sticky-sub-div">
          <h2 className="percent">0% completed</h2>
          <div className="progressBarEmpty">
            <div className="progressBarFilled" style={{ width: "0%" }}></div>
          </div>
        </div>
        <ModalAlert show={show} close={handleClose} />
        <Form>
          <Form.Group className="credentials-form m-credentials-form">
            {errorName ? (
              <p
                style={{
                  color: "#dc3545",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Name field should not be empty
              </p>
            ) : (
              ""
            )}
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Full name*"
              name="name"
              value={input.name}
              onChange={handleChange}
              onBlur={handleBlurName}
              onFocus={handleFocusName}
              className="credentials-input m-credentials-input"
              style={{ marginTop: errorName ? 0 : "" }}
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
                }}
              >
                *Company field should not be empty
              </p>
            ) : (
              ""
            )}

            <Form.Control
              type="text"
              placeholder={"Company name*"}
              autoComplete="off"
              name="company"
              value={input.company}
              onChange={handleChange}
              onBlur={handleBlurCompany}
              onFocus={handleFocusCompany}
              className="credentials-input m-credentials-input"
              style={{ marginTop: errorCompany ? 0 : "" }}
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
              name="title"
              value={input.title}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlurTitle}
              onFocus={handleFocusTitle}
              className="credentials-input m-credentials-input"
              style={{ marginTop: errorTitle ? 0 : "" }}
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
              name="email"
              value={input.email}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlurEmail}
              onFocus={handleFocusEmail}
              className="credentials-input m-credentials-input"
              style={{ marginTop: errorEmail || validationErrorEmail ? 0 : "" }}
            ></Form.Control>
            <Form.Control
              type="text"
              placeholder="Phone number (optional)"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              autoComplete="off"
              className="credentials-input m-credentials-input"
            ></Form.Control>
          </Form.Group>

          <br></br>
          <div className="back-next-btns">
            <Button
              variant="secondary"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              <i className="fas fa-chevron-left back-arrow"></i>
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
              <i className="fas fa-chevron-right next-arrow"></i>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}

export default EngStart;
