import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question29 from "./Question29";
import QuestionA from "./QuestionA";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";

export default function Question30() {
  return (
    <BrowserRouter>
      <Route path="/eng-q30">
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
            <Breadcrumb.Item>Q29</Breadcrumb.Item>
            <Breadcrumb.Item active>Q30</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 28).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q28. What quality should a CEO possess to succeed in the modern
            business environment?
          </p>
          <Form>
            <Form.Group style={{ width: "35%" }}>
              <Form.Control
                type="text"
                placeholder="Specify here"
              ></Form.Control>
            </Form.Group>

            <Link to="/eng-q29">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qa">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q29">
          <Question29 />
        </Route>
        <Route path="/eng-qa">
          <QuestionA />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
