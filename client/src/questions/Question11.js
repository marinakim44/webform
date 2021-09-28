import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question10 from "./Question10";
import Question12 from "./Question12";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";

export default function Question11() {
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value:
        "My company does not produce a meaningful amount of greenhouse gas (GHG) emissions",
    },
    {
      key: "B",
      value:
        "My company does not currently have the capabilities to measure its greenhouse gas (GHG) emissions",
    },
    {
      key: "C",
      value:
        "My company cannot financially afford to make a carbon-neutral or net-zero commitment",
    },
    {
      key: "D",
      value:
        "My company’s external stakeholders (e.g., investors, customers, suppliers) are not significantly concerned about climate change",
    },
    {
      key: "E",
      value:
        "My company is not confident it could fulfil a carbon-neutral or net-zero commitment",
    },
    {
      key: "F",
      value:
        "My company's sector does not have an established decarbonisation approach",
    },
    {
      key: "G",
      value:
        "My company’s internal stakeholders (e.g., employees, board members, owners) are not significantly concerned about climate change",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Not accurate",
    },
    {
      key: 2,
      value: "Slightly accurate",
    },
    {
      key: 3,
      value: "Moderately accurate",
    },
    {
      key: 4,
      value: "Very accurate",
    },
    {
      key: 5,
      value: "Extremely accurate",
    },
    {
      key: 6,
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q11", JSON.stringify(input));
    history.push("/eng-q12");

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
    };

    axios.post("/allinputs", data);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q11">
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
            <Breadcrumb.Item active>Q11</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 12).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q11. How accurate are the following statements regarding why your
            company has not made a carbon-neutral or net-zero commitment?
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered style={{ fontSize: "14px" }}>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                  {columns.map((column) => {
                    return <th>{column.value}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  return (
                    <tr>
                      <td>{row.key}</td>
                      <td>{row.value}</td>
                      {columns.map((column) => {
                        return (
                          <td>
                            <input
                              type="radio"
                              name={row.key}
                              value={column.value}
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
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q10">
          <Question10 />
        </Route>
        <Route path="/eng-q12">
          <Question12 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
