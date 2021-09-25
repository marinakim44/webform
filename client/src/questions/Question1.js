import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import EngStart from "../EngStart";
import Question2 from "./Question2";
import { Table, Button, Breadcrumb } from "react-bootstrap";
import "../App.css";
import { useDispatch } from "react-redux";
import { question1 } from "../actions";

export default function Question1() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  function handleA(e) {
    setA(e.target.value);
    console.log(e.target.value);
  }

  function handleB(e) {
    setB(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      question1({
        a: a,
        b: b,
      })
    );
    localStorage.setItem("q1a", a);
    localStorage.setItem("q1b", b);
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
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  <td>Decline significantly</td>
                  <td>Decline moderately</td>
                  <td>Decline slightly</td>
                  <td>Stay the same</td>
                  <td>Improve significantly</td>
                  <td>Improve moderately</td>
                  <td>Improve slightly</td>
                  <td>Don't know</td>
                </tr>

                <tr>
                  <td>A</td>
                  <td className="left-align-text">
                    Global economic growth - next 12 months
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Decline significantly"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Decline moderately"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Decline slightly"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Stay the same"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Improve slightly"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Improve moderately"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Improve significantly"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Don't know"
                      onClick={handleA}
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
                      type="radio"
                      name="b"
                      value="Decline significantly"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Decline moderately"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Decline slightly"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Stay the same"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Improve slightly"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Improve moderately"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Improve significantly"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Don't know"
                      onClick={handleB}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="back-next-btns">
              {/* <Link to="/eng-start"> */}
              <Button
                variant="light"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                <i
                  class="fas fa-chevron-left"
                  style={{ color: "#000", marginRight: "10px" }}
                ></i>
                Back
              </Button>
              {/* </Link> */}

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                <Link to="/eng-q2" style={{ color: "#fff" }}>
                  Next
                </Link>
                <i
                  class="fas fa-chevron-right"
                  style={{ color: "#fff", marginLeft: "10px" }}
                ></i>
              </Button>
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
