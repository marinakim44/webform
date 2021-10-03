import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import App from "./App";
import QuestionJ from "./questions/QuestionJ";

export default function EngFinish() {
  return (
    <Route path="/eng-finish">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
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
          <div>
            <h1 className="intro-heading">Thank you!</h1>
            <p className="intro-text">
              CLOSE SURVEY: This concludes our survey. Thank you for taking the
              time to answer our questions. Your responses will be combined with
              others at the aggregate, industry, region and country/territory
              level to reveal a consensus of opinion on these issues. Your data
              may also be combined with other research conducted by PwC or
              publicly available information in order to obtain further insight.
              All responses will be kept completely confidential, and individual
              responses will never be attributed without your prior consent.
            </p>
          </div>
        </div>
      </div>
    </Route>
  );
}
