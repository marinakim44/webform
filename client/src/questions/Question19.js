import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question18 from "./Question18";
import Question20 from "./Question20";
import { useState } from "react";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";

export default function Question19() {
  const [input, setInput] = useState([]);

  function handleClick(e) {
    input.push(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q19", JSON.stringify(input));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q19">
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
            <Breadcrumb.Item active>Q19</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 20).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q19. What actions has your company taken, if any, to prepare for
            potential global tax policy change that would make all countries
            commit to an effective corporate tax rate of at least 15%? (PLEASE
            SELECT ALL THAT APPLY)
          </p>
          <Form style={{ textAlign: "left" }}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="The global tax policy change is not applicable to our company"
                onClick={handleClick}
                value="The global tax policy change is not applicable to our company"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

              <Form.Check
                type="checkbox"
                label="Engaged tax specialists to advise our company on potential implications"
                onClick={handleClick}
                value="Engaged tax specialists to advise our company on potential implications"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Modeled the cash tax’s impact on our company"
                onClick={handleClick}
                value="Modeled the cash tax’s impact on our company"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Conducted scenario planning regarding where our company will pay taxes"
                onClick={handleClick}
                value="Modeled the cash tax’s impact on our company"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Encouraged government officials to support the tax policy"
                onClick={handleClick}
                value="Encouraged government officials to support the tax policy"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Recommended additional tax policy changes to government officials"
                onClick={handleClick}
                value="Recommended additional tax policy changes to government officials"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Other action (please specify)"
                onClick={handleClick}
                value="Other action (please specify)"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Our company has not taken any action"
                onClick={handleClick}
                value="Our company has not taken any action"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Don't know"
                onClick={handleClick}
                value="Don't know"
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Link to="/eng-q18">
                <Button variant="light" className="back-btn">
                  Back
                </Button>
              </Link>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                <Link to="/eng-q20">Next</Link>
              </Button>
            </div>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
