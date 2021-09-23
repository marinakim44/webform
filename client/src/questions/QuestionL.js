import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionK from "./QuestionJ";
import EngFinish from "../EngFinish";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";

export default function QuestionL() {
  return (
    <BrowserRouter>
      <Route path="/eng-ql">
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
            <Breadcrumb.Item>QC</Breadcrumb.Item>
            <Breadcrumb.Item>QD</Breadcrumb.Item>
            <Breadcrumb.Item>QE</Breadcrumb.Item>
            <Breadcrumb.Item>QF</Breadcrumb.Item>
            <Breadcrumb.Item>QG</Breadcrumb.Item>
            <Breadcrumb.Item>QH</Breadcrumb.Item>
            <Breadcrumb.Item>QI</Breadcrumb.Item>
            <Breadcrumb.Item>QJ</Breadcrumb.Item>
            <Breadcrumb.Item>QK</Breadcrumb.Item>
            <Breadcrumb.Item active>QL</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 41).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            QL. Our research may uncover general findings with potential
            significance for your business. If such findings are uncovered, may
            a PwC partner contact you to discuss the findings after we’ve
            completed our research? (PLEASE SELECT ONE RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"Yes"}
                  style={{
                    textAlign: "left",
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={"No"}
                  style={{
                    textAlign: "left",
                  }}
                />
              </div>
            ))}
            <Link to="/eng-qk">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>
            <Link to="/eng-finish">
              <Button variant="danger" className="next-btn">
                Finish
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qk">
          <QuestionK />
        </Route>
        <Route path="/eng-finish">
          <EngFinish />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
