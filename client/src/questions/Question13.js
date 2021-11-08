import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table, Dropdown, Row, Col } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question13({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q13a")) {
      setInputA(localStorage.getItem("q13a"));
    }
    if (localStorage.getItem("q13b")) {
      setInputB(localStorage.getItem("q13b"));
    }
    if (localStorage.getItem("q13-dontknow")) {
      setDontknow(JSON.parse(localStorage.getItem("q13-dontknow")));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [dontknow, setDontknow] = useState({
    A: false,
    B: false,
  });

  function handleSelectA(e) {
    setInputA(e);
    setDontknow((prev) => {
      return {
        ...prev,
        A: false,
      };
    });
  }
  useEffect(() => {
    localStorage.setItem("q13a", inputA);
  }, [inputA]);

  function handleSelectB(e) {
    setInputB(e);
    setDontknow((prev) => {
      return {
        ...prev,
        B: false,
      };
    });
  }
  useEffect(() => {
    localStorage.setItem("q13b", inputB);
  }, [inputB]);

  const handleDontknow = (e) => {
    const { name } = e.target;

    setDontknow((prev) => {
      return {
        ...prev,
        [name]: !dontknow[name],
      };
    });
  };

  useEffect(() => {
    if (dontknow.A === true) {
      setInputA("");
    }
    if (dontknow.B === true) {
      setInputB("");
    }
  }, [dontknow]);

  const [active, setActive] = useState(false);
  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setActive(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q13-dontknow", JSON.stringify(dontknow));

    if (
      (inputA === "" && dontknow.A === false) ||
      (inputB === "" && dontknow.B === false)
    ) {
      handleShow();
    } else {
      const data = {
        uuid: localStorage.getItem("uuid"),
        date: localStorage.getItem("date"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
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

      history.push("/eng-q14");
    }
  }

  return (
    <Route path="/eng-q13">
      <div className="main">
        <div className={active === true ? "" : "sticky-sub-div"}>
          <h2 className="percent">
            {Math.round(((100 / 39) * 14).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 14).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="question">
            <strong>
              {lng === "English" ? "Typically, how many:" : "Обычно сколько:"}
            </strong>
          </p>
          <li style={{ listStyle: "none" }}>
            {lng === "English"
              ? "A) overarching strategic objectives does your company have?"
              : "A) общих стратегических целей есть у вашей компании?"}
          </li>

          <li style={{ listStyle: "none" }}>
            {lng === "English"
              ? "B) major initiatives does your company have underway in support of those strategic objectives? (in total)"
              : "B) основных инициатив осуществляет ваша компания в поддержку этих стратегических целей? (в целом)"}
          </li>

          <p className="question-i">
            <i>
              {lng === "English"
                ? "PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT"
                : "ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА"}
            </i>
          </p>
        </div>
        {width <= 768 ? (
          <div style={{ textAlign: "left" }}>
            <Row style={{ verticalAlign: "middle" }}>
              <Col sm={6}>
                {lng === "English" ? (
                  <>
                    <p style={{ color: "#db536a" }}>
                      <strong>A) Overarching strategic objectives</strong>
                    </p>
                    <p>
                      <i>Increasing market share</i>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="question">
                      <strong>A) Общие стратегические цели</strong>
                    </p>
                    <p className="question">
                      <i>Увеличение доли рынка</i>
                    </p>
                  </>
                )}
              </Col>
              <Col>
                <Dropdown
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onSelect={handleSelectA}
                  className="s-q13"
                  name="a"
                >
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    // disabled={dontknow.A === true ? true : false}
                    className="dropdown-toggle"
                  >
                    {inputA ? inputA : lng === "English" ? "Select" : "Выбрать"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Item eventKey="5">5</Dropdown.Item>
                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                    <Dropdown.Item eventKey="7">7</Dropdown.Item>
                    <Dropdown.Item eventKey="8">8</Dropdown.Item>
                    <Dropdown.Item eventKey="9">9</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="11 or more">
                      {lng === "English" ? "11 or more" : "11 или более"}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={dontknow.A === true ? "warning" : "outline-dark"}
                  name="A"
                  value="dontknow"
                  onClick={handleDontknow}
                  className="dropdown-btn"
                >
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                {lng === "English" ? (
                  <>
                    <p style={{ color: "#db536a" }}>
                      <strong>
                        B) Major initiatives underway in support of those
                        strategic objectives (in total)
                      </strong>
                    </p>
                    <p>
                      <i>
                        <ul>
                          <li>Releasing a new advertising campaign</li>
                          <li>Launching a new product/service</li>
                          <li>Acquiring a competitor</li>
                        </ul>
                      </i>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="question">
                      <strong>
                        B) Основные инициативы, осуществляемые в поддержку этих
                        стратегических целей (в целом)
                      </strong>
                    </p>
                    <p className="question">
                      <i>
                        <ul>
                          <li>Запуск новой рекламной кампании</li>
                          <li>Запуск нового продукта/услуги</li>
                          <li>Приобретение конкурента</li>
                        </ul>
                      </i>
                    </p>
                  </>
                )}
              </Col>
              <Col>
                <Dropdown
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onSelect={handleSelectB}
                  className="s-q13"
                  name="b"
                >
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="dropdown-toggle"
                  >
                    {inputB ? inputB : lng === "English" ? "Select" : "Выбрать"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1-5">1-5</Dropdown.Item>
                    <Dropdown.Item eventKey="6-10">6-10</Dropdown.Item>
                    <Dropdown.Item eventKey="11-15">11-15</Dropdown.Item>
                    <Dropdown.Item eventKey="16-20">16-20</Dropdown.Item>
                    <Dropdown.Item eventKey="21-25">21-25</Dropdown.Item>
                    <Dropdown.Item eventKey="25-30">25-30</Dropdown.Item>
                    <Dropdown.Item eventKey="31-35">31-35</Dropdown.Item>
                    <Dropdown.Item eventKey="36-40">36-40</Dropdown.Item>
                    <Dropdown.Item eventKey="39-45">39-45</Dropdown.Item>
                    <Dropdown.Item eventKey="46-50">46-50</Dropdown.Item>
                    <Dropdown.Item eventKey="51 or more">
                      {lng === "English" ? "51 or more" : "51 или более"}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={dontknow.B === true ? "warning" : "outline-dark"}
                  name="B"
                  value="dontknow"
                  onClick={handleDontknow}
                  className="dropdown-btn"
                >
                  {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <Table bordered>
              <tbody>
                <tr className="table-row">
                  <td style={{ verticalAlign: "middle" }}>A</td>
                  <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                    <strong>
                      {lng === "English"
                        ? "Overarching strategic objectives"
                        : "Общие стратегические цели"}
                    </strong>
                    <p>
                      {lng === "English"
                        ? "Increasing market share"
                        : "Увеличение доли рынка"}
                    </p>
                  </td>
                  <td>
                    <Dropdown
                      onSelect={handleSelectA}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    >
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        // disabled={dontknow.A === true ? true : false}
                      >
                        {inputA
                          ? inputA
                          : lng === "English"
                          ? "Select number"
                          : "Выбрать"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                        <Dropdown.Item eventKey="6">6</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="8">8</Dropdown.Item>
                        <Dropdown.Item eventKey="9">9</Dropdown.Item>
                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                        <Dropdown.Item eventKey="11 or more">
                          {lng === "English" ? "11 or more" : "11 или более"}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant={dontknow.A === true ? "warning" : "outline-dark"}
                      name="A"
                      value="dontknow"
                      onClick={handleDontknow}
                      className="dropdown-btn q13-dropdown-btn"
                    >
                      {lng === "English"
                        ? "Don't know"
                        : "Затрудняюсь ответить"}
                    </Button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    B
                  </td>
                  <td
                    style={{
                      verticalAlign: "middle",
                      textAlign: "left",
                    }}
                  >
                    <strong>
                      {lng === "English"
                        ? "Major initiatives underway in support of those strategic objectives (in total)"
                        : "Основные инициативы, осуществляемые в поддержку этих стратегических целей (в целом)"}
                    </strong>
                    <p></p>

                    <ul>
                      {lng === "English" ? (
                        <>
                          <li>Releasing a new advertising campaign</li>
                          <li>Launching a new product/service</li>
                          <li>Acquiring a competitor</li>
                        </>
                      ) : (
                        <>
                          <li>Запуск новой рекламной кампании</li>
                          <li>Запуск нового продукта/услуги</li>
                          <li>Приобретение конкурента</li>
                        </>
                      )}
                    </ul>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Dropdown onSelect={handleSelectB}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        // disabled={dontknow.B === true ? true : false}
                      >
                        {inputB
                          ? inputB
                          : lng === "English"
                          ? "Select number"
                          : "Выбрать"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1-5">1-5</Dropdown.Item>
                        <Dropdown.Item eventKey="6-10">6-10</Dropdown.Item>
                        <Dropdown.Item eventKey="11-15">11-15</Dropdown.Item>
                        <Dropdown.Item eventKey="16-20">16-20</Dropdown.Item>
                        <Dropdown.Item eventKey="21-25">21-25</Dropdown.Item>
                        <Dropdown.Item eventKey="25-30">25-30</Dropdown.Item>
                        <Dropdown.Item eventKey="31-35">31-35</Dropdown.Item>
                        <Dropdown.Item eventKey="36-40">36-40</Dropdown.Item>
                        <Dropdown.Item eventKey="39-45">39-45</Dropdown.Item>
                        <Dropdown.Item eventKey="46-50">46-50</Dropdown.Item>
                        <Dropdown.Item eventKey="51 or more">
                          {lng === "English" ? "51 or more" : "51 или более"}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Button
                      type="button"
                      name="B"
                      value="dontknow"
                      onClick={handleDontknow}
                      className="dropdown-btn q13-dropdown-btn"
                      variant={dontknow.B === true ? "warning" : "outline-dark"}
                    >
                      {lng === "English"
                        ? "Don't know"
                        : "Затрудняюсь ответить"}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
