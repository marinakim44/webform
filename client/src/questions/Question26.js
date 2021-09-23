import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question25 from "./Question25";
import Question27 from "./Question27";
import { Button, Breadcrumb, Table, Dropdown } from "react-bootstrap";
import "../App.css";

export default function Question26() {
  return (
    <BrowserRouter>
      <Route path="/eng-q26">
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
            <Breadcrumb.Item>Q25</Breadcrumb.Item>
            <Breadcrumb.Item active>Q26</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 27).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q25b How effective do you think the government has been in achieving
            these outcomes in Kazakhstan?
            <br /> (Please select one response only per row)
          </p>
          <form>
            <Table style={{ verticalAlign: "middle" }}>
              <tbody>
                <tr>
                  <td>A</td>
                  <td style={{ textAlign: "left" }}>
                    A skilled, educated and adaptable workforce
                  </td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>

                  <td>J</td>
                  <td style={{ textAlign: "left" }}>
                    Predictable macroeconomic environment
                  </td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>K</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>C</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>L</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>M</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>E</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>N</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>F</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>O</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>G</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>P</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>H</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td style={{ width: "10%" }}></td>
                  <td>Q</td>
                  <td style={{ textAlign: "left" }}>Don't know</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>I</td>
                  <td style={{ textAlign: "left" }}>...</td>
                  <td>
                    <Dropdown
                      style={{ margin: 0, padding: 0, verticalAlign: "middle" }}
                    >
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: 0, padding: 0, width: "100px" }}
                      >
                        Select
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Greatly ineffective</Dropdown.Item>
                        <Dropdown.Item>Ineffective</Dropdown.Item>
                        <Dropdown.Item>Neither / nor</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>...</Dropdown.Item>
                        <Dropdown.Item>Refused</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q25">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q27">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
        <Route path="/eng-q27">
          <Question27 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
