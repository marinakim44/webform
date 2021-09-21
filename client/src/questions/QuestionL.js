import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionK from "./QuestionJ";
import EngFinish from "../EngFinish";
import { Button } from "react-bootstrap";
import "../App.css";

export default function QuestionL() {
  return (
    <BrowserRouter>
      <Route path="/eng-ql">
        <div className="main">
          <h1>Question L</h1>
          <form>
            <Link to="/eng-qk">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-finish">
              <Button variant="danger" className="next-btn">
                Finish
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qk">
          <QuestionK />
        </Route>
        <Route path="/eng-finish">
          <EngFinish />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
