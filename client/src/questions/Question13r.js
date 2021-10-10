import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table, Dropdown, Row, Col } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question13r() {
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
  }
  useEffect(() => {
    localStorage.setItem("q13a", inputA);
  }, [inputA]);

  function handleSelectB(e) {
    setInputB(e);
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

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q13-dontknow", JSON.stringify(dontknow));

    if (!inputA && dontknow.a === false && !inputB && dontknow.b === false) {
      handleShow();
    } else {
      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("countries")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
      };

      axios.post("/allinputs", data);

      history.push("/rus-q14");
    }
  }

  function goBack() {
    history.goBack();
  }

  return (
    <Route path="/rus-q13">
      <div
        className="main"
        style={{ height: width <= 768 && width > 480 ? "100vh" : "" }}
      >
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 14).toString())}% завершено
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
          <p className="left-align-text">
            Обычно сколько:
            <p style={{ margin: "0 auto 0 20px" }}>
              A) общих стратегических целей есть у вашей компании?
            </p>
            <p style={{ margin: "0 auto 0 20px" }}>
              B) основных инициатив осуществляет ваша компания в поддержку этих
              стратегических целей? (в целом)
            </p>
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>(ДЛЯ КАЖДОЙ СТРОКИ УКАЖИТЕ ТОЛЬКО ОДИН ВАРИАНТ ОТВЕТА)</i>
          </p>
        </div>
        {width <= 768 ? (
          <div style={{ textAlign: "left" }}>
            <Row style={{ verticalAlign: "middle" }}>
              <Col sm={6}>
                <p>
                  <strong>A) Общие стратегические цели</strong>
                </p>
                <p>
                  <i>Увеличение доли рынка</i>
                </p>
              </Col>
              <Col>
                <Dropdown onSelect={handleSelectA} className="s-q13">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    disabled={dontknow.A === true ? true : false}
                    className="dropdown-toggle"
                  >
                    {inputA ? inputA : "Выбрать"}
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
                      11 или более
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={dontknow.A === true ? "warning" : "light"}
                  name="A"
                  value="dontknow"
                  onClick={handleDontknow}
                  className="dropdown-btn"
                  checked={dontknow.a === true ? true : false}
                >
                  Затрудняюсь ответить
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <p>
                  <strong>
                    B) Основные инициативы, осуществляемые в поддержку этих
                    стратегических целей (в целом)
                  </strong>
                </p>
                <p>
                  <i>
                    <ul>
                      <li>Запуск новой рекламной кампании</li>
                      <li>Запуск нового продукта/услуги</li>
                      <li>Приобретение конкурента</li>
                    </ul>
                  </i>
                </p>
              </Col>
              <Col>
                <Dropdown onSelect={handleSelectB} className="s-q13">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="dropdown-toggle"
                    disabled={dontknow.B === true ? true : false}
                  >
                    {inputB ? inputB : "Выбрать"}
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
                      51 или более
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={dontknow.B === true ? "warning" : "light"}
                  name="B"
                  value="dontknow"
                  onClick={handleDontknow}
                  className="dropdown-btn"
                >
                  Затрудняюсь ответить
                </Button>
              </Col>
            </Row>
            <div className="back-next-btns">
              <Button variant="secondary" className="back-btn" onClick={goBack}>
                <i
                  className="fas fa-chevron-left"
                  style={{ marginRight: "8px" }}
                ></i>
                Назад
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Далее
                <i
                  className="fas fa-chevron-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </Button>
            </div>
          </div>
        ) : (
          <form>
            <Table bordered>
              <tbody>
                <tr className="table-row">
                  <td style={{ verticalAlign: "middle" }}>A</td>
                  <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                    <strong>Общие стратегические цели</strong>
                    <p>Увеличение доли рынка</p>
                  </td>
                  <td>
                    <Dropdown onSelect={handleSelectA}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        disabled={dontknow.A === true ? true : false}
                      >
                        {inputA ? inputA : "Выбрать"}
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
                          11 или более
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant={dontknow.A === true ? "warning" : "light"}
                      name="A"
                      value="dontknow"
                      onClick={handleDontknow}
                      className="dropdown-btn q13-dropdown-btn"
                    >
                      Затрудняюсь ответить
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
                      Основные инициативы, осуществляемые в поддержку этих
                      стратегических целей (в целом)
                    </strong>
                    <p></p>

                    <ul>
                      <li>Запуск новой рекламной кампании</li>
                      <li>Запуск нового продукта/услуги</li>
                      <li>Приобретение конкурента</li>
                    </ul>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Dropdown onSelect={handleSelectB}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        disabled={dontknow.B === true ? true : false}
                      >
                        {inputB ? inputB : "Выбрать"}
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
                          51 или более
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
                      variant={dontknow.B === true ? "warning" : "light"}
                    >
                      Don't know
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="back-next-btns">
              <Button variant="secondary" className="back-btn" onClick={goBack}>
                <i
                  className="fas fa-chevron-left"
                  style={{ marginRight: "8px" }}
                ></i>
                Назад
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Далее
                <i
                  className="fas fa-chevron-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </Button>
            </div>
          </form>
        )}
      </div>
    </Route>
  );
}
