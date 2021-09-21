import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionC from "./QuestionC";
import QuestionE from "./QuestionE";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionD() {
  return (
    <BrowserRouter>
      <Route path="/eng-qd">
        <div className="main">
          <h1>Question D</h1>
          <form>
            <Link to="/eng-qc">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qe">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qc">
          <QuestionC />
        </Route>
        <Route path="/eng-qe">
          <QuestionE />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
