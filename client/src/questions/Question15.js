import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question14 from "./Question14";
import Question16 from "./Question16";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question15() {
  return (
    <BrowserRouter>
      <Route path="/eng-q15">
        <div className="main">
          <h1>Question 15</h1>
          <form>
            <Link to="/eng-q14">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q16">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q14">
          <Question14 />
        </Route>
        <Route path="/eng-q16">
          <Question16 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
