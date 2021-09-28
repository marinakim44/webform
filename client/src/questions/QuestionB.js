import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import QuestionA from "./QuestionA";
import QuestionC from "./QuestionC";
import { Button, Breadcrumb, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function QuestionB() {
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleChange(e) {
    if (isNaN(e.target.value)) {
      alert("Please specify a whole number");
    } else {
      setInput(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qb", input);
    history.push("/eng-qc");
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qb">
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
            <Breadcrumb.Item>Q22</Breadcrumb.Item>
            <Breadcrumb.Item>Q23</Breadcrumb.Item>
            <Breadcrumb.Item>Q24</Breadcrumb.Item>
            <Breadcrumb.Item>Q25</Breadcrumb.Item>
            <Breadcrumb.Item>Q26</Breadcrumb.Item>
            <Breadcrumb.Item>Q27</Breadcrumb.Item>
            <Breadcrumb.Item>Q28</Breadcrumb.Item>
            <Breadcrumb.Item>QA</Breadcrumb.Item>
            <Breadcrumb.Item active>QB</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 31).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            QB. How long have you been CEO of this company? <br />
            (PLEASE PROVIDE YOUR ANSWER TO THE NEAREST FULL YEAR IN THE BOX
            BELOW)
          </p>
          <Form>
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              style={{ width: "25%" }}
            >
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Specify whole number"
                  value={input}
                  onChange={handleChange}
                />
              </Col>
              <Form.Label
                column
                sm={2}
                style={{ textAlign: "left", paddingLeft: 0 }}
              >
                year(s)
              </Form.Label>
            </Form.Group>

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

      <Switch>
        <Route path="/eng-qa">
          <QuestionA />
        </Route>
        <Route path="/eng-qc">
          <QuestionC />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
