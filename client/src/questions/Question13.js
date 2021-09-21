import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question12 from "./Question12";
import Question14 from "./Question14";
import { Button, Table, Dropdown } from "react-bootstrap";
import "../App.css";

export default function Question13() {
  return (
    <BrowserRouter>
      <Route path="/eng-q13">
        <div className="main">
          <p>
            Q13. Typically, how many: overarching strategic objectives does your
            company have? major initiatives does your company have underway in
            support of those strategic objectives? (in total)
          </p>
          <p>
            Please see below for examples of both: Overarching strategic
            objective: Increasing market share Supporting major initiatives:
            Releasing a new advertising campaign Launching a new product/service
            Acquiring a competitor (PLEASE SELECT ONE RESPONSE FOR EACH
            STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>A</td>
                  <td style={{ verticalAlign: "middle" }}>
                    Overarching strategic objectives
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{ margin: "2px" }}
                      >
                        Select number
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>1</Dropdown.Item>
                        <Dropdown.Item>2</Dropdown.Item>
                        <Dropdown.Item>3</Dropdown.Item>
                        <Dropdown.Item>4</Dropdown.Item>
                        <Dropdown.Item>5</Dropdown.Item>
                        <Dropdown.Item>6</Dropdown.Item>
                        <Dropdown.Item>7</Dropdown.Item>
                        <Dropdown.Item>8</Dropdown.Item>
                        <Dropdown.Item>9</Dropdown.Item>
                        <Dropdown.Item>10</Dropdown.Item>
                        <Dropdown.Item>11 or more</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td
                    style={{
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="dontknowa"
                      style={{
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    ></input>
                    <label
                      for="#dontknowa"
                      style={{
                        margin: 0,
                        marginLeft: "8px",
                        verticalAlign: "middle",
                      }}
                    >
                      Don't know
                    </label>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    B
                  </td>
                  <td
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    Major initiatives underway in support of those strategic
                    objectives (in total)
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="lng-btn"
                        style={{
                          margin: "2px",
                        }}
                      >
                        Select number
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>1-5</Dropdown.Item>
                        <Dropdown.Item>51 or more</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td
                    style={{
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="dontknowb"
                      style={{ verticalAlign: "middle", margin: 0, padding: 0 }}
                    ></input>
                    <label
                      for="#dontknowb"
                      style={{
                        margin: 0,
                        marginLeft: "8px",
                        verticalAlign: "middle",
                      }}
                    >
                      Don't know
                    </label>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q12">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q14">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q12">
          <Question12 />
        </Route>
        <Route path="/eng-q14">
          <Question14 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
