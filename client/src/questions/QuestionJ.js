import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionI from "./QuestionI";
import QuestionK from "./QuestionK";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionJ() {
  return (
    <BrowserRouter>
      <Route path="/eng-qj">
        <div className="main">
          <h1>Question J</h1>
          <form>
            <Link to="/eng-qi">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-qk">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qi">
          <QuestionI />
        </Route>
        <Route path="/eng-qk">
          <QuestionK />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
