import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Question10A from "./Question10A";
import Switch from "react-bootstrap/esm/Switch";

export default function Question11() {
  const width = window.screen.width;
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const [checked, setChecked] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    if (!checked.includes(name)) {
      checked.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 7) {
      handleShow();
    } else {
      localStorage.setItem("q11", JSON.stringify(input));

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
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10: JSON.parse(localStorage.getItem("q10")),
        q11: JSON.parse(localStorage.getItem("q11")),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q12");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q11">
        <div className="main">
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
            <h2 className="percent">
              {Math.round(((100 / 39) * 12).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 12).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              How accurate are the following statements regarding why your
              company has not made a carbon-neutral or net-zero commitment?
            </p>
            <p
              className="left-align-text"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="left-align-text">
                    <strong>
                      <p>
                        {row.key}) {row.value}
                      </p>
                    </strong>
                    {columns.map((col) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              className="m-input"
                              type="radio"
                              name={row.key}
                              value={col.value}
                              onClick={handleClick}
                            ></input>
                            {col.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
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
              <div className="back-next-btns">
                <Button
                  variant="light"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i className="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
      <Switch>
        <Route path="/eng-q10a">
          <Question10A />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
