import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question23 from "./Question23";
import Question25 from "./Question25";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Question24() {
  return (
    <BrowserRouter>
      <Route path="/eng-q24">
        <div className="main">
          <h1>Question 24</h1>
          <form>
            <Link to="/eng-q23">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q25">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q23">
          <Question23 />
        </Route>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
