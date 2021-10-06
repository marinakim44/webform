import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import EngStart from "./EngStart";

function RusStart() {
  const width = window.screen.width;
  return (
    <BrowserRouter>
      <Route path="/rus-start">
        <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
          <h1>Russian survey</h1>
          <p>Under development, please choose English language</p>

          <Button className="next-btn" variant="" style={{ width: "100%" }}>
            <Link
              to="/eng-start"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
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
