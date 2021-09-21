import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionE from "./QuestionE";
import QuestionG from "./QuestionG";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionF() {
  return (
    <BrowserRouter>
      <Route path="/eng-qf">
        <div className="main">
          <h1>Question F</h1>
          <form>
            <Link to="/eng-qe">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qg">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qe">
          <QuestionE />
        </Route>
        <Route path="/eng-qg">
          <QuestionG />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
