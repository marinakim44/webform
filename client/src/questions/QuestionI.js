import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionH from "./QuestionH";
import QuestionJ from "./QuestionJ";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionI() {
  return (
    <BrowserRouter>
      <Route path="/eng-qi">
        <div className="main">
          <h1>Question I</h1>
          <form>
            <Link to="/eng-qh">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-qj">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qh">
          <QuestionH />
        </Route>
        <Route path="/eng-qj">
          <QuestionJ />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
