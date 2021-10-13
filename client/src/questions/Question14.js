import { Route, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question14() {
  const history = useHistory();
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q14-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q14-checked")));
    }
    if (localStorage.getItem("q14")) {
      setInput(JSON.parse(localStorage.getItem("q14")));
    }
  }, []);
  const rows = [
    {
      key: "A",
      value: "Assess its major initiatives",
    },
    {
      key: "B",
      value: "Change its major initiatives",
    },
    {
      key: "C",
      value: "Update its workforce about its major initiatives",
    },
  ];

  const columns = [
    {
      key: "1",
      title: "Less often",
      value: "Every four years or less frequently",
    },
    {
      key: "2",
      title: "Less often",
      value: "Every three years",
    },
    {
      key: "3",
      title: "Less often",
      value: "Every two years",
    },
    {
      key: "4",
      title: "Every year",
      value: "Every year",
    },
    {
      key: "5",
      title: "More often",
      value: "Twice a year",
    },
    {
      key: "6",
      title: "More often",
      value: "Three times a year",
    },
    {
      key: "7",
      title: "More often",
      value: "Four times a year or more frequently",
    },
    {
      key: "8",
      title: "Don't know",
      value: "Don't know",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
  });

  const [checked, setChecked] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    A6: false,
    A7: false,
    A8: false,

    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    B6: false,
    B7: false,
    B8: false,

    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
  });

  function handleClick(e) {
    const { name, value } = e.target;
    const index = name + value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    setChecked((prev) => {
      return {
        ...prev,
        [index]: true,
      };
    });

    Object.keys(checked)
      .filter((y) => y.slice(0, 1) === name && y[0] === index)
      .map((z) => {
        return (checked[z] = true);
      });

    Object.keys(checked)
      .filter((y) => y.slice(0, 1) === name && y[0] !== index)
      .map((z) => {
        return (checked[z] = false);
      });
  }

  useEffect(() => {
    localStorage.setItem("q14-checked", JSON.stringify(checked));
    localStorage.setItem("q14", JSON.stringify(input));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.entries(input).filter((x) => x[1] === "").length > 0) {
      handleShow();
    } else {
      history.push("/eng-q15");

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
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Route path="/eng-q14">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 15).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 15).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="question">
            <strong>
              Typically, how frequently does your company formally:
            </strong>{" "}
            <br />- assess its major initiatives?
            <br />- change its major initiatives?
            <br />- update its workforce about its major initiatives?
          </p>
          <p className="question-i">
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
                            type="radio"
                            name={row.key}
                            value={col.key}
                            onChange={handleClick}
                            className="m-input"
                            checked={checked[`${row.key}${col.key}`]}
                          />

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
        ) : (
          <form>
            <Table bordered className="table">
              <tbody>
                <tr style={{ fontWeight: "bold", color: "#dc3545" }}>
                  <td colSpan="2" rowSpan="2"></td>
                  <td colSpan="3">Less often</td>
                  <td rowSpan="2">Every year</td>
                  <td colSpan="3">More often</td>
                  <td rowSpan="2">Don't know</td>
                </tr>
                <tr>
                  {columns
                    .filter(
                      (col) =>
                        col.value !== "Every year" && col.value !== "Don't know"
                    )
                    .map((col) => {
                      return <td>{col.value}</td>;
                    })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr className="table-row">
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell">
                            <label className="label-cell">
                              <input
                                type="radio"
                                name={row.key}
                                value={col.key}
                                onChange={handleClick}
                                checked={
                                  checked[`${row.key}${col.key}`] === true
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
          </form>
        )}
      </div>
    </Route>
  );
}
