import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question23 from "./Question23";
import Question25 from "./Question25";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function Question24() {
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Greenhouse gas (GHG) emission targets",
    },
    {
      key: "B",
      value: "Gender representation rates",
    },
    {
      key: "C",
      value: "Race and ethnicity representation rates",
    },
    {
      key: "D",
      value: "Customer satisfaction metrics",
    },
    {
      key: "E",
      value: "Automation and digitisation goals",
    },
    {
      key: "F",
      value: "Employee engagement metrics",
    },
    {
      key: "G",
      value: "None of the above",
    },
    {
      key: "H",
      value: "Prefer not to answer",
    },
  ];

  const columns = [
    {
      key: "A",
      value: "Company’s long-term corporate strategy",
    },
    {
      key: "B",
      value: "Personal annual bonus or long-term incentive plan",
    },
  ];

  const [input, setInput] = useState({
    A: [],
    B: [],
  });

  const [noneA, setNoneA] = useState(false);
  const [noneB, setNoneB] = useState(false);
  const [notA, setNotA] = useState(false);
  const [notB, setNotB] = useState(false);

  function handleClick(e) {
    const { name, value } = e.target;
    if (name === "A" && value === "None of the above") {
      setNoneA(!noneA);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["None of the above"],
        };
      });
    }
    if (name === "B" && value === "None of the above") {
      setNoneB(!noneB);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["None of the above"],
        };
      });
    }
    if (name === "A" && value === "Prefer not to answer") {
      setNotA(!notA);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Prefer not to answer"],
        };
      });
    }
    if (name === "B" && value === "Prefer not to answer") {
      setNotB(!notB);
      setInput((prev) => {
        return {
          ...prev,
          [name]: ["Prefer not to answer"],
        };
      });
    }
    if (name === "A" && !input.A.includes(value)) {
      input.A.push(value);
    }
    if (name === "B" && !input.B.includes(value)) {
      input.B.push(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q24", JSON.stringify(input));
    history.push("/eng-q25");

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
      q20: JSON.parse(localStorage.getItem("q20")),
      q21: JSON.parse(localStorage.getItem("q21")),
      q22: JSON.parse(localStorage.getItem("q22")),
      q23: localStorage.getItem("q23"),
      q24: JSON.parse(localStorage.getItem("q24")),
    };

    axios.post("/allinputs", data);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q24">
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
            <Breadcrumb.Item>Q21</Breadcrumb.Item>
            <Breadcrumb.Item>Q22</Breadcrumb.Item>
            <Breadcrumb.Item>Q23</Breadcrumb.Item>
            <Breadcrumb.Item active>Q24</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 25).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q24. Are the following non-financial related outcomes included in
            your: company’s long-term corporate strategy? personal annual bonus
            or long-term incentive plan? (PLEASE SELECT ALL THAT APPLY)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>

                  {columns.map((col) => {
                    return (
                      <td className="left-align-text">
                        {col.key}) {col.value}
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr>
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td>
                            <input
                              type="checkbox"
                              name={col.key}
                              value={row.value}
                              onClick={handleClick}
                              disabled={
                                (noneA && row.key !== "G" && col.key === "A") ||
                                (noneB && row.key !== "G" && col.key === "B") ||
                                (notA && row.key !== "H" && col.key === "A") ||
                                (notB && row.key !== "H" && col.key === "B")
                                  ? true
                                  : false
                              }
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
              {/* <Link style={{ color: "#fff" }} to="/eng-q25"> */}
              Next
              {/* </Link> */}
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q23">
          <Question23 />
        </Route>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
