import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import App from "./App";
import QuestionJ from "./questions/QuestionJ";

export default function EngFinish() {
  return (
    <BrowserRouter>
      <Route path="/eng-finish">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 40) * 40).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 40) * 40).toString() + "%",
              }}
            ></div>
          </div>
          <div style={{ width: "80%", margin: "auto auto", padding: "2rem" }}>
            <h1>Thank you!</h1>
            <p className="justify-align-text" style={{ margin: "3rem" }}>
              CLOSE SURVEY: This concludes our survey. Thank you for taking the
              time to answer our questions. Your responses will be combined with
              others at the aggregate, industry, region and country/territory
              level to reveal a consensus of opinion on these issues. Your data
              may also be combined with other research conducted by PwC or
              publicly available information in order to obtain further insight.
              All responses will be kept completely confidential, and individual
              responses will never be attributed without your prior consent.{" "}
            </p>
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
