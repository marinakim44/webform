import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question9 from "./Question9";
import Question11 from "./Question11";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question10() {
  const rows = [
    {
      key: "A",
      value: "Attracting and/or retaining employees",
    },
    {
      key: "B",
      value: "Satisfying investor demands",
    },
    {
      key: "C",
      value: "Meeting customer expectations",
    },
    {
      key: "D",
      value: "Complying with government and/or intergovernmental targets",
    },
    {
      key: "E",
      value: "Mitigating climate change risks",
    },
    {
      key: "F",
      value: "Driving product/service innovation",
    },
    {
      key: "G",
      value: "Keeping pace with competitor commitments",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Not influential",
    },
    {
      key: 2,
      value: "Slightly influential",
    },
    {
      key: 3,
      value: "Moderately influential",
    },
    {
      key: 4,
      value: "Very influential",
    },
    {
      key: 5,
      value: "Extremely influential",
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
    localStorage.setItem("q10", JSON.stringify(input));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q10">
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
            <Breadcrumb.Item active>Q10</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 11).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q10a. How influential are the following factors behind your
            company’s carbon-neutral and/or net-zero commitments? (PLEASE SELECT
            ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
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
                      <td className="left-align-text">{row.value}</td>
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
            <Link to="/eng-q9">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q11">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q9">
          <Question9 />
        </Route>
        <Route path="/eng-q11">
          <Question11 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
