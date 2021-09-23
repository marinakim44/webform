import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question13 from "./Question13";
import Question15 from "./Question15";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question14() {
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
                <tr>
                  <td colSpan="2" rowSpan="2"></td>
                  <td colSpan="3">Less often</td>
                  <td rowSpan="2">Every year</td>
                  <td colSpan="3">More often</td>
                  <td rowSpan="2">Don't know</td>
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
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>...</td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                  <td>
                    <input type="radio"></input>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q13">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q15">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
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
