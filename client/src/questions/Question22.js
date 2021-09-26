import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Question21 from "./Question21";
import Question23 from "./Question23";
import { Button, Breadcrumb, Form, Row, Col, Table } from "react-bootstrap";
import "../App.css";

export default function Question22() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [input, setInput] = useState({
    revenue: "",
    profit: "",
    return: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick1(e) {
    setIsClicked1(!isClicked1);
  }
  function handleClick2(e) {
    setIsClicked2(!isClicked2);
  }
  function handleClick3(e) {
    setIsClicked3(!isClicked3);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q22", JSON.stringify(input));
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
          <p>
            Q22. What was your company’s revenue growth, profit margin and
            return on assets (ROA) for the last fiscal year? (PLEASE PROVIDE
            YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN THE BOX BELOW)
          </p>
          <Form>
            <Table style={{ width: "70%" }}>
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
                      onClick={handleClick1}
                      style={{
                        backgroundColor: isClicked1 ? "#dc3545" : "",
                        color: isClicked1 ? "white" : "",
                        borderColor: isClicked1 ? "#dc3545" : "",
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
                      onClick={handleClick2}
                      style={{
                        backgroundColor: isClicked2 ? "#dc3545" : "",
                        color: isClicked2 ? "white" : "",
                        borderColor: isClicked2 ? "#dc3545" : "",
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
                      onClick={handleClick3}
                      style={{
                        backgroundColor: isClicked3 ? "#dc3545" : "",
                        color: isClicked3 ? "white" : "",
                        borderColor: isClicked3 ? "#dc3545" : "",
                      }}
                      className="test-button"
                    >
                      Don't know
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Link to="/eng-q21">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q23">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q21">
          <Question21 />
        </Route>
        <Route path="/eng-q23">
          <Question23 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
