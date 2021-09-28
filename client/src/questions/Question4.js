import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import Question3 from "./Question3";
import Question5 from "./Question5";
import { Button, Table, Form, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";

export default function Question4() {
  const history = useHistory();
  const concerns = JSON.parse(localStorage.getItem("q3"));
  const rows = [
    {
      key: "1",
      value:
        "...develop products/services (including sourcing and procuring materials/inputs, manufacturing)",
    },
    {
      key: "2",
      value:
        "...sell products/services (including sales and marketing, distribution, public relations)",
    },
    {
      key: "3",
      value:
        "...raise capital (including cost of capital, sources of funding, reporting and compliance)",
    },
    {
      key: "4",
      value:
        "...attract and retain key skills/talent (including reputation, rewards and benefits, culture)",
    },
    {
      key: "5",
      value:
        "...innovate through technology or processes (including research and development, collaboration, creativity)",
    },
  ];

  const [selectedActions, setSelectedActions] = useState([]);
  const [other, setOther] = useState("");

  function handleClick(e) {
    const { name, value } = e.target;
    selectedActions.push({
      name: name,
      value: value,
    });
  }

  function handleChange(e) {
    setOther(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q4", JSON.stringify(selectedActions));
    localStorage.setItem("q4-other", other);

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
      q4: JSON.parse(localStorage.getItem("q4")),
      q4other: localStorage.getItem("q4-other"),
    };

    axios.post("/allinputs", data);
    history.push("/eng-q5");
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q4">
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
            <Breadcrumb.Item active>Q4</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 5).toString() + "%",
              }}
            ></div>
          </div>

          <div className="left-align-text">
            <span>
              Q4. How do you anticipate your company could be impacted by the
              following threat(s) over the next 12 months? (PLEASE SELECT UP TO
              THREE RESPONSES)
            </span>
          </div>

          <Form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  {concerns.map((concern) => {
                    return (
                      <th>
                        <span>{concern}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  return (
                    <tr>
                      <td className="left-align-text">{row.value}</td>
                      {concerns.map((concern) => {
                        return (
                          <td>
                            <input
                              type="checkbox"
                              name={concern}
                              value={row.key}
                              onClick={handleClick}
                            ></input>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Form.Group>
              <Form.Control
                placeholder="Other (please specify)"
                style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
                onChange={handleChange}
                value={other}
              ></Form.Control>
            </Form.Group>

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
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
