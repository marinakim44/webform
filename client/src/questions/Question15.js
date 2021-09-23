import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question14 from "./Question14";
import Question16 from "./Question16";
import { Button, Table } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question15() {
  return (
    <BrowserRouter>
      <Route path="/eng-q15">
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
            <Breadcrumb.Item >Q1</Breadcrumb.Item>
            <Breadcrumb.Item >Q2</Breadcrumb.Item>
            <Breadcrumb.Item >Q3</Breadcrumb.Item>
            <Breadcrumb.Item >Q4</Breadcrumb.Item>
            <Breadcrumb.Item >Q5</Breadcrumb.Item>
            <Breadcrumb.Item >Q6</Breadcrumb.Item>
            <Breadcrumb.Item >Q7</Breadcrumb.Item>
            <Breadcrumb.Item >Q8</Breadcrumb.Item>
            <Breadcrumb.Item >Q9</Breadcrumb.Item>
            <Breadcrumb.Item >Q10</Breadcrumb.Item>
            <Breadcrumb.Item >Q11</Breadcrumb.Item>
            <Breadcrumb.Item >Q12</Breadcrumb.Item>
            <Breadcrumb.Item >Q13</Breadcrumb.Item>
            <Breadcrumb.Item >Q14</Breadcrumb.Item>
            <Breadcrumb.Item active>Q15</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 16).toString() + "%",
              }}
            ></div></div>
          <p>
            Q15. Typically, how long does it take for your company to:
            approve/green-light major initiatives once an idea has been
            proposed? commit significant resources to new major initiatives?
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td colspan="2"></td>
                  <td>Up to three months</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>
                    Approve/green-light major initiatives once an idea has been
                    proposed
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
          </form>
            <Link to="/eng-q14">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q16">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
            </div>
      </Route>

      <Switch>
        <Route path="/eng-q14">
          <Question14 />
        </Route>
        <Route path="/eng-q16">
          <Question16 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
