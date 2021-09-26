import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question17 from "./Question17";
import Question19 from "./Question19";
import { useState } from "react";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";

export default function Question18() {
  const rows = [
    {
      key: "A",
      value:
        "My company is increasingly concerned about the reputational risks associated with the amount of taxes it pays",
    },
    {
      key: "B",
      value: "My company aims to minimise the amount of taxes it pays",
    },
    {
      key: "C",
      value:
        "My company effectively communicates to the public all the taxes it pays (e.g., income, payroll, property)",
    },
    {
      key: "D",
      value: "My company’s board regularly reviews its tax strategy",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Strongly disagree",
    },
    {
      key: 2,
      value: "Moderately disagree",
    },
    {
      key: 3,
      value: "Slightly disagree",
    },
    {
      key: 4,
      value: "Neither agree nor disagree",
    },
    {
      key: 5,
      value: "Slightly agree",
    },
    {
      key: 6,
      value: "Moderately agree",
    },
    {
      key: 7,
      value: "Strongly agree",
    },
    {
      key: 8,
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q18", JSON.stringify(input));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q18">
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
            <Breadcrumb.Item active>Q18</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 19).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q18. Thinking about the taxes your company pays, to what extent do
            you agree/disagree with the following statements? (PLEASE SELECT ONE
            RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return <td>{col.value}</td>;
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr>
                      <td>{row.key}</td>
                      <td>{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td>
                            <input
                              type="radio"
                              name={row.key}
                              value={col.value}
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

            <Link to="/eng-q17">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q19">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q17">
          <Question17 />
        </Route>
        <Route path="/eng-q19">
          <Question19 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
