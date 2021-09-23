import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Question30 from "./Question30";
import QuestionB from "./QuestionB";
import { Button, Breadcrumb, Table, Form } from "react-bootstrap";
import "../App.css";

export default function QuestionA() {
  const [isOther, setIsOther] = useState(false);

  function handleOther(e) {
    setIsOther(!isOther);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qa">
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
            <Breadcrumb.Item>Q26</Breadcrumb.Item>
            <Breadcrumb.Item>Q27</Breadcrumb.Item>
            <Breadcrumb.Item>Q28</Breadcrumb.Item>
            <Breadcrumb.Item active>QA</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 30).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            QA. If willing, would you please record your gender below? (PLEASE
            SELECT ONE RESPONSE)
          </p>
          <Form>
            <Table borderless>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={"Female"}
                          style={{
                            textAlign: "left",
                          }}
                        />
                      </div>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={"Male"}
                          style={{
                            textAlign: "left",
                          }}
                        />
                      </div>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={"Prefer not to say"}
                          style={{
                            textAlign: "left",
                          }}
                        />
                      </div>
                    ))}
                  </td>
                </tr>
                <tr>
                  {["radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Other"}
                        style={{
                          textAlign: "left",
                        }}
                        onClick={handleOther}
                      />
                    </div>
                  ))}
                </tr>
                {isOther ? (
                  <tr>
                    <td>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Other (please specify)"
                        ></Form.Control>
                      </Form.Group>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </Table>
            <Link to="/eng-q30">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qb">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q30">
          <Question30 />
        </Route>
        <Route path="/eng-qb">
          <QuestionB />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
