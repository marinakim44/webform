import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question16 from "./Question16";
import Question18 from "./Question18";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question17() {
  return (
    <BrowserRouter>
      <Route path="/eng-q17">
        <div className="main">
          <h1>Question 17</h1>
          <form>
            <Link to="/eng-q16">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q18">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q16">
          <Question16 />
        </Route>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
