import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionA from "./QuestionA";
import QuestionC from "./QuestionC";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionB() {
  return (
    <BrowserRouter>
      <Route path="/eng-qb">
        <div className="main">
          <h1>Question B</h1>
          <form>
            <Link to="/eng-qa">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qc">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qa">
          <QuestionA />
        </Route>
        <Route path="/eng-qc">
          <QuestionC />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
