import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question19 from "./Question19";
import Question21 from "./Question21";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question20() {
  return (
    <BrowserRouter>
      <Route path="/eng-q20">
        <div className="main">
          <h1>Question 20</h1>
          <form>
            <Link to="/eng-q19">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q21">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q19">
          <Question19 />
        </Route>
        <Route path="/eng-q21">
          <Question21 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
