import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question11 from "./Question11";
import Question13 from "./Question13";
import { Button, Table } from "react-bootstrap";
import "../App.css";

export default function Question12() {
  return (
    <BrowserRouter>
      <Route path="/eng-q12">
        <div className="main">
          <p>
            Q12a. How favourable are the following factors with regard to your
            company’s ability to reduce greenhouse gas (GHG) emissions?
            (favourable factors are those that may help your company,
            unfavourable factors are those that may hinder your company)
          </p>
          <form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Very unfavourable</th>
                  <th>Moderately...</th>
                  <th>Slightly...</th>
                  <th>Neither...</th>
                  <th>Slightly favourable</th>
                  <th>Moderately...</th>
                  <th>Very...</th>
                  <th>Don't know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>The industry’s long-term trends</td>
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
                <tr>
                  <td>C</td>
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
                <tr>
                  <td>D</td>
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
            <Link to="/eng-q11">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q13">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q11">
          <Question11 />
        </Route>
        <Route path="/eng-q13">
          <Question13 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
