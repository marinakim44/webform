import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question22 from "./Question22";
import Question24 from "./Question24";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question23() {
  return (
    <BrowserRouter>
      <Route path="/eng-q23">
        <div className="main">
          <h1>Question 23</h1>
          <form>
            <Link to="/eng-q22">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q24">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
        <Route path="/eng-q24">
          <Question24 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
