import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import ModalAlert from "../ModalAlert";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Question3() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const rows = [
    {
      key: "A",
      value: "Macroeconomic volatility",
      text: "(including in GDP, unemployment, inflation)",
    },
    {
      key: "B",
      value: "Climate change",
      text: "(including physical risks and transition risks such as policy & legal, markets, technology and reputation risks)",
    },
    {
      key: "C",
      value: "Social inequality",
      text: "(including those stemming from gender, race and ethnicity, wealth)",
    },
    {
      key: "D",
      value: "Geopolitical conflict",
      text: "(including resource and trade disputes, terrorism, interstate violence)",
    },
    {
      key: "E",
      value: "Cyber risks",
      text: "(including hacking, surveillance, disinformation)",
    },
    {
      key: "F",
      value: "Health risks",
      text: "(including COVID-19 and other pandemics, chronic illness, strains on mental health)",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Not concerned",
    },
    {
      key: "2",
      value: "Slightly concerned",
    },
    {
      key: "3",
      value: "Moderately concerned",
    },
    {
      key: "4",
      value: "Very concerned",
    },
    {
      key: "5",
      value: "Extremely concerned",
    },
    {
      key: "6",
      value: "Don't know",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [listOthers, setListOthers] = useState([]);
  const [listOfConcerns, setListOfConcerns] = useState([]);
  const [listAll, setListAll] = useState([]);
  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (
      name === "A" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Macroeconomic volatility")) {
        listOfConcerns.push("A Macroeconomic volatility");
      }
    }
    if (
      name === "B" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Climate change")) {
        listOfConcerns.push("B Climate change");
      }
    }
    if (
      name === "C" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Social inequality")) {
        listOfConcerns.push("C Social inequality");
      }
    }
    if (
      name === "D" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Geopolitical conflict")) {
        listOfConcerns.push("D Geopolitical conflict");
      }
    }
    if (
      name === "E" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Cyber risks")) {
        listOfConcerns.push("E Cyber risks");
      }
    }
    if (
      name === "F" &&
      (value === "Moderately concerned" ||
        value === "Very concerned" ||
        value === "Extremely concerned")
    ) {
      if (!listOfConcerns.includes("Health risks")) {
        listOfConcerns.push("F Health risks");
      }
    }
  };

  function handleSubmit(e) {
    if (input.A && input.B && input.C && input.D && input.E && input.F) {
      localStorage.setItem("q3", JSON.stringify(input));
      localStorage.setItem("q3-concerns", JSON.stringify(listOfConcerns));

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
      };

      axios.post("/allinputs", data);

      if (listOfConcerns.length === 0) {
        history.push("/eng-q5");
      } else {
        history.push("/eng-q4");
      }
    } else {
      handleShow();
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q3">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 4).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 4).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <div className="left-align-text">
              <p>
                How concerned are you about the following global threats
                negatively impacting your company over the next 12 months?
              </p>
              <i>
                <p className="question">
                  PLEASE SCROLL THE TABLE IF REQUIRED AND SELECT ONE RESPONSE
                  FOR EACH STATEMENT
                </p>
              </i>
            </div>
          </div>
          {width <= 768 ? (
            <div>
              {rows.map((row) => {
                return (
                  <>
                    <div className="left-align-text">
                      <p className="question">
                        <strong>{row.value}</strong>
                      </p>
                      <p>{row.text}</p>
                      {columns.map((col) => {
                        return (
                          <div className="m-div">
                            <label className="m-label">
                              <input
                                type="radio"
                                name={row.key}
                                className="m-input"
                                value={col.value}
                                onChange={handleChange}
                              ></input>
                              {col.value}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </>
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
                  type="button"
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
              <div style={{ overflow: "auto", height: "350px" }}>
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
                      <td colSpan="2"></td>
                      {columns.map((col) => {
                        return (
                          <td key={col.key}>
                            <strong>{col.value}</strong>
                          </td>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr key={row.key} className="table-row">
                          <td>{row.key}</td>
                          <td className="left-align-text">
                            <p style={{ margin: 0, padding: 0 }}>
                              <strong>{row.value}</strong>
                            </p>
                            <p style={{ margin: 0, padding: 0 }}>{row.text}</p>
                          </td>
                          {columns.map((col) => {
                            return (
                              <td
                                className="input-cell"
                                style={{ width: "100px" }}
                              >
                                <label className="label-cell">
                                  <input
                                    type="radio"
                                    name={row.key}
                                    value={col.value}
                                    onChange={handleChange}
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
                  <i className="fas fa-chevron-left back-arrow"></i>
                  Back
                </Button>

                <Button
                  type="button"
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
