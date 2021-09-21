import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question6 from "./Question6";
import Question8 from "./Question8";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question7() {
  return (
    <BrowserRouter>
      <Route path="/eng-q7">
        <div className="main">
          <p>
            Q7. Which science-based target, if any, will your company’s net-zero
            commitment be aligned to? (PLEASE SELECT ONE RESPONSE)
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
            <Link to="/eng-q6">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q8">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q6">
          <Question6 />
        </Route>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
