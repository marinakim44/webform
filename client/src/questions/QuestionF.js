import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionE from "./QuestionE";
import QuestionG from "./QuestionG";
import { Button, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function QuestionF() {
  return (
    <BrowserRouter>
      <Route path="/eng-qf">
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
            <Breadcrumb.Item >Q1</Breadcrumb.Item>
            <Breadcrumb.Item >Q2</Breadcrumb.Item>
            <Breadcrumb.Item >Q3</Breadcrumb.Item>
            <Breadcrumb.Item >Q4</Breadcrumb.Item>
            <Breadcrumb.Item >Q5</Breadcrumb.Item>
            <Breadcrumb.Item >Q6</Breadcrumb.Item>
            <Breadcrumb.Item >Q7</Breadcrumb.Item>
            <Breadcrumb.Item >Q8</Breadcrumb.Item>
            <Breadcrumb.Item >Q9</Breadcrumb.Item>
            <Breadcrumb.Item >Q10</Breadcrumb.Item>
            <Breadcrumb.Item >Q11</Breadcrumb.Item>
            <Breadcrumb.Item >Q12</Breadcrumb.Item>
            <Breadcrumb.Item >Q13</Breadcrumb.Item>
            <Breadcrumb.Item >Q14</Breadcrumb.Item>
            <Breadcrumb.Item >Q15</Breadcrumb.Item>
            <Breadcrumb.Item >Q16</Breadcrumb.Item>
            <Breadcrumb.Item >Q17</Breadcrumb.Item>
            <Breadcrumb.Item >Q18</Breadcrumb.Item>
            <Breadcrumb.Item >Q19</Breadcrumb.Item>
            <Breadcrumb.Item >Q20</Breadcrumb.Item>
            <Breadcrumb.Item >Q21</Breadcrumb.Item>
            <Breadcrumb.Item >Q22</Breadcrumb.Item>
            <Breadcrumb.Item >Q23</Breadcrumb.Item>
            <Breadcrumb.Item >Q24</Breadcrumb.Item>
            <Breadcrumb.Item >Q25</Breadcrumb.Item>
            <Breadcrumb.Item >Q26</Breadcrumb.Item>
            <Breadcrumb.Item >Q27</Breadcrumb.Item>
            <Breadcrumb.Item >Q28</Breadcrumb.Item>
            <Breadcrumb.Item >QA</Breadcrumb.Item>
            <Breadcrumb.Item >QB</Breadcrumb.Item>
            <Breadcrumb.Item >QC</Breadcrumb.Item>
            <Breadcrumb.Item >QD</Breadcrumb.Item>
            <Breadcrumb.Item >QE</Breadcrumb.Item>
            <Breadcrumb.Item active>QF</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 35).toString() + "%",
              }}
            ></div>
          </div>
          <h1>Question F</h1>
          <form>
            <Link to="/eng-qe">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-qg">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qe">
          <QuestionE />
        </Route>
        <Route path="/eng-qg">
          <QuestionG />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
