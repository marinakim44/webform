import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import "./App.css";
import App from "./App";
import QuestionJ from "./questions/QuestionJ";

export default function EngFinish() {
  const history = useHistory();
  return (
    <BrowserRouter>
      <Route path="/eng-finish">
        <div className="main">
          <h1>English - Finish Survey</h1>
          <div className="back-next-btns">
            <Button
              className="back-btn"
              variant="light"
              onClick={() => history.goBack()}
            >
              Back to J
            </Button>
            <Button className="next-btn" variant="danger">
              <Link to="/" style={{ color: "#fff" }}>
                Back home
              </Link>
            </Button>
          </div>
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
