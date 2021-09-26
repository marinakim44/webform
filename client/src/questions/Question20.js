import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question19 from "./Question19";
import Question21 from "./Question21";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question20() {
  const rows = [
    {
      key: "A",
      title: "LOYALTY (SHALLOW DEPENDENCE)",
      value:
        "Switch to a competitor’s products/services (e.g., if ours are unavailable, if a competitor offers discount/promotion)",
    },
    {
      key: "B",
      title: "RELIABILITY/QUALITY (SHALLOW INTERDEPENDENCE)",
      value: "Recommend our products/services to family or friends",
    },
    {
      key: "C",
      title: "FORESIGHT (DEEP INTERDEPENDENCE)",
      value: "Resist new updates or changes to our products/services",
    },
    {
      key: "D",
      title: "INTUITION (DEEP INTERDEPENDENCE)",
      value: "Provide feedback that our products/services exceed expectations",
    },
    {
      key: "E",
      title: "COMPETENCY (SHALLOW DEPENDENCE)",
      value:
        "Update their personal preferences with our company to receive a more tailored experience",
    },
    {
      key: "F",
      title: "BENEVOLENCE (DEEP DEPENDENCE)",
      value:
        "Choose our products/services primarily because of the company’s values (e.g., environmental, social responsibility)",
    },
  ];

  const columns = [
    {
      key: 1,
      title: "Almost never",
      value: "0-5% of the time",
    },
    {
      key: 2,
      title: "Rarely",
      value: "6-20% of the time",
    },
    {
      key: 3,
      title: "Occasionally",
      value: "21-40% of the time",
    },
    {
      key: 4,
      title: "Sometimes",
      value: "41-60% of the time",
    },
    {
      key: 5,
      title: "Frequently",
      value: "61-80% of the time",
    },
    {
      key: 6,
      title: "Usually",
      value: "81-94% of the time",
    },
    {
      key: 7,
      title: "Almost always",
      value: "95-100% of the time",
    },
    {
      key: 8,
      title: "Don't know",
      value: "",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
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
    localStorage.setItem("q20", JSON.stringify(input));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q20">
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
            <Breadcrumb.Item active>Q20</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 21).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q20. Thinking about the customers who have regularly purchased your
            products/services, how often would you say they take the following
            actions: (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered style={{ fontSize: "12px" }}>
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                  {columns.map((col) => {
                    return (
                      <td>
                        <p style={{ margin: 0, padding: 0 }}>{col.title}</p>
                        <p style={{ margin: 0, padding: 0 }}>{col.value}</p>
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr>
                      <td
                        style={{
                          margin: 0,
                          padding: 0,
                          verticalAlign: "middle",
                        }}
                      >
                        {row.key}
                      </td>
                      <td
                        className="left-align-text"
                        style={{ width: "400px" }}
                      >
                        <p style={{ margin: 0, padding: 0 }}>{row.title}</p>
                        <p style={{ margin: 0, padding: 0 }}>{row.value}</p>
                      </td>
                      {columns.map((col) => {
                        return (
                          <td>
                            <input
                              type="radio"
                              name={row.key}
                              value={col.title}
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

            <Link to="/eng-q19">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q21">Next</Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q19">
          <Question19 />
        </Route>
        <Route path="/eng-q21">
          <Question21 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
