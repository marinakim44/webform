import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Table, Dropdown, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question13() {
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
  }

  function handleSelectB(e) {
    setInputB(e);
  }

  function handleClickOtherA(e) {
    setIsCheckedA(!isCheckedA);
    setInputA("");
  }
  function handleClickOtherB(e) {
    setIsCheckedB(!isCheckedB);
    setInputB("");
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

  return (
    <BrowserRouter>
      <Route path="/eng-q13">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
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
            <br />
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr className="table-row">
                  <td style={{ verticalAlign: "middle" }}>A</td>
                  <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                    <strong>Overarching strategic objectives</strong>
                    <p></p>
                    Increasing market share
                  </td>
                  <td>
                    <Dropdown onSelect={handleSelectA}>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: "2px" }}
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
                  <td
                    style={{
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="dontknowa"
                      style={{
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                      name="a"
                      value="Don't know"
                      checked={isCheckedA ? true : false}
                      onClick={handleClickOtherA}
                    ></input>
                    <label
                      for="#dontknowa"
                      style={{
                        margin: 0,
                        marginLeft: "8px",
                        verticalAlign: "middle",
                      }}
                    >
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
                        className="lng-btn"
                        style={{
                          margin: "2px",
                        }}
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
                  <td
                    style={{
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="dontknowb"
                      style={{ verticalAlign: "middle", margin: 0, padding: 0 }}
                      name="b"
                      value="Don't know"
                      checked={isCheckedB ? true : false}
                      onClick={handleClickOtherB}
                    ></input>
                    <label
                      for="#dontknowb"
                      style={{
                        margin: 0,
                        marginLeft: "8px",
                        verticalAlign: "middle",
                      }}
                    >
                      Don't know
                    </label>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
              >
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
        </div>
      </Route>
    </BrowserRouter>
  );
}
