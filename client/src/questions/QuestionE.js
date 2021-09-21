import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionD from "./QuestionD";
import QuestionF from "./QuestionF";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionE() {
  return (
    <BrowserRouter>
      <Route path="/eng-qe">
        <div className="main">
          <h1>Question E</h1>
          <form>
            <Link to="/eng-qd">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qf">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qd">
          <QuestionD />
        </Route>
        <Route path="/eng-qf">
          <QuestionF />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
