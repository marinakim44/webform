import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import EngStart from "./EngStart";
import RusStart from "./RusStart";
import { Dropdown, Breadcrumb } from "react-bootstrap";
import "./App.css";
import { useEffect } from "react";
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
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function App() {
  const history = useHistory();
  useEffect(() => {
    const id = uuidv4();
    localStorage.setItem("uuid", id);
    console.log(id);
    console.log(history);
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
      <Route path="/" exact>
        <div className="main">
          <div style={{ width: "80%", margin: "auto auto", padding: "2rem" }}>
            <h1>25th Annual Global CEO Survey Questionnaire</h1>
            <p className="justify-align-text" style={{ marginTop: "3rem" }}>
              For more than two decades, PwC's Annual Global CEO Survey has
              opened a unique window on the thinking of chief executives around
              the world. This year, we're celebrating our 25th anniversary of
              Global CEO Survey and 10th anniversary in Kazakhstan. <br />
              <br /> It is our hope that the survey results—historically
              released in Davos on the eve of the Annual Meeting of the World
              Economic Forum—will stimulate fresh thinking and enduring insights
              on the relationship between external forces, strategic objectives,
              organisational responses and corporate performance. Many of this
              year’s questions reflect our aspiration to dig deeper, and we want
              to thank you in advance for your participation.
              <br />
              <br /> Kazakhstan’s findings of the report will be released in
              cooperation with Forbes Kazakhstan in April 2022. <br />
              <br />
              <i>
                This research is conducted in accordance with the Market
                Research Society Code of Conduct, which is designed to safeguard
                participant confidentiality and anonymity. If you complete the
                survey, your responses will be combined with others at the
                aggregate, industry, region and country/territory level to
                reveal a consensus of opinion on these issues. Your data may
                also be combined with other research conducted by PwC or
                publicly available information in order to obtain further
                insight. All responses will be kept completely confidential, and
                individual responses will never be attributed without your prior
                consent.
              </i>
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              id="dropdown-basic"
              className="lng-btn"
              style={{ width: "20%" }}
            >
              Choose language
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={chooseEng} value="English">
                <Link to="/eng-start">
                  <div style={{ width: "100%" }}>English</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={chooseRus}>
                <Link to="/rus-start">Russian</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to="/eng-q1">Question 1</Link>
            <Link to="/eng-q2">Question 2</Link>
            <Link to="/eng-q3">Question 3</Link>
            <Link to="/eng-q4">Question 4</Link>
            <Link to="/eng-q5">Question 5</Link>
            <Link to="/eng-q6">Question 6</Link>
            <Link to="/eng-q7">Question 7</Link>
            <Link to="/eng-q8">Question 8</Link>
            <Link to="/eng-q9">Question 9</Link>
            <Link to="/eng-q10a">Question 10A</Link>
            <Link to="/eng-q10b">Question 10B</Link>
            <Link to="/eng-q11">Question 11</Link>
            <Link to="/eng-q12">Question 12</Link>
            <Link to="/eng-q13">Question 13</Link>
            <Link to="/eng-q14">Question 14</Link>
            <Link to="/eng-q15">Question 15</Link>
            <Link to="/eng-q16">Question 16</Link>
            <Link to="/eng-q17">Question 17</Link>
            <Link to="/eng-q18">Question 18</Link>
            <Link to="/eng-q19">Question 19</Link>
            <Link to="/eng-q20">Question 20</Link>
            <Link to="/eng-q21">Question 21</Link>
            <Link to="/eng-q22">Question 22</Link>
            <Link to="/eng-q23">Question 23</Link>
            <Link to="/eng-q24">Question 24</Link>
            <Link to="/eng-q25">Question 25</Link>
            <Link to="/eng-q25b">Question 25B</Link>
            <Link to="/eng-q25c">Question 25C</Link>
            <Link to="/eng-q26">Question 26</Link>
            <Link to="/eng-q27">Question 27</Link>
            <Link to="/eng-q28">Question 28</Link>
            <Link to="/eng-qa">Question A</Link>
            <Link to="/eng-qb">Question B</Link>
            <Link to="/eng-qc">Question C</Link>
            <Link to="/eng-qd">Question D</Link>
            <Link to="/eng-qe">Question E</Link>
            <Link to="/eng-qf">Question F</Link>
            <Link to="/eng-qg">Question G</Link>
            <Link to="/eng-qh">Question H</Link>
            <Link to="/eng-qi">Question I</Link>
            <Link to="/eng-qj">Question J</Link>
            <div
              style={{
                backgroundColor: "#000",
                color: "#fff",
                height: "100px",
                padding: "1rem",
                textAlign: "center",
                verticalAlign: "middle",
                marginTop: "2rem",
              }}
            >
              END
            </div>
          </div> */}
        </div>
      </Route>
      <Switch>
        <Route path="/eng-start">
          <EngStart />
        </Route>
        <Route path="/rus-start">
          <RusStart />
        </Route>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
        <Route path="/eng-q2">
          <Question2 />
        </Route>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
        <Route path="/eng-q4">
          <Question4 />
        </Route>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
        <Route path="/eng-q6">
          <Question6 />
        </Route>
        <Route path="/eng-q7">
          <Question7 />
        </Route>
        <Route path="/eng-q8">
          <Question8 />
        </Route>
        <Route path="/eng-q9">
          <Question9 />
        </Route>
        <Route path="/eng-q10a">
          <Question10A />
        </Route>
        <Route path="/eng-q10b">
          <Question10B />
        </Route>
        <Route path="/eng-q11">
          <Question11 />
        </Route>
        <Route path="/eng-q12">
          <Question12 />
        </Route>
        <Route path="/eng-q13">
          <Question13 />
        </Route>
        <Route path="/eng-q14">
          <Question14 />
        </Route>
        <Route path="/eng-q15">
          <Question15 />
        </Route>
        <Route path="/eng-q16">
          <Question16 />
        </Route>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
        <Route path="/eng-q19">
          <Question19 />
        </Route>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
        <Route path="/eng-q21">
          <Question21 />
        </Route>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
        <Route path="/eng-q23">
          <Question23 />
        </Route>
        <Route path="/eng-q24">
          <Question24 />
        </Route>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
        <Route path="/eng-q25b">
          <Question25B />
        </Route>
        <Route path="/eng-q25c">
          <Question25C />
        </Route>
        <Route path="/eng-q26">
          <Question26 />
        </Route>
        <Route path="/eng-q27">
          <Question27 />
        </Route>
        <Route path="/eng-q28">
          <Question28 />
        </Route>
        <Route path="/eng-qa">
          <QuestionA />
        </Route>
        <Route path="/eng-qb">
          <QuestionB />
        </Route>
        <Route path="/eng-qc">
          <QuestionC />
        </Route>
        <Route path="/eng-qd">
          <QuestionD />
        </Route>
        <Route path="/eng-qe">
          <QuestionE />
        </Route>
        <Route path="/eng-qf">
          <QuestionF />
        </Route>
        <Route path="/eng-qg">
          <QuestionG />
        </Route>
        <Route path="/eng-qh">
          <QuestionH />
        </Route>
        <Route path="/eng-qi">
          <QuestionI />
        </Route>
        <Route path="/eng-qj">
          <QuestionJ />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
