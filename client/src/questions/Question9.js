import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question8 from "./Question8";
import Question10 from "./Question10";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question9() {
  return (
    <BrowserRouter>
      <Route path="/eng-q9">
        <div className="main">
          <p>
            Q9. Will your company’s approach to reducing greenhouse gas (GHG)
            emissions be independently assessed and validated (e.g., by SBTi)?
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
              </div>
            ))}
            <Link to="/eng-q8">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q10">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
        <Route path="/eng-q10">
          <Question10 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
