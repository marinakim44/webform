import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question20 from "./Question20";
import Question22 from "./Question22";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question21() {
  return (
    <BrowserRouter>
      <Route path="/eng-q21">
        <div className="main">
          <h1>Question 21</h1>
          <form>
            <Link to="/eng-q20">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q22">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
