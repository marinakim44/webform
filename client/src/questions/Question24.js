import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question24() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    console.log(input);

    if (input.A.length === 0) {
      if (input.B.length === 0) {
        handleShow();
      }
    } else if (input.B.length === 0) {
      handleShow();
    } else {
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
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q24">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 25).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 25).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Are the following non-financial related outcomes included in your:
              <p style={{ margin: "4px auto 0 20px" }}>
                A) company’s long-term corporate strategy?{" "}
              </p>
              <p style={{ margin: "0 auto 0 20px" }}>
                B) personal annual bonus or long-term incentive plan?{" "}
              </p>
            </p>
            <p className="question">
              <i>PLEASE SELECT ALL THAT APPLY</i>
            </p>
          </div>

          {width <= 768 ? (
            <div className="left-align-text">
              {columns.map((col) => {
                return (
                  <div>
                    <strong>
                      <p>
                        {col.key}) {col.value}
                      </p>
                    </strong>
                    {rows.map((row) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              className="m-input"
                              name={col.key}
                              value={row.value}
                              onChange={handleClick}
                              disabled={
                                (noneA && row.key !== "G" && col.key === "A") ||
                                (noneB && row.key !== "G" && col.key === "B") ||
                                (notA && row.key !== "H" && col.key === "A") ||
                                (notB && row.key !== "H" && col.key === "B")
                                  ? true
                                  : false
                              }
                            ></input>
                            {row.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>

                  {columns.map((col) => {
                    return (
                      <td>
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
                          <td className="input-cell">
                            <label className="label-cell">
                              <input
                                type="checkbox"
                                name={col.key}
                                value={row.value}
                                onChange={handleClick}
                                disabled={
                                  (noneA &&
                                    row.key !== "G" &&
                                    col.key === "A") ||
                                  (noneB &&
                                    row.key !== "G" &&
                                    col.key === "B") ||
                                  (notA &&
                                    row.key !== "H" &&
                                    col.key === "A") ||
                                  (notB && row.key !== "H" && col.key === "B")
                                    ? true
                                    : false
                                }
                              ></input>
                            </label>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          <div className="back-next-btns">
            <Button
              variant="secondary"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: "8px" }}
              ></i>
              Back
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Next
              <i
                className="fas fa-chevron-right"
                style={{ marginLeft: "8px" }}
              ></i>
            </Button>
          </div>
        </div>
      </Route>
    </BrowserRouter>
  );
}
