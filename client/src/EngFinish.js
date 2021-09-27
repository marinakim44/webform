import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import "./App.css";
import App from "./App";
import QuestionL from "./questions/QuestionL";

export default function EngFinish() {
  return (
    <BrowserRouter>
      <Route path="/eng-finish">
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link to="/" className="before-link">
                Home
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1>English - Finish Survey</h1>
          <Link to="/eng-ql">
            <Button>Back to L and Kira</Button>
          </Link>
        </div>
      </Route>

      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/eng-ql">
          <QuestionL />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
