import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question7 from "./Question7";
import Question9 from "./Question9";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question8() {
  return (
    <BrowserRouter>
      <Route path="/eng-q8">
        <div className="main">
          <p>
            Q8. Has your company's approach to reducing greenhouse gas (GHG)
            emissions been independently assessed and validated (e.g., by SBTi)?
            (PLEASE SELECT ONE RESPONSE)
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
            <Link to="/eng-q7">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q9">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q7">
          <Question7 />
        </Route>
        <Route path="/eng-q9">
          <Question9 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
