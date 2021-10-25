import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EngStart from "./EngStart";
import EngIntro from "./EngIntro";
import EngFinish from "./EngFinish";
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
import { useState } from "react";

export default function App() {
  const width = window.screen.width;
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const id = uuidv4();
    localStorage.setItem("uuid", id);
    window.scrollTo(0, 0);
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  function chooseEng(e) {
    e.preventDefault();
    setLanguage("English");
    localStorage.setItem("language", language);
    var date = new Date();
    var currentDate = date.toLocaleString("ru-KZ", { timeZone: "Asia/Almaty" });
    const data = {
      uuid: localStorage.getItem("uuid"),
      date: currentDate,
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
      .catch((err) => console.log(err.response.data));
  }

  function chooseRus(e) {
    e.preventDefault();
    setLanguage("Русский");
    localStorage.setItem("language", language);

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
      .catch((err) => console.log(err.response.data));
  }
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <div className="main">
          <div className="start-text">
            <h1 className="intro-heading">25th Annual Global CEO Survey</h1>
            <h1 className="intro-heading">
              25-ый Ежегодный опрос руководителей крупнейших компаний мира
            </h1>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="lng-btn"
              variant=""
              style={{
                width: width > 768 ? "350px" : "",
                marginTop: width > 768 ? "2rem" : "",
              }}
            >
              Select language / Выберите язык
            </Dropdown.Toggle>
            <Dropdown.Menu className="lng-menu">
              <Dropdown.Item onClick={chooseEng} value="English">
                <Link to="/eng-intro">
                  <div className="lng-div">English</div>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item onClick={chooseRus}>
                <Link to="/eng-intro">
                  <div className="lng-div">Русский</div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Route>
      <Switch>
        <Route exact path="/eng-intro">
          <EngIntro lng={language} />
        </Route>
        <Route exact path="/eng-start">
          <EngStart lng={language} />
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
      </Switch>
    </BrowserRouter>
  );
}
