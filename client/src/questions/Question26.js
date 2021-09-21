import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question25 from "./Question25";
import Question27 from "./Question27";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question26() {
  return (
    <BrowserRouter>
      <Route path="/eng-q26">
        <div className="main">
          <h1>Question 26</h1>
          <form>
            <Link to="/eng-q25">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q27">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
        <Route path="/eng-q27">
          <Question27 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
