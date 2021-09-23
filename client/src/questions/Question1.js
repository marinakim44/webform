import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import EngStart from "../EngStart";
import Question2 from "./Question2";
import { Table, Button, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question1() {
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState({
    A: [],
    B: [],
  });

  function handleClick(e) {
    const { name, value } = e.target;
    const letter = name.slice(-1);
    setIsChecked(!isChecked);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [letter]: [value],
      };
    });
    console.log(input);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q1">
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
            <Breadcrumb.Item active>Q1</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 2).toString() + "%",
              }}
            ></div>
          </div>
          <div className="left-align-text">
            <span>
              Q1. How do you believe economic growth (i.e., gross domestic
              product) will change, if at all, over the next 12 months in:{" "}
              <br />
              <span style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                A) the global economy?
              </span>
              <br />
              <span style={{ marginLeft: "2rem" }}>B) Kazakhstan economy?</span>
            </span>
          </div>
          <form>
            <Table bordered style={{ color: "black" }}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Decline significantly</th>
                  <th>Decline moderately</th>
                  <th>Decline slightly</th>
                  <th>Stay the same</th>
                  <th>Improve significantly</th>
                  <th>Improve moderately</th>
                  <th>Improve slightly</th>
                  <th>Don't know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td className="left-align-text">
                    Global economic growth - next 12 months
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineSignificantlyA"
                      value="Decline significantly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineModeratelyA"
                      value="Decline moderately"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineSlightlyA"
                      value="Decline slightly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="sameA"
                      value="Stay the same"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveSlightlyA"
                      value="Improve slightly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveModeratelyA"
                      value="Improve moderately"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveSignificantlyA"
                      value="Improve significantly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowA"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td className="left-align-text">
                    Kazakhstan economic growth - next 12 months
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineSignificantlyB"
                      value="Decline significantly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineModeratelyB"
                      value="Decline moderately"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="declineSlightlyB"
                      value="Decline slightly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="sameB"
                      value="Stay the same"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveSlightlyB"
                      value="Improve slightly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveModeratelyB"
                      value="Improve moderately"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="improveSignificantlyB"
                      value="Improve significantly"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="Don't know"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="back-next-btns">
              <Link to="/eng-start">
                <Button variant="light" className="back-btn">
                  <i
                    class="fas fa-chevron-left"
                    style={{ color: "#000", marginRight: "10px" }}
                  ></i>
                  Back
                </Button>
              </Link>
              <Link to="/eng-q2">
                <Button variant="danger" className="next-btn">
                  Next
                  <i
                    class="fas fa-chevron-right"
                    style={{ color: "#fff", marginLeft: "10px" }}
                  ></i>
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </Route>
      <Switch>
        <Route path="/eng-start">
          <EngStart />
        </Route>
        <Route path="/eng-q2">
          <Question2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
