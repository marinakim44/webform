import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question18 from "./Question18";
import Question20 from "./Question20";
import { Button, Form } from "react-bootstrap";
import "../App.css";

export default function Question19() {
  return (
    <BrowserRouter>
      <Route path="/eng-q19">
        <div className="main">
          <p>
            Q19. What actions has your company taken, if any, to prepare for
            potential global tax policy change that would make all countries
            commit to an effective corporate tax rate of at least 15%? (PLEASE
            SELECT ALL THAT APPLY)
          </p>
          <Form style={{ textAlign: "left" }}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="The global tax policy change is not applicable to our company"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Link to="/eng-q18">
                <Button variant="light" className="back-btn">
                  Back
                </Button>
              </Link>

              <Link to="/eng-q20">
                <Button variant="danger" className="next-btn">
                  Next
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
