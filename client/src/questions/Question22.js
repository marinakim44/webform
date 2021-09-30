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
  const [input, setInput] = useState({
    revenue: "",
    profit: "",
    return: "",
  });

  const [dontknowRevenue, setDontknowRevenue] = useState(false);
  const [dontknowProfit, setDontknowProfit] = useState(false);
  const [dontknowReturn, setDontknowReturn] = useState(false);

  function handleDontknowRevenue(e) {
    setDontknowRevenue(!dontknowRevenue);
    setInput((prev) => {
      return {
        ...prev,
        revenue: "Don't know",
      };
    });
  }

  function handleDontknowProfit(e) {
    setDontknowProfit(!dontknowProfit);
    setInput((prev) => {
      return {
        ...prev,
        profit: "Don't know",
      };
    });
  }

  function handleDontknowReturn(e) {
    setDontknowReturn(!dontknowReturn);
    setInput((prev) => {
      return {
        ...prev,
        return: "Don't know",
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      (!input.revenue && !dontknowRevenue) ||
      (!input.profit && !dontknowProfit) ||
      (!input.return && !dontknowReturn)
    ) {
      handleShow();
    } else {
      localStorage.setItem("q22", JSON.stringify(input));
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
        q5a: localStorage.getItem("q5-carbonNeutral"),
        q5b: localStorage.getItem("q5-netZero"),
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

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q22">
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
            <Breadcrumb.Item>Q1</Breadcrumb.Item>
            <Breadcrumb.Item>Q2</Breadcrumb.Item>
            <Breadcrumb.Item>Q3</Breadcrumb.Item>
            <Breadcrumb.Item>Q4</Breadcrumb.Item>
            <Breadcrumb.Item>Q5</Breadcrumb.Item>
            <Breadcrumb.Item>Q6</Breadcrumb.Item>
            <Breadcrumb.Item>Q7</Breadcrumb.Item>
            <Breadcrumb.Item>Q8</Breadcrumb.Item>
            <Breadcrumb.Item>Q9</Breadcrumb.Item>
            <Breadcrumb.Item>Q10</Breadcrumb.Item>
            <Breadcrumb.Item>Q11</Breadcrumb.Item>
            <Breadcrumb.Item>Q12</Breadcrumb.Item>
            <Breadcrumb.Item>Q13</Breadcrumb.Item>
            <Breadcrumb.Item>Q14</Breadcrumb.Item>
            <Breadcrumb.Item>Q15</Breadcrumb.Item>
            <Breadcrumb.Item>Q16</Breadcrumb.Item>
            <Breadcrumb.Item>Q17</Breadcrumb.Item>
            <Breadcrumb.Item>Q18</Breadcrumb.Item>
            <Breadcrumb.Item>Q19</Breadcrumb.Item>
            <Breadcrumb.Item>Q20</Breadcrumb.Item>
            <Breadcrumb.Item>Q21</Breadcrumb.Item>
            <Breadcrumb.Item active>Q22</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 23).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p>
            Q22. What was your company’s revenue growth, profit margin and
            return on assets (ROA) for the last fiscal year? (PLEASE PROVIDE
            YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN THE BOX BELOW)
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
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="revenue"
                          value={input.revenue}
                          onChange={handleChange}
                          disabled={dontknowRevenue ? true : false}
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
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="profit"
                          value={input.profit}
                          onChange={handleChange}
                          disabled={dontknowProfit ? true : false}
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
                        <Form.Control
                          type="text"
                          placeholder="Specify whole number"
                          name="return"
                          value={input.return}
                          onChange={handleChange}
                          disabled={dontknowReturn ? true : false}
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

            <Button
              variant="light"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
