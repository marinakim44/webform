import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question24 from "./Question24";
import Question26 from "./Question26";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question25() {
  return (
    <BrowserRouter>
      <Route path="/eng-q25">
        <div className="main">
          <h1>Question 25</h1>
          <form>
            <Link to="/eng-q24">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q26">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q24">
          <Question24 />
        </Route>
        <Route path="/eng-q26">
          <Question26 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
