import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form, Row, Col, Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question22({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q22")) {
      setInput(JSON.parse(localStorage.getItem("q22")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState({
    revenue: "",
    profit: "",
    return: "",
  });

  const [dontknow, setDontknow] = useState({
    revenue: false,
    profit: false,
    return: false,
  });

  const [error, setError] = useState({
    revenue: false,
    profit: false,
    return: false,
  });

  function validate(number) {
    const re = /[0-9]/;
    return re.test(number);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setDontknow((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  };

  const handleDontknow = (e) => {
    const { name } = e.target;
    setDontknow((prev) => {
      return {
        ...prev,
        [name]: !dontknow[name],
      };
    });
  };

  useEffect(() => {
    if (dontknow.revenue === true) {
      setInput((prev) => {
        return {
          ...prev,
          revenue: "",
        };
      });
    }
    if (dontknow.profit === true) {
      setInput((prev) => {
        return {
          ...prev,
          profit: "",
        };
      });
    }
    if (dontknow.return === true) {
      setInput((prev) => {
        return {
          ...prev,
          return: "",
        };
      });
    }
  }, [dontknow]);

  const handleBlur = (e) => {
    const { name } = e.target;

    if (validate(input[name])) {
      setError((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    } else {
      setError((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setError((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("q22", JSON.stringify(input));
    localStorage.setItem("q22-dontknow", JSON.stringify(dontknow));
  }, [input, dontknow, error]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      (input.revenue === "" && dontknow.revenue === false) ||
      (input.profit === "" && dontknow.profit === false) ||
      (input.return === "" && dontknow.return === false)
    ) {
      handleShow();
    } else {
      history.push("/eng-q23");

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status === 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Route path="/eng-q22">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 23).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 23).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                What was your company’s revenue growth, profit margin and return
                on assets (ROA) for the last fiscal year?
              </p>
              <p className="question-i">
                <i>
                  PLEASE PROVIDE YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN
                  THE BOX BELOW
                </i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                Каков был рост выручки, прибыли и дохода на активы (ROA) вашей
                компании за последний финансовый год?
              </p>
              <p className="question-i">
                <i>
                  ПОЖАЛУЙСТА, ДАЙТЕ ОТВЕТ ДО БЛИЖАЙШЕГО ПРОЦЕНТНОГО ПУНКТА В
                  ГРАФЕ НИЖЕ
                </i>
              </p>
            </>
          )}
        </div>
        {width <= 768 ? (
          <div>
            <Row>
              <Col sm={6}>
                <strong>
                  <p
                    className="left-align-text"
                    style={{ marginBottom: width <= 480 ? "1rem" : "" }}
                  >
                    {lng === "English"
                      ? "Revenue growth - last fiscal year"
                      : "Рост выручки - последний финансовый год"}
                  </p>
                </strong>
              </Col>
            </Row>
            {error.revenue === true && dontknow.revenue === false ? (
              <p
                style={{
                  color: "#dc3545",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                {lng === "English"
                  ? "*Please specify whole number"
                  : "*Пожалуйста, укажите целое число"}
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder={
                    lng === "English"
                      ? "Specify whole number"
                      : "Укажите целое число"
                  }
                  name="revenue"
                  value={input.revenue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  className="m-input-22"
                  autoComplete="off"
                />
              </Col>
              <Col>
                <Button
                  name="revenue"
                  value="Don't know"
                  onClick={handleDontknow}
                  variant={
                    dontknow.revenue === true ? "warning" : "outline-dark"
                  }
                  className="dontknow-22"
                >
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <strong>
                  <p className="left-align-text">
                    {lng === "English"
                      ? "Profit growth - last fiscal year"
                      : "Маржа прибыли - последний финансовый год"}
                  </p>
                </strong>
              </Col>
            </Row>
            {error.profit === true && dontknow.profit === false ? (
              <p
                style={{
                  color: "#dc3545",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                {lng === "English"
                  ? "*Please specify whole number"
                  : "*Пожалуйста, укажите целое число"}
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder={
                    lng === "English"
                      ? "Specify whole number"
                      : "Укажите целое число"
                  }
                  name="profit"
                  value={input.profit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  className="m-input-22"
                  autoComplete="off"
                />
              </Col>
              <Col>
                <Button
                  name="profit"
                  value="Don't know"
                  onClick={handleDontknow}
                  variant={
                    dontknow.profit === true ? "warning" : "outline-dark"
                  }
                  className="dontknow-22"
                >
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <strong>
                  <p className="left-align-text">
                    {lng === "English"
                      ? "Return growth - last fiscal year"
                      : "Доход на активы (ROA) - последний финансовый год"}
                  </p>
                </strong>
              </Col>
            </Row>
            {error.return === true && dontknow.return === false ? (
              <p
                style={{
                  color: "#dc3545",
                  fontStyle: "italic",
                  fontSize: "12px",
                  textAlign: "left",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                {lng === "English"
                  ? "*Please specify whole number"
                  : "*Пожалуйста, укажите целое число"}
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder={
                    lng === "English"
                      ? "Specify whole number"
                      : "Укажите целое число"
                  }
                  name="return"
                  value={input.return}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  className="m-input-22"
                  autoComplete="off"
                />
              </Col>
              <Col>
                <Button
                  name="return"
                  value="Don't know"
                  onClick={handleDontknow}
                  variant={
                    dontknow.return === true ? "warning" : "outline-dark"
                  }
                  className="dontknow-22"
                >
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <Form>
            <Table style={{ width: "70%" }} borderless>
              <tbody>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    {lng === "English"
                      ? "Revenue growth - last fiscal year"
                      : "Рост выручки - последний финансовый год"}
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {error.revenue === true &&
                        dontknow.revenue === false ? (
                          <p
                            style={{
                              color: "#dc3545",
                              fontStyle: "italic",
                              fontSize: "12px",
                              textAlign: "left",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            {lng === "English"
                              ? "*Please specify whole number"
                              : "*Пожалуйста, укажите целое число"}
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder={
                            lng === "English"
                              ? "Specify whole number"
                              : "Укажите целое число"
                          }
                          name="revenue"
                          value={dontknow.revenue === true ? "" : input.revenue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                      </Col>
                      <Form.Label
                        column
                        sm={2}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        %
                      </Form.Label>
                    </Form.Group>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <Button
                      variant={
                        dontknow.revenue === true ? "warning" : "outline-dark"
                      }
                      name="revenue"
                      value="Don't know"
                      onClick={handleDontknow}
                    >
                      {lng === "English"
                        ? "Don't know"
                        : "Затрудняюсь ответить"}
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    {lng === "English"
                      ? "Profit margin - last fiscal year"
                      : "Маржа прибыли - последний финансовый год"}
                  </td>
                  <td>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {error.profit === true && dontknow.profit === false ? (
                          <p
                            style={{
                              color: "#dc3545",
                              fontStyle: "italic",
                              fontSize: "12px",
                              textAlign: "left",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            {lng === "English"
                              ? "*Please specify whole number"
                              : "*Пожалуйста, укажите целое число"}
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder={
                            lng === "English"
                              ? "Specify whole number"
                              : "Укажите целое число"
                          }
                          name="profit"
                          value={dontknow.profit === true ? "" : input.profit}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                      </Col>
                      <Form.Label
                        column
                        sm={2}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        %
                      </Form.Label>
                    </Form.Group>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <Button
                      variant={
                        dontknow.profit === true ? "warning" : "outline-dark"
                      }
                      name="profit"
                      value="Don't know"
                      onClick={handleDontknow}
                    >
                      {lng === "English"
                        ? "Don't know"
                        : "Затрудняюсь ответить"}
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    {lng === "English"
                      ? "Return on assets - last fiscal year"
                      : "Доход на активы (ROA) - последний финансовый год"}
                  </td>
                  <td>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {error.return === true && dontknow.return === false ? (
                          <p
                            style={{
                              color: "#dc3545",
                              fontStyle: "italic",
                              fontSize: "12px",
                              textAlign: "left",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            {lng === "English"
                              ? "*Please specify whole number"
                              : "*Пожалуйста, укажите целое число"}
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder={
                            lng === "English"
                              ? "Specify whole number"
                              : "Укажите целое число"
                          }
                          name="return"
                          value={dontknow.return === true ? "" : input.return}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                      </Col>
                      <Form.Label
                        column
                        sm={2}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        %
                      </Form.Label>
                    </Form.Group>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <Button
                      name="return"
                      value="Don't know"
                      onClick={handleDontknow}
                      variant={
                        dontknow.return === true ? "warning" : "outline-dark"
                      }
                    >
                      {lng === "English"
                        ? "Don't know"
                        : "Затрудняюсь ответить"}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
