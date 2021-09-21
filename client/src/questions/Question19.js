import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question18 from "./Question18";
import Question20 from "./Question20";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question19() {
  return (
    <BrowserRouter>
      <Route path="/eng-q19">
        <div className="main">
          <h1>Question 19</h1>
          <form>
            <Link to="/eng-q18">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q20">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
