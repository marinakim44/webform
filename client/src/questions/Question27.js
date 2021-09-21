import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question26 from "./Question26";
import Question28 from "./Question28";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question27() {
  return (
    <BrowserRouter>
      <Route path="/eng-q27">
        <div className="main">
          <h1>Question 27</h1>
          <form>
            <Link to="/eng-q26">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q28">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q26">
          <Question26 />
        </Route>
        <Route path="/eng-q28">
          <Question28 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
