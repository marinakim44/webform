import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import QuestionB from "./QuestionB";
import QuestionD from "./QuestionD";
import { Button, Breadcrumb, Form, Table } from "react-bootstrap";
import "../App.css";

export default function QuestionC() {
  const [isOther, setIsOther] = useState(false);

  function handleOther(e) {
    setIsOther(!isOther);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qc">
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
            <Breadcrumb.Item>QA</Breadcrumb.Item>
            <Breadcrumb.Item>QB</Breadcrumb.Item>
            <Breadcrumb.Item active>QC</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 32).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            QC. Which of these most accurately describes your role? (PLEASE
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
                          label={
                            "CEO of a single or multi-entity parent company"
                          }
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
                          label={"..."}
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
                          label={"..."}
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
            <Link to="/eng-qb">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qd">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qb">
          <QuestionB />
        </Route>
        <Route path="/eng-qd">
          <QuestionD />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
