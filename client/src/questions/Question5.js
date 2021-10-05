import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question5() {
  const width = window.screen.width;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q5checkedA")) {
      setCheckedA(JSON.parse(localStorage.getItem("q5checkedA")));
    }
    if (localStorage.getItem("q5checkedB")) {
      setCheckedB(JSON.parse(localStorage.getItem("q5checkedB")));
    }
    if (localStorage.getItem("q5")) {
      setInput(JSON.parse(localStorage.getItem("q5")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value: "Carbon-neutral commitment",
      text: "Achieved when a company offsets its greenhouse gas (GHG) emissions to zero (e.g., by purchasing voluntary carbon credits)",
    },
    {
      key: "B",
      value: "Net-zero commitment",
      text: "Achieved when a company reduces its greenhouse gas (GHG) emissions to near zero and removes its remaining unavoidable emissions",
    },
  ];
  const columns = [
    {
      key: "1",
      value: "Yes, my company has made this commitment",
    },
    {
      key: "2",
      value: "No, but my company is working toward making this commitment",
    },
    {
      key: "3",
      value: "No, my company has not made this commitment",
    },
    {
      key: "4",
      value: "Don't know",
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState({
    A: "",
    B: "",
  });
  const [checkedA, setCheckedA] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
  });
  const [checkedB, setCheckedB] = useState({
    B1: false,
    B2: false,
    B3: false,
    B4: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    //SAVING PREVIOUS INPUT
    if (name === "A") {
      Object.keys(checkedA)
        .filter((v) => v === index)
        .map((v) => (checkedA[v] = true));
      Object.keys(checkedA)
        .filter((v) => v !== index)
        .map((v) => (checkedA[v] = false));

      localStorage.setItem("q5checkedA", JSON.stringify(checkedA));
    }
    if (name === "B") {
      Object.keys(checkedB)
        .filter((v) => v === index)
        .map((v) => (checkedB[v] = true));
      Object.keys(checkedB)
        .filter((v) => v !== index)
        .map((v) => (checkedB[v] = false));

      localStorage.setItem("q5checkedB", JSON.stringify(checkedB));
    }
  }

  function handleSubmit(e) {
    if (input.A && input.B) {
      localStorage.setItem("q5", JSON.stringify(input));
      localStorage.setItem("q5-carbonNeutral", input.A);
      localStorage.setItem("q5-netZero", input.B);

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
      };

      axios.post("/allinputs", data);

      if (input.B === "1") {
        history.push("/eng-q6");
      } else if (input.B === "2") {
        history.push("/eng-q7");
      } else if (input.B === "3") {
        if (input.A === "1") {
          history.push("/eng-q10a");
        } else if (input.A === "2") {
          history.push("/eng-q10b");
        } else if (input.A === "4" || input.A === "3") {
          history.push("/eng-q11");
        }
      } else if (input.B === "4") {
        if (input.A === "1") {
          history.push("/eng-q10a");
        } else if (input.A === "2") {
          history.push("/eng-q10b");
        } else if (input.A === "4") {
          history.push("/eng-q12");
        } else if (input.A === "3") {
          history.push("/eng-q11");
        }
      }
    } else {
      handleShow();
    }
  }

  function goBack() {
    if (JSON.parse(localStorage.getItem("q3-concerns")).length > 0) {
      history.push("/eng-q4");
    } else {
      history.push("/eng-q3");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q5">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 6).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 6).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="question">
              Has your company made a:
              <br />
              <span style={{ marginLeft: "20px" }}>
                carbon-neutral commitment?
              </span>
              <br />
              <span style={{ marginLeft: "20px" }}> net-zero commitment?</span>
            </p>
            <p
              style={{
                margin: width <= 480 ? "1rem 0" : "",
                textAlign: "left",
              }}
            >
              <i>PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div>
                    <p className="question" style={{ color: "#db536a" }}>
                      <strong>
                        {row.key}) {row.value}
                      </strong>
                    </p>
                    {columns.map((col) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              className="m-input"
                              name={row.key}
                              value={col.key}
                              type="radio"
                              onChange={handleChange}
                              checked={
                                row.key === "A"
                                  ? checkedA[`${row.key}${col.key}`]
                                  : checkedB[`${row.key}${col.key}`]
                              }
                              autoComplete="on"
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
                  <i class="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </div>
          ) : (
            <form>
              <table className="table">
                <tbody>
                  <tr>
                    <td colSpan="2"></td>
                    {columns.map((col) => {
                      return (
                        <td key={col.key}>
                          <strong>{col.value}</strong>
                        </td>
                      );
                    })}
                  </tr>
                  {rows.map((row) => {
                    return (
                      <tr key={row.key} className="table-row">
                        <td>{row.key}</td>
                        <td
                          className="left-align-text"
                          style={{ width: "200px" }}
                        >
                          {row.value}
                        </td>
                        {columns.map((col) => {
                          return (
                            <td
                              key={col.key}
                              className="input-cell"
                              style={{ width: "250px" }}
                            >
                              <label className="label-cell">
                                <input
                                  name={row.key}
                                  value={col.key}
                                  type="radio"
                                  onChange={handleChange}
                                  checked={
                                    row.key === "A"
                                      ? checkedA[`${row.key}${col.key}`]
                                      : checkedB[`${row.key}${col.key}`]
                                  }
                                  autoComplete="on"
                                ></input>
                              </label>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={goBack}
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
                  <i class="fas fa-chevron-right next-arrow"></i>
                </Button>
              </div>
            </form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
