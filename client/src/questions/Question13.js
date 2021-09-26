import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question12 from "./Question12";
import Question14 from "./Question14";
import { useState } from "react";
import { Button, Table, Dropdown, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question13() {
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
    localStorage.setItem("q13a", inputA ? inputA : "Don't know");
    localStorage.setItem("q13b", inputB ? inputB : "Don't know");
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q13">
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link className="before-link" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="before-link" to="/eng-start">
                Credentials
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Q1</Breadcrumb.Item>
            <Breadcrumb.Item>Q2</Breadcrumb.Item>
            <Breadcrumb.Item>Q3</Breadcrumb.Item>
            <Breadcrumb.Item>Q4</Breadcrumb.Item>
            <Breadcrumb.Item>Q5</Breadcrumb.Item>
            <Breadcrumb.Item>Q6</Breadcrumb.Item>
            <Breadcrumb.Item>Q7</Breadcrumb.Item>
            <Breadcrumb.Item>Q8</Breadcrumb.Item>
            <Breadcrumb.Item>Q9</Breadcrumb.Item>
            <Breadcrumb.Item>Q10</Breadcrumb.Item>
            <Breadcrumb.Item>Q11</Breadcrumb.Item>
            <Breadcrumb.Item>Q12</Breadcrumb.Item>
            <Breadcrumb.Item active>Q13</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 14).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q13. Typically, how many: overarching strategic objectives does your
            company have? major initiatives does your company have underway in
            support of those strategic objectives? (in total)
          </p>
          <p>
            Please see below for examples of both: Overarching strategic
            objective: Increasing market share Supporting major initiatives:
            Releasing a new advertising campaign Launching a new product/service
            Acquiring a competitor (PLEASE SELECT ONE RESPONSE FOR EACH
            STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>A</td>
                  <td style={{ verticalAlign: "middle" }}>
                    Overarching strategic objectives
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
                <tr>
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
                    }}
                  >
                    Major initiatives underway in support of those strategic
                    objectives (in total)
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
                        <Dropdown.Item eventKey="41-45">41-45</Dropdown.Item>
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
            <Link to="/eng-q12">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q14">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q12">
          <Question12 />
        </Route>
        <Route path="/eng-q14">
          <Question14 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
