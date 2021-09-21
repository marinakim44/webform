import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question17 from "./Question17";
import Question19 from "./Question19";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question18() {
  return (
    <BrowserRouter>
      <Route path="/eng-q18">
        <div className="main">
          <h1>Question 18</h1>
          <form>
            <Link to="/eng-q17">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q19">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
        <Route path="/eng-q19">
          <Question19 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
