import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionB from "./QuestionB";
import QuestionD from "./QuestionD";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionC() {
  return (
    <BrowserRouter>
      <Route path="/eng-qc">
        <div className="main">
          <h1>Question C</h1>
          <form>
            <Link to="/eng-qb">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qd">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qb">
          <QuestionB />
        </Route>
        <Route path="/eng-qd">
          <QuestionD />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
