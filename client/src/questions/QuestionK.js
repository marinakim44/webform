import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionJ from "./QuestionJ";
import QuestionL from "./QuestionL";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionK() {
  return (
    <BrowserRouter>
      <Route path="/eng-qk">
        <div className="main">
          <h1>Question K</h1>
          <form>
            <Link to="/eng-qj">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-ql">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qj">
          <QuestionJ />
        </Route>
        <Route path="/eng-ql">
          <QuestionL />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
