import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Question16 from "./Question16";
import Question18 from "./Question18";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";

export default function Question17() {
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value: "Initiate investments in new projects",
    },
    {
      key: "B",
      value: "Stop low-potential or nonaligned projects",
    },
    {
      key: "C",
      value: "Invest in high-potential projects",
    },
    {
      key: "D",
      value: "Scale-up high-performing small businesses",
    },
    {
      key: "E",
      value: "Trim low-performing large businesses",
    },
    {
      key: "F",
      value: "Divest businesses",
    },
    {
      key: "G",
      value: "Acquire businesses",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Every four years or less frequently",
    },
    {
      key: 2,
      value: "Every three years",
    },
    {
      key: 3,
      value: "Every two years",
    },
    {
      key: 4,
      value: "Every year",
    },
    {
      key: 5,
      value: "Twice a year",
    },
    {
      key: 6,
      value: "Three times a year",
    },
    {
      key: 7,
      value: "Four times a year or more frequently",
    },
    {
      key: 8,
      value: "Not applicable / Don't know",
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
    localStorage.setItem("q17", JSON.stringify(input));
    history.push("/eng-q18");
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q17">
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
            <Breadcrumb.Item active>Q17</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 18).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q17. How frequently does your company typically engage in the
            following processes? (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2" rowSpan="2"></td>
                  <td colSpan="3">Less often</td>
                  <td></td>
                  <td colSpan="3">More often</td>
                  <td></td>
                </tr>
                <tr>
                  {columns.map((column) => {
                    return <td>{column.value}</td>;
                  })}
                </tr>

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
        <Route path="/eng-q16">
          <Question16 />
        </Route>
        <Route path="/eng-q18">
          <Question18 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
