import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question3 from "./Question3";
import Question5 from "./Question5";
import { Button, Table, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question4(props) {
  return (
    <BrowserRouter>
      <Route path="/eng-q4">
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
            <Breadcrumb.Item active>Q4</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 5).toString() + "%",
              }}
            ></div>
          </div>
          <span>
            Q4. How do you anticipate your company could be impacted by [INSERT
            THREAT] over the next 12 months? (PLEASE SELECT UP TO THREE
            RESPONSES)
          </span>
          <Form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <span>[INSERT THREAT]</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="left-align-text">
                    <span>
                      "...develop products/services <br />
                      (including sourcing and procuring materials/inputs,
                      manufacturing)"
                    </span>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">
                    <span>
                      ...sell products/services <br />
                      (including sales and marketing, distribution, public
                      relations)
                    </span>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">
                    <span>
                      ...raise capital <br /> (including cost of capital,
                      sources of funding, reporting and compliance)
                    </span>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">
                    <span>
                      ...attract and retain key skills/talent <br /> (including
                      reputation, rewards and benefits, culture)
                    </span>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">
                    <span>
                      ...innovate through technology or processes <br />
                      (including research and development, collaboration,
                      creativity)
                    </span>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Form.Group>
              <Form.Control
                placeholder="Other (please specify)"
                style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
              ></Form.Control>
            </Form.Group>

            <Link to="/eng-q3">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q5">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
