import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question20 from "./Question20";
import Question22 from "./Question22";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question21() {
  const rows = [
    {
      key: "A",
      value: "Confidence in revenue growth - next 12 months",
    },
    {
      key: "B",
      value: "Confidence in revenue growth - next three years",
    },
  ];

  const columns = [
    "Not confident",
    "Slightly confident",
    "Moderately confident",
    "Very confident",
    "Extremely confident",
    "Don't know",
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
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
    localStorage.setItem("q21", JSON.stringify(input));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q21">
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
            <Breadcrumb.Item active>Q21</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 22).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q21. How confident are you about your company’s prospects for
            revenue growth over: the next 12 months? the next three years?
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return <td>{col}</td>;
                  })}
                </tr>
              </tbody>
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
                            value={col}
                            onClick={handleClick}
                          ></input>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </Table>

            <Link to="/eng-q20">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q22">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q20">
          <Question20 />
        </Route>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
