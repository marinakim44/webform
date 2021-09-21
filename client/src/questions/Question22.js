import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question21 from "./Question21";
import Question23 from "./Question23";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question22() {
  return (
    <BrowserRouter>
      <Route path="/eng-q22">
        <div className="main">
          <h1>Question 22</h1>
          <form>
            <Link to="/eng-q21">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q23">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q21">
          <Question21 />
        </Route>
        <Route path="/eng-q23">
          <Question23 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
