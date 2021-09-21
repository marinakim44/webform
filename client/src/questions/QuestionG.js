import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionF from "./QuestionF";
import QuestionH from "./QuestionH";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionG() {
  return (
    <BrowserRouter>
      <Route path="/eng-qg">
        <div className="main">
          <h1>Question G</h1>
          <form>
            <Link to="/eng-qf">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qh">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qf">
          <QuestionF />
        </Route>
        <Route path="/eng-qh">
          <QuestionH />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
