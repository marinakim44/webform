import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question25B from "./Question25B";
import Question26 from "./Question26";
import { Button, Breadcrumb, Table, Form, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question25C() {
  const rows = [
    {
      key: "A",
      value: "A skilled, educated and adaptable workforce",
    },
    {
      key: "B",
      value: "Adequate digital and physical infrastructure",
    },
    {
      key: "C",
      value: "Reducing climate change and environmental damage",
    },
    {
      key: "D",
      value: "High levels of employment",
    },
    {
      key: "E",
      value: "An effective tax system",
    },
    {
      key: "F",
      value: "Greater income equality",
    },
    {
      key: "G",
      value: "The good health and well-being of the workforce",
    },
    {
      key: "H",
      value: "A diverse and inclusive workforce",
    },
    {
      key: "I",
      value: "Safeguards around usage of personal data",
    },
    {
      key: "J",
      value: "Predictable macroeconomic environment",
    },
    {
      key: "K",
      value: "Investment attractiveness of the country",
    },
    {
      key: "L",
      value: "Fighting against corruption and bribery",
    },
    {
      key: "M",
      value: "The supremacy of law in all spheres of state activity",
    },
    {
      key: "N",
      value: "Access to affordable capital",
    },
  ];

  const [input, setInput] = useState([]);

  function handleClick(e) {
    if (!input.includes(e.target.value)) {
      input.push(e.target.value);
    }
  }

  const [none, setNone] = useState("");
  const [isNone, setIsNone] = useState(false);

  function handleNone(e) {
    e.preventDefault();
    setNone(e.target.value);
    setIsNone(!isNone);
  }

  const [dontknow, setDontknow] = useState("");
  const [isDontknow, setIsDontknow] = useState(false);

  function handleDontknow(e) {
    e.preventDefault();
    setDontknow(e.target.value);
    setIsDontknow(!isDontknow);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNone) {
      localStorage.setItem("q25c", "None of the above");
    } else if (isDontknow) {
      localStorage.setItem("q25c", "Don't know");
    } else {
      localStorage.setItem("q25c", JSON.stringify(input));
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q25c">
        <div>
          <div className="sticky-sub-div">
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
              <Breadcrumb.Item>Q13</Breadcrumb.Item>
              <Breadcrumb.Item>Q14</Breadcrumb.Item>
              <Breadcrumb.Item>Q15</Breadcrumb.Item>
              <Breadcrumb.Item>Q16</Breadcrumb.Item>
              <Breadcrumb.Item>Q17</Breadcrumb.Item>
              <Breadcrumb.Item>Q18</Breadcrumb.Item>
              <Breadcrumb.Item>Q19</Breadcrumb.Item>
              <Breadcrumb.Item>Q20</Breadcrumb.Item>
              <Breadcrumb.Item>Q21</Breadcrumb.Item>
              <Breadcrumb.Item>Q22</Breadcrumb.Item>
              <Breadcrumb.Item>Q23</Breadcrumb.Item>
              <Breadcrumb.Item>Q24</Breadcrumb.Item>
              <Breadcrumb.Item>Q25</Breadcrumb.Item>
              <Breadcrumb.Item active>Q26</Breadcrumb.Item>
            </Breadcrumb>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 41) * 27).toString() + "%",
                }}
              ></div>
            </div>
          </div>

          <div className="main">
            <p>
              Q25c. In order to achieve goals (if any) which of stated below,
              your company is interested in cooperation with government agencies
              in the next three years? (Select all that apply)
            </p>
            <Form>
              <div style={{ overflow: "auto", height: "320px" }}>
                <Table>
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "#fff",
                    }}
                  >
                    <tr style={{ position: "sticky", top: 0 }}>
                      <th
                        colSpan="2"
                        style={{ position: "sticky", top: 0, zIndex: 1 }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr>
                          <td>{row.key}</td>
                          <td>{row.value}</td>

                          <td>
                            <input
                              type="checkbox"
                              value={row.key}
                              onClick={handleClick}
                              disabled={isNone || isDontknow ? true : false}
                            ></input>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "35%",
                  marginTop: "2rem",
                }}
              >
                <Button
                  type="button"
                  variant={isNone ? "warning" : "light"}
                  style={{ marginRight: "2rem", width: "100%" }}
                  value="None of the above"
                  onClick={handleNone}
                >
                  NONE OF THE ABOVE
                </Button>
                <Button
                  type="button"
                  variant={isDontknow ? "warning" : "light"}
                  style={{ width: "100%" }}
                  value="Don't know"
                  onClick={handleDontknow}
                >
                  DON'T KNOW
                </Button>
              </div>
              <div className="back-next-btns">
                <Link to="/eng-q25b">
                  <Button variant="light" className="back-btn">
                    <i
                      className="fas fa-chevron-left"
                      style={{ marginRight: "8px" }}
                    ></i>
                    Back
                  </Button>
                </Link>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  <Link to="/eng-q26">Next</Link>
                  <i
                    className="fas fa-chevron-right"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q25b">
          <Question25B />
        </Route>
        <Route path="/eng-q26">
          <Question26 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
