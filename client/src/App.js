import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EngStart from "./EngStart";
import RusStart from "./RusStart";
import { Dropdown, Breadcrumb } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <h1>25th Annual Global CEO Survey Questionnaire</h1>
            <p className="justify-align-text">
              For more than two decades, PwC's Annual Global CEO Survey has
              opened a unique window on the thinking of chief executives around
              the world. This year, we're marking our 25th anniversary by
              opening that window wider, and looking through it in new ways.
              <br /> It is our hope that the survey results—historically
              released in Davos on the eve of the Annual Meeting of the World
              Economic Forum—will stimulate fresh thinking and enduring insights
              on the relationship between external forces, strategic objectives,
              organisational responses and corporate performance. Many of this
              year’s questions reflect our aspiration to dig deeper, and we want
              to thank you in advance for your participation. Kazakhstan’s
              findings of the report will be released in cooperation with Forbes
              Kazakhstan in April 2021. This research is conducted in accordance
              with the Market Research Society Code of Conduct, which is
              designed to safeguard participant confidentiality and anonymity.
              If you complete the survey, your responses will be combined with
              others at the aggregate, industry, region and country/territory
              level to reveal a consensus of opinion on these issues. Your data
              may also be combined with other research conducted by PwC or
              publicly available information in order to obtain further insight.
              All responses will be kept completely confidential, and individual
              responses will never be attributed without your prior consent.
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              id="dropdown-basic"
              className="lng-btn"
            >
              Choose language
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/eng-start">
                  <div style={{ width: "100%" }}>English</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/rus-start">Russian</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Route>
      <Switch>
        <Route path="/eng-start">
          <EngStart />
        </Route>
        <Route path="/rus-start">
          <RusStart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
