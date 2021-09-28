import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question13 from "./Question13";
import Question15 from "./Question15";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function Question14() {
  const history = useHistory();
  const [input, setInput] = useState({
    a: "",
    b: "",
    c: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q14", JSON.stringify(input));
    history.push("/eng-q15");

    const data = {
      name: localStorage.getItem("name"),
      company: localStorage.getItem("company"),
      title: localStorage.getItem("title"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      q1a: localStorage.getItem("q1a"),
      q1b: localStorage.getItem("q1b"),
      q2: JSON.parse(localStorage.getItem("countries")),
      q3: JSON.parse(localStorage.getItem("q3")),
      q4: JSON.parse(localStorage.getItem("q4")),
      q4other: localStorage.getItem("q4-other"),
      q5a: localStorage.getItem("q4-carbonNeutral"),
      q5b: localStorage.getItem("q4-netZero"),
      q6: localStorage.getItem("q6"),
      q7: localStorage.getItem("q7"),
      q8: localStorage.getItem("q8"),
      q9: localStorage.getItem("q9"),
      q10: JSON.parse(localStorage.getItem("q10")),
      q11: JSON.parse(localStorage.getItem("q11")),
      q12: JSON.parse(localStorage.getItem("q12")),
      q13a: localStorage.getItem("q13a"),
      q13b: localStorage.getItem("q13b"),
      q14: input,
    };

    axios.post("/allinputs", data);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q14">
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
            <Breadcrumb.Item>Q13</Breadcrumb.Item>
            <Breadcrumb.Item active>Q14</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 15).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q14. Typically, how frequently does your company formally: assess
            its major initiatives? change its major initiatives? update its
            workforce about its major initiatives? (PLEASE SELECT ONE RESPONSE
            FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr style={{ color: "#dc3534" }}>
                  <td colSpan="2" rowSpan="2"></td>
                  <td colSpan="3">
                    <strong>Less often</strong>
                  </td>
                  <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                    <strong>Every year</strong>
                  </td>
                  <td colSpan="3">
                    <strong>More often</strong>
                  </td>
                  <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                    <strong>Don't know</strong>
                  </td>
                </tr>
                <tr>
                  <td>Every four years or less frequently</td>
                  <td>Every three years</td>
                  <td>Every two years</td>
                  <td>Twice a year</td>
                  <td>Three times a year</td>
                  <td>Four times a year or more frequently</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>Assess its major initiatives</td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Every four years or less frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Every three years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Every two years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Every year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Twice a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Three times a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Four times a year or more frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="a"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>Change its major initiatives</td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Every four years or less frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Every three years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Every two years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Every year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Twice a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Three times a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Four times a year or more frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="b"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>Update its workforce about its major initiatives</td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Every four years or less frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Every three years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Every two years"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Every year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Twice a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Three times a year"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Four time a year or more frequently"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="c"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Button
              variant="light"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q13">
          <Question13 />
        </Route>
        <Route path="/eng-q15">
          <Question15 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
