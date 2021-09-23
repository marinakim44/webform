import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import "./App.css";
import App from "./App";

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
        </div>
      </Route>

      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
