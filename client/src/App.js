import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import EngStart from "./EngStart";
import EngFinish from "./EngFinish";
import RusStart from "./RusStart";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import Question3 from "./questions/Question3";
import Question4 from "./questions/Question4";
import Question5 from "./questions/Question5";
import Question6 from "./questions/Question6";
import Question7 from "./questions/Question7";
import Question8 from "./questions/Question8";
import Question9 from "./questions/Question9";
import Question10A from "./questions/Question10A";
import Question10B from "./questions/Question10B";
import Question11 from "./questions/Question11";
import Question12 from "./questions/Question12";
import Question13 from "./questions/Question13";
import Question14 from "./questions/Question14";
import Question15 from "./questions/Question15";
import Question16 from "./questions/Question16";
import Question17 from "./questions/Question17";
import Question18 from "./questions/Question18";
import Question19 from "./questions/Question19";
import Question20 from "./questions/Question20";
import Question21 from "./questions/Question21";
import Question22 from "./questions/Question22";
import Question23 from "./questions/Question23";
import Question24 from "./questions/Question24";
import Question25 from "./questions/Question25";
import Question25B from "./questions/Question25B";
import Question25C from "./questions/Question25C";
import Question26 from "./questions/Question26";
import Question27 from "./questions/Question27";
import Question28 from "./questions/Question28";
import QuestionA from "./questions/QuestionA";
import QuestionB from "./questions/QuestionB";
import QuestionC from "./questions/QuestionC";
import QuestionD from "./questions/QuestionD";
import QuestionE from "./questions/QuestionE";
import QuestionF from "./questions/QuestionF";
import QuestionG from "./questions/QuestionG";
import QuestionH from "./questions/QuestionH";
import QuestionI from "./questions/QuestionI";
import QuestionJ from "./questions/QuestionJ";

import { Dropdown } from "react-bootstrap";
import "./App.css";
import "./Medium.css";
import "./Small.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function App() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const id = uuidv4();
    localStorage.setItem("uuid", id);
    console.log(id);
    window.scrollTo(0, 0);
  }, []);

  function chooseEng(e) {
    e.preventDefault();
    localStorage.setItem("language", "English");

    const data = {
      uuid: localStorage.getItem("uuid"),
    };

    axios.post("/allinputs", data);
  }

  function chooseRus(e) {
    e.preventDefault();
    localStorage.setItem("language", "Russian");
  }

  return (
    <BrowserRouter>
      <div className="main-root">
        <Nav />
        <Route exact path="/">
          <div
            className="main"
            style={{ height: width <= 480 ? "100%" : "" }}
            style={{ height: width > 1200 ? "100vh" : "" }}
          >
            <div className="start-text">
              <h1 className="intro-heading">
                25th Annual Global CEO Survey Questionnaire
              </h1>
              <p className="intro-text">
                For more than two decades, PwC's Annual Global CEO Survey has
                opened a unique window on the thinking of chief executives
                around the world. This year, we're celebrating our 25th
                anniversary of Global CEO Survey and 10th anniversary in
                Kazakhstan. <br />
                <br /> It is our hope that the survey results—historically
                released in Davos on the eve of the Annual Meeting of the World
                Economic Forum—will stimulate fresh thinking and enduring
                insights on the relationship between external forces, strategic
                objectives, organisational responses and corporate performance.
                Many of this year’s questions reflect our aspiration to dig
                deeper, and we want to thank you in advance for your
                participation.
                <br />
                <br /> Kazakhstan’s findings of the report will be released in
                cooperation with Forbes Kazakhstan in April 2022. <br />
                <br />
                <i>
                  This research is conducted in accordance with the Market
                  Research Society Code of Conduct, which is designed to
                  safeguard participant confidentiality and anonymity. If you
                  complete the survey, your responses will be combined with
                  others at the aggregate, industry, region and
                  country/territory level to reveal a consensus of opinion on
                  these issues. Your data may also be combined with other
                  research conducted by PwC or publicly available information in
                  order to obtain further insight. All responses will be kept
                  completely confidential, and individual responses will never
                  be attributed without your prior consent.
                </i>
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
              <Dropdown.Menu className="lng-menu">
                <Dropdown.Item onClick={chooseEng} value="English">
                  <Link to="/eng-start">
                    <div className="lng-div">English</div>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={chooseRus}>
                  <Link to="/rus-start">
                    <div className="lng-div">Russian</div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Route>
        <Switch>
          <Route exact path="/eng-start">
            <EngStart />
          </Route>
          <Route exact path="/rus-start">
            <RusStart />
          </Route>
          <Route exact path="/eng-q1">
            <Question1 />
          </Route>
          <Route exact path="/eng-q2">
            <Question2 />
          </Route>
          <Route exact path="/eng-q3">
            <Question3 />
          </Route>
          <Route exact path="/eng-q4">
            <Question4 />
          </Route>
          <Route exact path="/eng-q5">
            <Question5 />
          </Route>
          <Route exact path="/eng-q6">
            <Question6 />
          </Route>
          <Route exact path="/eng-q7">
            <Question7 />
          </Route>
          <Route exact path="/eng-q8">
            <Question8 />
          </Route>
          <Route exact path="/eng-q9">
            <Question9 />
          </Route>
          <Route exact path="/eng-q10a">
            <Question10A />
          </Route>
          <Route exact path="/eng-q10b">
            <Question10B />
          </Route>
          <Route exact path="/eng-q11">
            <Question11 />
          </Route>
          <Route exact path="/eng-q12">
            <Question12 />
          </Route>
          <Route exact path="/eng-q13">
            <Question13 />
          </Route>
          <Route exact path="/eng-q14">
            <Question14 />
          </Route>
          <Route exact path="/eng-q15">
            <Question15 />
          </Route>
          <Route exact path="/eng-q16">
            <Question16 />
          </Route>
          <Route exact path="/eng-q17">
            <Question17 />
          </Route>
          <Route exact path="/eng-q18">
            <Question18 />
          </Route>
          <Route exact path="/eng-q19">
            <Question19 />
          </Route>
          <Route exact path="/eng-q20">
            <Question20 />
          </Route>
          <Route exact path="/eng-q21">
            <Question21 />
          </Route>
          <Route exact path="/eng-q22">
            <Question22 />
          </Route>
          <Route exact path="/eng-q23">
            <Question23 />
          </Route>
          <Route exact path="/eng-q24">
            <Question24 />
          </Route>
          <Route exact path="/eng-q25">
            <Question25 />
          </Route>
          <Route exact path="/eng-q25b">
            <Question25B />
          </Route>
          <Route exact path="/eng-q25c">
            <Question25C />
          </Route>
          <Route exact path="/eng-q26">
            <Question26 />
          </Route>
          <Route exact path="/eng-q27">
            <Question27 />
          </Route>
          <Route exact path="/eng-q28">
            <Question28 />
          </Route>
          <Route exact path="/eng-qa">
            <QuestionA />
          </Route>
          <Route exact path="/eng-qb">
            <QuestionB />
          </Route>
          <Route exact path="/eng-qc">
            <QuestionC />
          </Route>
          <Route exact path="/eng-qd">
            <QuestionD />
          </Route>
          <Route exact path="/eng-qe">
            <QuestionE />
          </Route>
          <Route exact path="/eng-qf">
            <QuestionF />
          </Route>
          <Route exact path="/eng-qg">
            <QuestionG />
          </Route>
          <Route exact path="/eng-qh">
            <QuestionH />
          </Route>
          <Route exact path="/eng-qi">
            <QuestionI />
          </Route>
          <Route exact path="/eng-qj">
            <QuestionJ />
          </Route>
          <Route exact path="/eng-finish">
            <EngFinish />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
