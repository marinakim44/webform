import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question15 from "./Question15";
import Question17 from "./Question17";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question16() {
  return (
    <BrowserRouter>
      <Route path="/eng-q16">
        <div className="main">
          <h1>Question 16</h1>
          <form>
            <Link to="/eng-q15">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q17">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q15">
          <Question15 />
        </Route>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
