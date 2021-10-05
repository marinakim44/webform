import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import EngStart from "./EngStart";

function RusStart() {
  return (
    <BrowserRouter>
      <Route path="/rus-start">
        <div className="main">
          <h1>Russian - survey start</h1>
          <p>Under development, please choose English language</p>

          <Button variant="danger" className="next-btn">
            <Link to="/eng-start" style={{ color: "white" }}>
              Switch to English
            </Link>
          </Button>
        </div>
      </Route>
      <Switch>
        <Route>
          <EngStart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RusStart;
