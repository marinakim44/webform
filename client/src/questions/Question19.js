import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question18 from "./Question18";
import Question20 from "./Question20";
import { useState } from "react";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";
import axios from "axios";

export default function Question19() {
  const history = useHistory();
  const [input, setInput] = useState([]);
  const [dontknow, setDontknow] = useState(false);

  function handleClick(e) {
    input.push(e.target.value);
  }

  function handleDontknow(e) {
    setDontknow(!dontknow);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (dontknow) {
      localStorage.setItem("q19", "Don't know");
    } else {
      localStorage.setItem("q19", JSON.stringify(input));
    }
    history.push("/eng-q20");

    const data = {
      uuid: localStorage.getItem("uuid"),
      name: localStorage.getItem("name"),
      company: localStorage.getItem("company"),
      title: localStorage.getItem("title"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      q1a: localStorage.getItem("q1a"),
      q1b: localStorage.getItem("q1b"),
      q2: JSON.parse(localStorage.getItem("countries")),
      q3: JSON.parse(localStorage.getItem("q3")),
      q5a: localStorage.getItem("q5-carbonNeutral"),
      q5b: localStorage.getItem("q5-netZero"),
      q6: localStorage.getItem("q6"),
      q7: localStorage.getItem("q7"),
      q8: localStorage.getItem("q8"),
      q9: localStorage.getItem("q9"),
      q10: JSON.parse(localStorage.getItem("q10")),
      q11: JSON.parse(localStorage.getItem("q11")),
      q12: JSON.parse(localStorage.getItem("q12")),
      q13a: localStorage.getItem("q13a"),
      q13b: localStorage.getItem("q13b"),
      q14: JSON.parse(localStorage.getItem("q14")),
      q15: JSON.parse(localStorage.getItem("q15")),
      q16: localStorage.getItem("q16"),
      q17: JSON.parse(localStorage.getItem("q17")),
      q18: JSON.parse(localStorage.getItem("q18")),
      q19: JSON.parse(localStorage.getItem("q19")),
    };

    axios.post("/allinputs", data);
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
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Engaged tax specialists to advise our company on potential implications"
                onClick={handleClick}
                value="Engaged tax specialists to advise our company on potential implications"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Modeled the cash tax’s impact on our company"
                onClick={handleClick}
                value="Modeled the cash tax’s impact on our company"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Conducted scenario planning regarding where our company will pay taxes"
                onClick={handleClick}
                value="Modeled the cash tax’s impact on our company"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Encouraged government officials to support the tax policy"
                onClick={handleClick}
                value="Encouraged government officials to support the tax policy"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Recommended additional tax policy changes to government officials"
                onClick={handleClick}
                value="Recommended additional tax policy changes to government officials"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Other action (please specify)"
                onClick={handleClick}
                value="Other action (please specify)"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Our company has not taken any action"
                onClick={handleClick}
                value="Our company has not taken any action"
                disabled={dontknow ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Don't know"
                onClick={handleDontknow}
                value="Don't know"
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="light"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
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
