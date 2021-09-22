import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import QuestionJ from "./QuestionJ";
// import QuestionL from "./QuestionL";
import "./App.css";

export default function EngFinish() {
  return (
    <BrowserRouter>
      <Route path="/eng-finish">
        <div className="main">
          <h1>English - Finish Survey</h1>
        </div>
      </Route>
    </BrowserRouter>
  );
}
