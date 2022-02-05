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
  const [date, setDate] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const id = uuidv4();
    const date = new Date().toLocaleString("ru-KZ", {
      timeZone: "Asia/Almaty",
    });
    localStorage.setItem("uuid", id);
    localStorage.setItem("date", date);

    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
    if (localStorage.getItem("date")) {
      setDate(localStorage.getItem("date"));
    }
  }, []);

  function chooseEng(e) {
    e.preventDefault();
    setLanguage("English");
    localStorage.setItem("language", language);

    const data = {
      uuid: localStorage.getItem("uuid"),
      date: localStorage.getItem("date"),
    };

    axios
      .post("/allinputs", data)
      .then((response) => {
        if (response.status === 200) {
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
      date: localStorage.getItem("date"),
    };

    axios
      .post("/allinputs", data)
      .then((response) => {
        if (response.status === 200) {
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
            <h1 className="intro-heading">Lorem Ipsum (English)</h1>
            <h1 className="intro-heading">Lorem Ipsum (Russian)</h1>
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
        <Route exact path="/eng-finish">
          <EngFinish lng={language} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
