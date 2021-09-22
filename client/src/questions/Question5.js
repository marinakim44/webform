import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question4 from "./Question4";
import Question6 from "./Question6";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question5() {
  return (
    <BrowserRouter>
      <Route path="/eng-q5">
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
            <Breadcrumb.Item active>Q5</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 6).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q5. Has your company made a: carbon-neutral commitment? net-zero
            commitment? (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Yes...</th>
                  <th>No, but...</th>
                  <th>No</th>
                  <th>Don't know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Carbon-neutral commitment Achieved when a company offsets
                    its greenhouse gas (GHG) emissions to zero (e.g., by
                    purchasing voluntary carbon credits)
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    Net-zero commitment Achieved when a company reduces its
                    greenhouse gas (GHG) emissions to near zero and removes its
                    remaining unavoidable emissions
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q4">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q6">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q4">
          <Question4 />
        </Route>
        <Route path="/eng-q6">
          <Question6 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
