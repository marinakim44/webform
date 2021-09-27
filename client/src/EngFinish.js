import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import "./App.css";
import App from "./App";
import QuestionJ from "./questions/QuestionJ";

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
          <Link to="/eng-qj">
            <Button>Back to J</Button>
          </Link>
        </div>
      </Route>

      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/eng-qj">
          <QuestionJ />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
