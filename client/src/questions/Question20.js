import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import ProgressBar from "react-animated-progress-bar";

export default function Question20() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
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
      value: "39-60% of the time",
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

  const [checked, setChecked] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (!checked.includes(name)) {
      checked.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 6) {
      handleShow();
    } else {
      localStorage.setItem("q20", JSON.stringify(input));
      history.push("/eng-q21");

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
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q20: JSON.parse(localStorage.getItem("q20")),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q20">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 21).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 21).toString() + "%",
              }}
            ></div>
          </div>
          {/* </div> */}
          {/* <ProgressBar
            width="400px"
            height="10px"
            rect
            fontColor="gray"
            percentage={(100 / 39) * 21}
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#dc3545"
            trackBorderColor="grey"
          /> */}
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Thinking about the customers who have regularly purchased your
            products/services, how often would you say they take the following
            actions: <br />
            (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>

          <form>
            <div style={{ overflow: "auto", height: "420px" }}>
              <table className="table">
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <tr style={{ position: "sticky", top: 0 }}>
                    <th colSpan="2"></th>

                    {columns.map((col) => {
                      return (
                        <td style={{ verticalAlign: "top", width: "120px" }}>
                          <p>
                            <strong>{col.title}</strong>
                          </p>
                          <p>{col.value}</p>
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr className="table-row">
                        <td>{row.key}</td>
                        <td className="left-align-text">
                          <p>
                            <strong>{row.title}</strong>
                          </p>
                          <p>{row.value}</p>
                        </td>
                        {columns.map((col) => {
                          return (
                            <td className="input-cell">
                              <label
                                className="label-cell"
                                style={{ height: "40px" }}
                              >
                                <input
                                  type="radio"
                                  name={row.key}
                                  value={col.title}
                                  onClick={handleClick}
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
            </div>
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
        </div>
      </Route>
    </BrowserRouter>
  );
}
