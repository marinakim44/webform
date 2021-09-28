import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import QuestionC from "./QuestionC";
import QuestionE from "./QuestionE";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function QuestionD() {
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qd", input);
    history.push("/eng-qe");
  }
  return (
    <BrowserRouter>
      <Route path="/eng-qd">
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
            <Breadcrumb.Item>QB</Breadcrumb.Item>
            <Breadcrumb.Item>QC</Breadcrumb.Item>
            <Breadcrumb.Item active>QD</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 33).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            QD. Are your company and its multi-entity parent domiciled in the
            same country? (PLEASE SELECT ONE RESPONSE){" "}
          </p>
          <Form>
            <Form.Group style={{ width: "60%", textAlign: "left" }}>
              <div>
                <input
                  type="radio"
                  id="option1"
                  value="yes"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#option1">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option1"
                  value="no"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#option1">No</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option1"
                  value="dontknow"
                  onClick={handleClick}
                  name="option"
                ></input>
                <label for="#option1">Don't know</label>
              </div>
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
        <Route path="/eng-qc">
          <QuestionC />
        </Route>
        <Route path="/eng-qe">
          <QuestionE />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
