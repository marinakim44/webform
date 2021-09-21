import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question27 from "./Question27";
import QuestionA from "./QuestionA";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question28() {
  return (
    <BrowserRouter>
      <Route path="/eng-q28">
        <div className="main">
          <h1>Question 28</h1>
          <form>
            <Link to="/eng-q27">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qa">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q27">
          <Question27 />
        </Route>
        <Route path="/eng-qa">
          <QuestionA />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
