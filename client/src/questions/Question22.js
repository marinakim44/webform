import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Breadcrumb, Form, Row, Col, Table } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question22() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [revenue, setRevenue] = useState("");
  const [profit, setProfit] = useState("");
  const [returnInput, setReturnInput] = useState("");

  const [dontknowRevenue, setDontknowRevenue] = useState(false);
  const [dontknowProfit, setDontknowProfit] = useState(false);
  const [dontknowReturn, setDontknowReturn] = useState(false);
  const [errorRevenue, setErrorRevenue] = useState(false);
  const [errorProfit, setErrorProfit] = useState(false);
  const [errorReturn, setErrorReturn] = useState(false);

  function handleDontknowRevenue(e) {
    if (dontknowRevenue) {
      setErrorRevenue(false);
    }
    setDontknowRevenue(!dontknowRevenue);
  }

  function handleDontknowProfit(e) {
    if (dontknowProfit) {
      setErrorProfit(false);
    }
    setDontknowProfit(!dontknowProfit);
  }

  function handleDontknowReturn(e) {
    if (dontknowReturn) {
      setErrorReturn(false);
    }
    setDontknowReturn(!dontknowReturn);
  }

  function validate(number) {
    const re = /[0-9]/;
    return re.test(number);
  }

  function handleChangeRevenue(e) {
    const { name, value } = e.target;

    setRevenue(value);
  }

  function handleChangeProfit(e) {
    const { name, value } = e.target;

    setProfit(value);
  }

  function handleChangeReturn(e) {
    const { name, value } = e.target;

    setReturnInput(value);
  }

  function handleBlurRevenue() {
    if (validate(revenue)) {
      setErrorRevenue(false);
    } else {
      setErrorRevenue(true);
    }
  }

  function handleFocusRevenue() {
    if (errorRevenue) {
      setErrorRevenue(false);
    }
  }

  function handleBlurProfit() {
    if (validate(profit)) {
      if (profit) {
        setErrorProfit(false);
      }
    } else {
      setErrorProfit(true);
    }
  }

  function handleFocusProfit() {
    if (errorProfit) {
      setErrorProfit(false);
    }
  }

  function handleBlurReturn() {
    if (validate(returnInput)) {
      setErrorReturn(false);
    } else {
      setErrorReturn(true);
    }
  }

  function handleFocusReturn() {
    if (errorReturn) {
      setErrorReturn(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      (!revenue && !dontknowRevenue) ||
      (!profit && !dontknowProfit) ||
      (!returnInput && !dontknowReturn)
    ) {
      handleShow();
    } else {
      localStorage.setItem("q22-revenue", revenue);
      localStorage.setItem("q22-profit", profit);
      localStorage.setItem("q22-return", returnInput);
      localStorage.setItem("q22-dontknowRevenue", dontknowRevenue);
      localStorage.setItem("q22-dontknowProfit", dontknowProfit);
      localStorage.setItem("q22-dontknowReturn", dontknowReturn);
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
        q22revenue: localStorage.getItem("q22-revenue"),
        q22profit: localStorage.getItem("q22-profit"),
        q22return: localStorage.getItem("q22-return"),
        q22dontknowRevenue: localStorage.getItem("q22-dontknowRevenue"),
        q22dontknowProfit: localStorage.getItem("q22-dontknowProfit"),
        q22dontknowReturn: localStorage.getItem("q22-dontknowReturn"),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q22">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
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
          <p className="left-align-text">
            What was your company’s revenue growth, profit margin and return on
            assets (ROA) for the last fiscal year? <br />
            (PLEASE PROVIDE YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN THE
            BOX BELOW)
          </p>
          <Form>
            <Table style={{ width: "70%" }} borderless>
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Revenue growth - last fiscal year
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {errorRevenue && !dontknowRevenue ? (
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
                          value={revenue}
                          onChange={handleChangeRevenue}
                          disabled={dontknowRevenue ? true : false}
                          onBlur={handleBlurRevenue}
                          onFocus={handleFocusRevenue}
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
                      variant="outline-dark"
                      name="revenue"
                      value="Don't know"
                      onClick={handleDontknowRevenue}
                      style={{
                        backgroundColor: dontknowRevenue ? "#dc3545" : "",
                        color: dontknowRevenue ? "white" : "",
                        borderColor: dontknowRevenue ? "#dc3545" : "",
                      }}
                    >
                      Don't know
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Profit margin</td>
                  <td>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {errorProfit && !dontknowProfit ? (
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
                          value={profit}
                          onChange={handleChangeProfit}
                          disabled={dontknowProfit ? true : false}
                          onBlur={handleBlurProfit}
                          onFocus={handleFocusProfit}
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
                      variant="outline-dark"
                      // onClick={handleDontknow}
                      name="profit"
                      value="Don't know"
                      onClick={handleDontknowProfit}
                      style={{
                        backgroundColor: dontknowProfit ? "#dc3545" : "",
                        color: dontknowProfit ? "white" : "",
                        borderColor: dontknowProfit ? "#dc3545" : "",
                      }}
                    >
                      Don't know
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Return on assets</td>
                  <td>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Col>
                        {errorReturn && !dontknowReturn ? (
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
                          value={returnInput}
                          onChange={handleChangeReturn}
                          disabled={dontknowReturn ? true : false}
                          onBlur={handleBlurReturn}
                          onFocus={handleFocusReturn}
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
                      variant="outline-dark"
                      onClick={handleDontknowReturn}
                      name="return"
                      value="Don't know"
                      style={{
                        backgroundColor: dontknowReturn ? "#dc3545" : "",
                        color: dontknowReturn ? "white" : "",
                        borderColor: dontknowReturn ? "#dc3545" : "",
                      }}
                      className="test-button"
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
        </div>
      </Route>
    </BrowserRouter>
  );
}
