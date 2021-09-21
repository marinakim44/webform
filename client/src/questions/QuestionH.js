import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionG from "./QuestionG";
import QuestionI from "./QuestionI";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionH() {
  return (
    <BrowserRouter>
      <Route path="/eng-qh">
        <div className="main">
          <h1>Question H</h1>
          <form>
            <Link to="/eng-qg">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-qi">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qg">
          <QuestionG />
        </Route>
        <Route path="/eng-qi">
          <QuestionI />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
