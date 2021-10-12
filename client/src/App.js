import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import EngStart from "./EngStart";
import EngFinish from "./EngFinish";
import RusStart from "./RusStart";
import RusFinish from "./RusFinish";
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

//Russian versions
import Question1r from "./questions/Question1r";
import Question2r from "./questions/Question2r";
import Question3r from "./questions/Question3r";
import Question4r from "./questions/Question4r";
import Question5r from "./questions/Question5r";
import Question6r from "./questions/Question6r";
import Question7r from "./questions/Question7r";
import Question8r from "./questions/Question8r";
import Question9r from "./questions/Question9r";
import Question10Ar from "./questions/Question10Ar";
import Question10Br from "./questions/Question10Br";
import Question11r from "./questions/Question11r";
import Question12r from "./questions/Question12r";
import Question13r from "./questions/Question13r";
import Question14r from "./questions/Question14r";
import Question15r from "./questions/Question15r";
import Question16r from "./questions/Question16r";
import Question17r from "./questions/Question17r";
import Question18r from "./questions/Question18r";
import Question19r from "./questions/Question19r";
import Question20r from "./questions/Question20r";
import Question21r from "./questions/Question21r";
import Question22r from "./questions/Question22r";
import Question23r from "./questions/Question23r";
import Question24r from "./questions/Question24r";
import Question25r from "./questions/Question25r";
import Question25Br from "./questions/Question25Br";
import Question25Cr from "./questions/Question25Cr";
import Question26r from "./questions/Question26r";
import Question27r from "./questions/Question27r";
import Question28r from "./questions/Question28r";
import QuestionAr from "./questions/QuestionAr";
import QuestionBr from "./questions/QuestionBr";
import QuestionCr from "./questions/QuestionCr";
import QuestionDr from "./questions/QuestionDr";
import QuestionEr from "./questions/QuestionEr";
import QuestionFr from "./questions/QuestionFr";
import QuestionGr from "./questions/QuestionGr";
import QuestionHr from "./questions/QuestionHr";
import QuestionIr from "./questions/QuestionIr";
import QuestionJr from "./questions/QuestionJr";

import { Dropdown } from "react-bootstrap";
import "./App.css";
import "./Medium.css";
import "./Small.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const width = window.screen.width;
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const id = uuidv4();
    localStorage.setItem("uuid", id);
    console.log(id);
    window.scrollTo(0, 0);
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  function chooseEng(e) {
    e.preventDefault();
    setLanguage("English");

    const data = {
      uuid: localStorage.getItem("uuid"),
    };

    axios
      .post("/allinputs", data)
      .then((response) => {
        if (response.status == 200) {
          console.log("Data posted");
        } else {
          console.log("Response status " + response.status);
        }
      })
      .catch((err) => console.log(err));
  }

  function chooseRus(e) {
    e.preventDefault();
    setLanguage("Русский");

    const data = {
      uuid: localStorage.getItem("uuid"),
    };

    axios
      .post("/allinputs", data)
      .then((response) => {
        if (response.status == 200) {
          console.log("Data posted");
        } else {
          console.log("Response status " + response.status);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <BrowserRouter>
      <Nav language={language} />
      <Route exact path="/">
        <div className="main">
          <div className="start-text">
            <h1 className="intro-heading">
              25th Annual Global CEO Survey Questionnaire
            </h1>
            <p className="intro-text">
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
              id="dropdown-basic"
              className="lng-btn"
              variant=""
              style={{
                width: width > 768 ? "250px" : "",
                marginTop: width > 768 ? "2rem" : "",
              }}
            >
              Select language
            </Dropdown.Toggle>
            <Dropdown.Menu className="lng-menu">
              <Dropdown.Item onClick={chooseEng} value="English">
                <Link to="/eng-start">
                  <div className="lng-div">English</div>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item onClick={chooseRus}>
                <Link to="/rus-start">
                  <div className="lng-div">Русский</div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Route>
      <Switch>
        <Route exact path="/eng-start">
          <EngStart lng={language} />
        </Route>
        <Route exact path="/rus-start">
          <RusStart />
        </Route>
        <Route exact path="/eng-q1">
          <Question1 lng={language} />
        </Route>
        <Route exact path="/eng-q2">
          <Question2 lng={language} />
        </Route>
        <Route exact path="/eng-q3">
          <Question3 lng={language} />
        </Route>
        <Route exact path="/eng-q4">
          <Question4 lng={language} />
        </Route>
        <Route exact path="/eng-q5">
          <Question5 lng={language} />
        </Route>
        <Route exact path="/eng-q6">
          <Question6 lng={language} />
        </Route>
        <Route exact path="/eng-q7">
          <Question7 lng={language} />
        </Route>
        <Route exact path="/eng-q8">
          <Question8 lng={language} />
        </Route>
        <Route exact path="/eng-q9">
          <Question9 lng={language} />
        </Route>
        <Route exact path="/eng-q10a">
          <Question10A lng={language} />
        </Route>
        <Route exact path="/eng-q10b">
          <Question10B lng={language} />
        </Route>
        <Route exact path="/eng-q11">
          <Question11 lng={language} />
        </Route>
        <Route exact path="/eng-q12">
          <Question12 lng={language} />
        </Route>
        <Route exact path="/eng-q13">
          <Question13 lng={language} />
        </Route>
        <Route exact path="/eng-q14">
          <Question14 lng={language} />
        </Route>
        <Route exact path="/eng-q15">
          <Question15 lng={language} />
        </Route>
        <Route exact path="/eng-q16">
          <Question16 lng={language} />
        </Route>
        <Route exact path="/eng-q17">
          <Question17 lng={language} />
        </Route>
        <Route exact path="/eng-q18">
          <Question18 lng={language} />
        </Route>
        <Route exact path="/eng-q19">
          <Question19 lng={language} />
        </Route>
        <Route exact path="/eng-q20">
          <Question20 lng={language} />
        </Route>
        <Route exact path="/eng-q21">
          <Question21 lng={language} />
        </Route>
        <Route exact path="/eng-q22">
          <Question22 lng={language} />
        </Route>
        <Route exact path="/eng-q23">
          <Question23 lng={language} />
        </Route>
        <Route exact path="/eng-q24">
          <Question24 lng={language} />
        </Route>
        <Route exact path="/eng-q25">
          <Question25 lng={language} />
        </Route>
        <Route exact path="/eng-q25b">
          <Question25B lng={language} />
        </Route>
        <Route exact path="/eng-q25c">
          <Question25C lng={language} />
        </Route>
        <Route exact path="/eng-q26">
          <Question26 lng={language} />
        </Route>
        <Route exact path="/eng-q27">
          <Question27 lng={language} />
        </Route>
        <Route exact path="/eng-q28">
          <Question28 lng={language} />
        </Route>
        <Route exact path="/eng-qa">
          <QuestionA lng={language} />
        </Route>
        <Route exact path="/eng-qb">
          <QuestionB lng={language} />
        </Route>
        <Route exact path="/eng-qc">
          <QuestionC lng={language} />
        </Route>
        <Route exact path="/eng-qd">
          <QuestionD lng={language} />
        </Route>
        <Route exact path="/eng-qe">
          <QuestionE lng={language} />
        </Route>
        <Route exact path="/eng-qf">
          <QuestionF lng={language} />
        </Route>
        <Route exact path="/eng-qg">
          <QuestionG lng={language} />
        </Route>
        <Route exact path="/eng-qh">
          <QuestionH lng={language} />
        </Route>
        <Route exact path="/eng-qi">
          <QuestionI lng={language} />
        </Route>
        <Route exact path="/eng-qj">
          <QuestionJ lng={language} />
        </Route>
        <Route exact path="/eng-finish">
          <EngFinish lng={language} />
        </Route>

        <Route exact path="/rus-q1">
          <Question1r />
        </Route>
        <Route exact path="/rus-q2">
          <Question2r />
        </Route>
        <Route exact path="/rus-q3">
          <Question3r />
        </Route>
        <Route exact path="/rus-q4">
          <Question4r />
        </Route>
        <Route exact path="/rus-q5">
          <Question5r />
        </Route>
        <Route exact path="/rus-q6">
          <Question6r />
        </Route>
        <Route exact path="/rus-q7">
          <Question7r />
        </Route>
        <Route exact path="/rus-q8">
          <Question8r />
        </Route>
        <Route exact path="/rus-q9">
          <Question9r />
        </Route>
        <Route exact path="/rus-q10a">
          <Question10Ar />
        </Route>
        <Route exact path="/rus-q10b">
          <Question10Br />
        </Route>
        <Route exact path="/rus-q11">
          <Question11r />
        </Route>
        <Route exact path="/rus-q12">
          <Question12r />
        </Route>
        <Route exact path="/rus-q13">
          <Question13r />
        </Route>
        <Route exact path="/rus-q14">
          <Question14r />
        </Route>
        <Route exact path="/rus-q15">
          <Question15r />
        </Route>
        <Route exact path="/rus-q16">
          <Question16r />
        </Route>
        <Route exact path="/rus-q17">
          <Question17r />
        </Route>
        <Route exact path="/rus-q18">
          <Question18r />
        </Route>
        <Route exact path="/rus-q19">
          <Question19r />
        </Route>
        <Route exact path="/rus-q20">
          <Question20r />
        </Route>
        <Route exact path="/rus-q21">
          <Question21r />
        </Route>
        <Route exact path="/rus-q22">
          <Question22r />
        </Route>
        <Route exact path="/rus-q23">
          <Question23r />
        </Route>
        <Route exact path="/rus-q24">
          <Question24r />
        </Route>
        <Route exact path="/rus-q25">
          <Question25r />
        </Route>
        <Route exact path="/rus-q25b">
          <Question25Br />
        </Route>
        <Route exact path="/rus-q25c">
          <Question25Cr />
        </Route>
        <Route exact path="/rus-q26">
          <Question26r />
        </Route>
        <Route exact path="/rus-q27">
          <Question27r />
        </Route>
        <Route exact path="/rus-q28">
          <Question28r />
        </Route>
        <Route exact path="/rus-qa">
          <QuestionAr />
        </Route>
        <Route exact path="/rus-qb">
          <QuestionBr />
        </Route>
        <Route exact path="/rus-qc">
          <QuestionCr />
        </Route>
        <Route exact path="/rus-qd">
          <QuestionDr />
        </Route>
        <Route exact path="/rus-qe">
          <QuestionEr />
        </Route>
        <Route exact path="/rus-qf">
          <QuestionFr />
        </Route>
        <Route exact path="/rus-qg">
          <QuestionGr />
        </Route>
        <Route exact path="/rus-qh">
          <QuestionHr />
        </Route>
        <Route exact path="/rus-qi">
          <QuestionIr />
        </Route>
        <Route exact path="/rus-qj">
          <QuestionJr />
        </Route>
        <Route exact path="/rus-finish">
          <RusFinish />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
