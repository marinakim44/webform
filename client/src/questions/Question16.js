import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question15 from "./Question15";
import Question17 from "./Question17";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question16() {
  return (
    <BrowserRouter>
      <Route path="/eng-q16">
        <div className="main">
          <p>
            Q16. During a typical review cycle, how many different profit and
            loss (P&L) statements do you personally examine? (PLEASE SELECT ONE
            RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"0"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"1"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"2-5"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"6-10"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"11-20"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"21-30"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"More than 30"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Don't know"}
                  style={{
                    textAlign: "left",
                  }}
                />
              </div>
            ))}
            <Link to="/eng-q15">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q17">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q15">
          <Question15 />
        </Route>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
