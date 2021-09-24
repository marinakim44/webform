import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question24 from "./Question24";
import Question26 from "./Question26";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";

export default function Question25() {
  return (
    <BrowserRouter>
      <Route path="/eng-q25">
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
            <Breadcrumb.Item active>Q25</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 26).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q25. Which three of these outcomes do you think should be government
            priorities in Kazakhstan? <br />
            (PLEASE SELECT UP TO THREE RESPONSES ONLY)
          </p>
          <form>
            <Table>
              <tbody>
                <tr>
                  <td>A</td>
                  <td style={{ textAlign: "left" }}>
                    A skilled, educated and adaptable workforce
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>

                  <td>J</td>
                  <td style={{ textAlign: "left" }}>
                    Predictable macroeconomic environment
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td style={{ textAlign: "left" }}>Adequate physical and digital infrastructure</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>K</td>
                  <td style={{ textAlign: "left" }}>Investment attractiveness of the country</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>C</td>
                  <td style={{ textAlign: "left" }}>Reducing climate change and environmental damage</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>L</td>
                  <td style={{ textAlign: "left" }}>High levels of employment</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td style={{ textAlign: "left" }}>High levels of employment</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>M</td>
                  <td style={{ textAlign: "left" }}>The supremacy of law in all spheres of state activity</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>E</td>
                  <td style={{ textAlign: "left" }}>An effective tax system</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>N</td>
                  <td style={{ textAlign: "left" }}>Access to affordable capital</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>F</td>
                  <td style={{ textAlign: "left" }}>Greater income equality</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>O</td>
                  <td style={{ textAlign: "left" }}>Other (please specify)</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>G</td>
                  <td style={{ textAlign: "left" }}>The good health and well-being of the workforce</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>P</td>
                  <td style={{ textAlign: "left" }}>None of the above</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>H</td>
                  <td style={{ textAlign: "left" }}>A diverse and inclusive workforce</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>Q</td>
                  <td style={{ textAlign: "left" }}>Don't know</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
                <tr>
                  <td>I</td>
                  <td style={{ textAlign: "left" }}>Safeguards around usage of personal data</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q24">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q26">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q24">
          <Question24 />
        </Route>
        <Route path="/eng-q26">
          <Question26 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
