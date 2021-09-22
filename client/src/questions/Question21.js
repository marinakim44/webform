import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question20 from "./Question20";
import Question22 from "./Question22";
import { Button, Table } from "react-bootstrap";
import "../App.css";

export default function Question21() {
  return (
    <BrowserRouter>
      <Route path="/eng-q21">
        <div className="main">
          <p>
            Q21. How confident are you about your company’s prospects for
            revenue growth over: the next 12 months? the next three years?
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  <td>Not confident</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>Confidence in revenue growth - next 12 months</td>
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
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q20">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q22">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
