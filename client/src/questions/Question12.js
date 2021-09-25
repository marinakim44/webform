import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question11 from "./Question11";
import Question13 from "./Question13";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";

export default function Question12() {
  const rows = [
    {
      key: "A",
      value: "The industry’s long-term trends",
    },
    {
      key: "B",
      value: "The regulatory environment(s) in which my company operates",
    },
    {
      key: "C",
      value:
        "Macro environmental forces (including demographic, cultural, environmental, technological)",
    },
    {
      key: "D",
      value: "My company’s specific assets, capabilities and relationships",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Very unfavourable",
    },
    {
      key: 2,
      value: "Moderately unfavourable",
    },
    {
      key: 3,
      value: "Slightly unfavourable",
    },
    {
      key: 4,
      value: "Neither favourable nor unfavourable",
    },
    {
      key: 5,
      value: "Slightly favourable",
    },
    {
      key: 6,
      value: "Moderately favourable",
    },
    {
      key: 7,
      value: "Very favourable",
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
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   localStorage.setItem("q12", JSON.stringify(input));
  // }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("q12", JSON.stringify(input));

    // const dataInput = {
    //   fullName: localStorage.getItem("name"),
    //   email: localStorage.getItem("email"),
    //   title: localStorage.getItem("title"),
    //   q1a: localStorage.getItem("q1a"),
    //   q1b: localStorage.getItem("q1b"),
    //   q2: JSON.parse(localStorage.getItem("countries")),
    //   q3: JSON.parse(localStorage.getItem("q3")),
    //   q4: JSON.parse(localStorage.getItem("q4")),
    //   q5a: localStorage.getItem("q5-carbonNeutral"),
    //   q5b: localStorage.getItem("q5-netZero"),
    //   q6: localStorage.getItem("q6"),
    //   q7: localStorage.getItem("q7"),
    //   q8: localStorage.getItem("q8"),
    //   q9: localStorage.getItem("q9"),
    // q10: JSON.parse(localStorage.getItem("q10")),
    // q10b: JSON.parse(localStorage.getItem("q10").B),
    // q10c: JSON.parse(localStorage.getItem("q10").C),
    // q10d: JSON.parse(localStorage.getItem("q10").D),
    // q10e: JSON.parse(localStorage.getItem("q10").E),
    // q10f: JSON.parse(localStorage.getItem("q10").F),
    // q10g: JSON.parse(localStorage.getItem("q10").G),

    // question11: {
    //   a: JSON.parse(localStorage.getItem("q11")[0]),
    //   b: JSON.parse(localStorage.getItem("q11")[1]),
    //   c: JSON.parse(localStorage.getItem("q11")[2]),
    //   d: JSON.parse(localStorage.getItem("q11")[3]),
    //   e: JSON.parse(localStorage.getItem("q11")[4]),
    //   f: JSON.parse(localStorage.getItem("q11")[5]),
    //   g: JSON.parse(localStorage.getItem("q11")[6]),
    // },
    // question12: {
    //   a: JSON.parse(localStorage.getItem("q12")[0]),
    //   b: JSON.parse(localStorage.getItem("q12")[1]),
    //   c: JSON.parse(localStorage.getItem("q12")[2]),
    //   d: JSON.parse(localStorage.getItem("q12")[3]),
    // },
    // };

    // axios.post("/allinputs", dataInput);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q12">
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
            <Breadcrumb.Item active>Q12</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 13).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q12a. How favourable are the following factors with regard to your
            company’s ability to reduce greenhouse gas (GHG) emissions?
            (favourable factors are those that may help your company,
            unfavourable factors are those that may hinder your company)
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
            <Link to="/eng-q11">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q13">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q11">
          <Question11 />
        </Route>
        <Route path="/eng-q13">
          <Question13 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
