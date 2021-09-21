import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question5 from "./Question5";
import Question7 from "./Question7";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question6() {
  return (
    <BrowserRouter>
      <Route path="/eng-q6">
        <div className="main">
          <p>
            Q6. Which science-based target, if any, is your company’s net-zero
            commitment aligned to? (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  style={{
                    textAlign: "left",
                  }}
                />
              </div>
            ))}

            <Link to="/eng-q5">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q7">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
        <Route path="/eng-q7">
          <Question7 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
