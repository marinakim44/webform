import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question16 from "./Question16";
import Question18 from "./Question18";
import { Button, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question17() {
  return (
    <BrowserRouter>
      <Route path="/eng-q17">
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
            <Breadcrumb.Item active>Q17</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 18).toString() + "%",
              }}
            ></div>
          </div>
          <h1>Question 17</h1>
          <form>
            <Link to="/eng-q16">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Link to="/eng-q18">
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q16">
          <Question16 />
        </Route>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
