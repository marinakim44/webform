import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form, Row, Col, Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question22() {
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

    console.log(JSON.parse(localStorage.getItem("q22")));

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
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("countries")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
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
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Route path="/eng-q22">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 23).toString())}% completed
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
          <p className="question">
            What was your company’s revenue growth, profit margin and return on
            assets (ROA) for the last fiscal year?
          </p>
          <p className="question-i">
            <i>
              PLEASE PROVIDE YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN THE
              BOX BELOW
            </i>
          </p>
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
                    Revenue growth - last fiscal year
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
                *Please specify whole number
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Specify whole number"
                  name="revenue"
                  value={input.revenue}
                  onChange={handleChange}
                  disabled={dontknow.revenue === true ? true : false}
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
                  Don't know
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <strong>
                  <p className="left-align-text">
                    Profit growth - last fiscal year
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
                *Please specify whole number
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Specify whole number"
                  name="profit"
                  value={input.profit}
                  onChange={handleChange}
                  disabled={dontknow.profit === true ? true : false}
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
                  Don't know
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <strong>
                  <p className="left-align-text">
                    Return growth - last fiscal year
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
                *Please specify whole number
              </p>
            ) : (
              ""
            )}
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Specify whole number"
                  name="return"
                  value={input.return}
                  onChange={handleChange}
                  disabled={dontknow.return === true ? true : false}
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
                  Don't know
                </Button>
              </Col>
            </Row>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                <i
                  className="fas fa-chevron-left"
                  style={{ marginRight: "8px" }}
                ></i>
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
                <i
                  className="fas fa-chevron-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </Button>
            </div>
          </div>
        ) : (
          <Form>
            <Table style={{ width: "70%" }} borderless>
              <tbody>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    Revenue growth - last fiscal year
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
                            *Please specify whole number
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="revenue"
                          value={dontknow.revenue === true ? "" : input.revenue}
                          onChange={handleChange}
                          disabled={dontknow.revenue === true ? true : false}
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
                      Don't know
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    Profit margin - last fiscal year
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
                            *Please specify whole number
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="profit"
                          value={dontknow.profit === true ? "" : input.profit}
                          onChange={handleChange}
                          disabled={dontknow.profit === true ? true : false}
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
                      Don't know
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    Return on assets - last fiscal year
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
                            *Please specify whole number
                          </p>
                        ) : (
                          ""
                        )}
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="return"
                          value={dontknow.return === true ? "" : input.return}
                          onChange={handleChange}
                          disabled={dontknow.return === true ? true : false}
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
                      Don't know
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                <i
                  className="fas fa-chevron-left"
                  style={{ marginRight: "8px" }}
                ></i>
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
                <i
                  className="fas fa-chevron-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </Button>
            </div>
          </Form>
        )}
      </div>
    </Route>
  );
}
