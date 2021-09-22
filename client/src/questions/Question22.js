import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question21 from "./Question21";
import Question23 from "./Question23";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question22() {
  return (
    <BrowserRouter>
      <Route path="/eng-q22">
        <div className="main">
          <p>
            Q22. What was your company’s revenue growth, profit margin and
            return on assets (ROA) for the last fiscal year? (PLEASE PROVIDE
            YOUR ANSWER TO THE NEAREST PERCENTAGE POINT IN THE BOX BELOW)
          </p>
          <Form>
            <Form.Group style={{ display: "flex", verticalAlign: "middle" }}>
              <Form.Control
                type="number"
                id="test"
                style={{ width: "35%" }}
              ></Form.Control>

              <p style={{ margin: 0, padding: 0 }}>%</p>

              {/* <label
                for="#test"
                style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
              >
              </label> */}
            </Form.Group>
            <Link to="/eng-q21">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q23">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
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
