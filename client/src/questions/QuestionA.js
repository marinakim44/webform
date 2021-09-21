import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question28 from "./Question28";
import QuestionB from "./QuestionB";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionA() {
  return (
    <BrowserRouter>
      <Route path="/eng-qa">
        <div className="main">
          <h1>Question A</h1>
          <form>
            <Link to="/eng-q28">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qb">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q28">
          <Question28 />
        </Route>
        <Route path="/eng-qb">
          <QuestionB />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
