import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function RusStart() {
  return (
    <BrowserRouter>
      <Route path="/rus-start">
        <div className="main">
          <h1>Russian - survey start</h1>
          <p>Under development, please choose English language</p>

          <Link to="/eng-start">
            <Button variant="danger" className="next-btn">
              Switch to English
            </Button>
          </Link>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default RusStart;
