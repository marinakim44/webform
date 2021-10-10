import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalAlert from "./ModalAlert";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function RusStart() {
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
  const [active, setActive] = useState({
    name: false,
    company: false,
    title: false,
    email: false,
    phone: false,
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

  function handleBlurName() {
    if (!input.name) {
      setErrorName(true);
    }
    setActive((prev) => {
      return {
        ...prev,
        name: false,
      };
    });
  }

  function handleFocusName() {
    if (errorName) {
      setErrorName(false);
    }

    Object.keys(active)
      .filter((el) => el === "name")
      .forEach((el) => {
        active[el] = true;
      });
    Object.keys(active)
      .filter((el) => el !== "name")
      .forEach((el) => {
        active[el] = false;
      });

    setActive((prev) => {
      return {
        ...prev,
        name: true,
      };
    });
  }

  function handleBlurCompany() {
    if (!input.company) {
      setErrorCompany(true);
    }
    setActive((prev) => {
      return {
        ...prev,
        company: false,
      };
    });
  }

  function handleFocusCompany() {
    if (errorCompany) {
      setErrorCompany(false);
    }
    Object.keys(active)
      .filter((el) => el === "company")
      .forEach((el) => {
        active[el] = true;
      });
    Object.keys(active)
      .filter((el) => el !== "company")
      .forEach((el) => {
        active[el] = false;
      });

    setActive((prev) => {
      return {
        ...prev,
        company: true,
      };
    });
  }

  function handleBlurTitle() {
    if (!input.title) {
      setErrorTitle(true);
    }
    setActive((prev) => {
      return {
        ...prev,
        title: false,
      };
    });
  }

  function handleFocusTitle() {
    if (errorTitle) {
      setErrorTitle(false);
    }
    Object.keys(active)
      .filter((el) => el === "title")
      .forEach((el) => {
        active[el] = true;
      });
    Object.keys(active)
      .filter((el) => el !== "title")
      .forEach((el) => {
        active[el] = false;
      });

    setActive((prev) => {
      return {
        ...prev,
        title: true,
      };
    });
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

    setActive((prev) => {
      return {
        ...prev,
        email: false,
      };
    });
  }

  function handleFocusEmail() {
    if (errorEmail) {
      setErrorEmail(false);
    }
    Object.keys(active)
      .filter((el) => el === "email")
      .forEach((el) => {
        active[el] = true;
      });
    Object.keys(active)
      .filter((el) => el !== "email")
      .forEach((el) => {
        active[el] = false;
      });

    setActive((prev) => {
      return {
        ...prev,
        email: true,
      };
    });
  }

  function handleBlurPhone() {
    setActive((prev) => {
      return {
        ...prev,
        phone: false,
      };
    });
  }

  function handleFocusPhone() {
    setActive((prev) => {
      return {
        ...prev,
        phone: true,
      };
    });
  }

  useEffect(() => {
    console.log(active.phone);
  }, [active]);

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
      history.push("/rus-q1");
    }
  }

  return (
    <Route path="/rus-start">
      <div className="main">
        <div
          className={
            Object.entries(active).filter((el) => el[1] === true).length > 0 &&
            width <= 480
              ? ""
              : "sticky-sub-div"
          }
        >
          <h2 className="percent">0% завершено</h2>
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
                  color: "#db536a",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Поле с именем должно быть заполнено
              </p>
            ) : (
              ""
            )}
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Полное имя*"
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
                  color: "#db536a",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Поле с компанией должно быть заполнено
              </p>
            ) : (
              ""
            )}

            <Form.Control
              type="text"
              placeholder="Название компании*"
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
                  color: "#db536a",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Поле с должностью должно быть заполнено
              </p>
            ) : (
              ""
            )}

            <Form.Control
              type="text"
              placeholder="Должность*"
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
                  color: "#db536a",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Поле с электронной почтой должно быть заполнено
              </p>
            ) : (
              ""
            )}

            {validationErrorEmail ? (
              <p
                style={{
                  color: "#db536a",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                }}
              >
                *Неправильно введен адрес электронной почты
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
              placeholder="Номер телефона (необязательно)"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              onBlur={handleBlurPhone}
              onFocus={handleFocusPhone}
              autoComplete="off"
              className="credentials-input m-credentials-input"
            ></Form.Control>
          </Form.Group>

          <br></br>
          <div className="back-next-btns">
            <Button
              variant="secondary"
              className="back-btn"
              type="button"
              onClick={() => history.goBack()}
            >
              <i
                className="fas fa-chevron-left"
                style={{ color: "#fff", marginRight: "10px" }}
              ></i>
              Назад
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Далее
              <i
                className="fas fa-chevron-right"
                style={{ color: "#fff", marginLeft: "10px" }}
              ></i>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}

export default RusStart;
