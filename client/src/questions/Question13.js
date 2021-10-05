import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table, Dropdown, Row, Col } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question13() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q13-checkedA")) {
      setIsCheckedA(localStorage.getItem("q13-checkedA"));
    }
    if (localStorage.getItem("q13-checkedB")) {
      setIsCheckedB(localStorage.getItem("q13-checkedB"));
    }
    if (localStorage.getItem("q13a")) {
      setInputA(localStorage.getItem("q13a"));
    }
    if (localStorage.getItem("q13b")) {
      setInputB(localStorage.getItem("q13b"));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);

  function handleSelectA(e) {
    setInputA(e);
    localStorage.setItem("q13-checkedA", inputA);
  }

  function handleSelectB(e) {
    setInputB(e);
    localStorage.setItem("q13-checkedB", inputB);
  }

  function handleClickOtherA(e) {
    setIsCheckedA(!isCheckedA);
    setInputA("");
    localStorage.setItem("q13-checkedA", isCheckedA);
  }
  function handleClickOtherB(e) {
    setIsCheckedB(!isCheckedB);
    setInputB("");
    localStorage.setItem("q13-checkedB", isCheckedB);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if ((!inputA && !isCheckedA) || (!inputB && !isCheckedB)) {
      handleShow();
    } else {
      localStorage.setItem("q13a", inputA ? inputA : "Don't know");
      localStorage.setItem("q13b", inputB ? inputB : "Don't know");

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

      history.push("/eng-q14");
    }
  }

  function goBack() {
    history.goBack();
  }

  return (
    <Route path="/eng-q13">
      <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 14).toString())}% completed
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
            Typically, how many:
            <p style={{ margin: "0 auto 0 20px" }}>
              A) overarching strategic objectives does your company have?
            </p>
            <p style={{ margin: "0 auto 0 20px" }}>
              B) major initiatives does your company have underway in support of
              those strategic objectives? (in total)
            </p>
          </p>
          <p
            className="question"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
          </p>
        </div>
        {width <= 768 ? (
          <div style={{ textAlign: "left" }}>
            <Row style={{ verticalAlign: "middle" }}>
              <Col sm={6}>
                <p>
                  <strong>A) Overarching strategic objectives</strong>
                </p>
                <p>
                  <i>Increasing market share</i>
                </p>
              </Col>
              <Col>
                <Dropdown onSelect={handleSelectA} className="s-q13">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    disabled={isCheckedA ? true : false}
                    className="dropdown-toggle"
                  >
                    {inputA ? inputA : "Select"}
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
                      11 or more
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={isCheckedA ? "warning" : "light"}
                  value="Don't know"
                  onClick={handleClickOtherA}
                  className="dropdown-btn"
                >
                  Don't know
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <p>
                  <strong>
                    B) Major initiatives underway in support of those strategic
                    objectives (in total)
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
              </Col>
              <Col>
                <Dropdown onSelect={handleSelectB} className="s-q13">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="dropdown-toggle"
                    disabled={isCheckedB ? true : false}
                  >
                    {inputB ? inputB : "Select"}
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
                      51 or more
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Button
                  type="button"
                  variant={isCheckedB ? "warning" : "light"}
                  value="Don't know"
                  onClick={handleClickOtherB}
                  className="dropdown-btn"
                >
                  Don't know
                </Button>
              </Col>
            </Row>
            <div className="back-next-btns">
              <Button variant="secondary" className="back-btn" onClick={goBack}>
                <i
                  className="fas fa-chevron-left"
                  style={{ marginRight: "8px" }}
                ></i>
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
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
                    <strong>Overarching strategic objectives</strong>
                    <p>Increasing market share</p>
                  </td>
                  <td>
                    <Dropdown onSelect={handleSelectA}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        disabled={isCheckedA ? true : false}
                      >
                        {inputA ? inputA : "Select number"}
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
                          11 or more
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <label className="label-cell">
                      <input
                        type="checkbox"
                        style={{
                          margin: 0,
                          marginRight: "8px",
                          verticalAlign: "middle",
                        }}
                        name="a"
                        value="Don't know"
                        checked={isCheckedA ? true : false}
                        onClick={handleClickOtherA}
                      ></input>
                      Don't know
                    </label>
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
                      Major initiatives underway in support of those strategic
                      objectives (in total)
                    </strong>
                    <p></p>

                    <ul>
                      <li>Releasing a new advertising campaign</li>
                      <li>Launching a new product/service</li>
                      <li>Acquiring a competitor</li>
                    </ul>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Dropdown onSelect={handleSelectB}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="select-btn"
                        disabled={isCheckedB ? true : false}
                      >
                        {inputB ? inputB : "Select number"}
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
                          51 or more
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <label className="label-cell">
                      <input
                        type="checkbox"
                        style={{
                          verticalAlign: "middle",
                          margin: 0,
                          marginRight: "8px",
                          padding: 0,
                        }}
                        name="b"
                        value="Don't know"
                        checked={isCheckedB ? true : false}
                        onClick={handleClickOtherB}
                      ></input>
                      Don't know
                    </label>
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
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
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
