import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table, Form, Col, Row } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q25-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q25-checked")));
    }
    if (localStorage.getItem("q25")) {
      setInput(JSON.parse(localStorage.getItem("q25")));
    }
    if (localStorage.getItem("q25-other")) {
      setOther(localStorage.getItem("q25-other"));
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const rows = [
    {
      index: "1",
      key: "A",
      value: "A skilled, educated and adaptable workforce",
    },
    {
      index: "2",
      key: "B",
      value: "Adequate physical and digital infrastructure",
    },
    {
      index: "3",
      key: "C",
      value: "Reducing climate change and environmental damage",
    },
    {
      index: "4",
      key: "D",
      value: "High levels of employment",
    },
    {
      index: "5",
      key: "E",
      value: "An effective tax system",
    },
    {
      index: "6",
      key: "F",
      value: "Greater income equality",
    },
    {
      index: "7",
      key: "G",
      value: "The good health and well-being of the workforce",
    },
    {
      index: "8",
      key: "H",
      value: "A diverse and inclusive workforce",
    },
    {
      index: "9",
      key: "I",
      value: "Safeguards around usage of personal data",
    },
    {
      index: "10",
      key: "J",
      value: "Predictable macroeconomic environment",
    },
    {
      index: "11",
      key: "K",
      value: "Investment attractiveness of the country",
    },
    {
      index: "12",
      key: "L",
      value: "Fighting against corruption and bribery",
    },
    {
      index: "13",
      key: "M",
      value: "The supremacy of law in all spheres of state activity",
    },
    {
      index: "14",
      key: "N",
      value: "Access to affordable capital",
    },
  ];

  const [input, setInput] = useState([]);
  const [other, setOther] = useState("");
  const [none, setNone] = useState(false);
  const [dontknow, setDontknow] = useState(false);
  const [checked, setChecked] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
  });

  const [disabled, setDisabled] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
  });

  const handleClick = (e) => {
    const { name } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });
  };

  const handleChange = (e) => {
    setOther(e.target.value);
  };

  const handleNone = () => {
    setNone(!none);

    if (none === false) {
      setDontknow(false);
      Object.keys(disabled).map((el) => {
        return (disabled[el] = true);
      });
      setOther("");
    }
    if (none === true) {
      Object.keys(disabled).map((el) => {
        return (disabled[el] = false);
      });
    }
  };

  const handleDontknow = () => {
    setDontknow(!dontknow);

    if (dontknow === false) {
      setNone(false);
      Object.keys(disabled).map((el) => {
        return (disabled[el] = true);
      });
      setOther("");
    }
    if (dontknow === true) {
      Object.keys(disabled).map((el) => {
        return (disabled[el] = false);
      });
    }
  };

  useEffect(() => {
    if (dontknow === true || none === true) {
      Object.keys(checked).map((el) => {
        return (checked[el] = false);
      });
    }

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .map((x) => {
        if (!input.includes(x[0])) {
          return input.push(x[0]);
        }
        return;
      });

    Object.entries(checked)
      .filter((x) => x[1] === false)
      .map((x) => {
        if (input.includes(x[0])) {
          return setInput(input.filter((el) => el !== x[0]));
        }
        return;
      });

    Object.entries(checked)
      .filter((x) => x[1] === true)
      .map((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .map((a) => {
            return (checked[a] = true);
          });
      });
    Object.entries(checked)
      .filter((x) => x[1] === false)
      .map((x) => {
        Object.keys(checked)
          .filter((a) => a === x[0])
          .map((a) => {
            return (checked[a] = false);
          });
      });

    localStorage.setItem("q25-none", none);
    localStorage.setItem("q25-dontknow", dontknow);
    localStorage.setItem("q25", JSON.stringify(input));
    localStorage.setItem("q25-other", other);
    localStorage.setItem("q25-checked", JSON.stringify(checked));
  }, [none, dontknow, input, checked, other, disabled]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 0 && none === false && !other && dontknow === false) {
      handleShow();
    } else {
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
        q25none: localStorage.getItem("q25-none"),
        q25dontknow: localStorage.getItem("q25-dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
      };

      axios.post("/allinputs", data);
      history.push("/eng-q25b");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/eng-q25">
        <div className="main" style={{ height: "100%" }}>
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 26).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 26).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Which three of these outcomes do you think should be government
              priorities in Kazakhstan?
            </p>
            <p
              className="question"
              style={{ margin: width <= 480 ? "1rem 0" : "" }}
            >
              <i>PLEASE SELECT UP TO THREE RESPONSES ONLY</i>
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        type="checkbox"
                        name={row.key}
                        value={row.value}
                        onChange={handleClick}
                        checked={checked[row.key]}
                        disabled={
                          (Object.entries(checked).filter((c) => c[1] === true)
                            .length === 3 &&
                            !checked[row.key]) ||
                          none === true ||
                          dontknow === true
                            ? true
                            : false
                        }
                        className="m-input"
                      ></input>
                      {row.value}
                    </label>
                  </div>
                );
              })}
              <div className="m-none-dontknow-div">
                <Button
                  type="button"
                  variant={none ? "warning" : "outline-dark"}
                  value="None of the above"
                  onClick={handleNone}
                  className="m-none-btn none-btn rus-none-btn"
                >
                  NONE OF THE ABOVE
                </Button>
                <Button
                  type="button"
                  variant={dontknow ? "warning" : "outline-dark"}
                  value="Don't know"
                  onClick={handleDontknow}
                  className={
                    width <= 480
                      ? "rus-dontknow-btn"
                      : "m-dontknow-btn dontknow-btn"
                  }
                >
                  DON'T KNOW
                </Button>
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
            </div>
          ) : (
            <Form>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                      {rows
                        .filter((row) => row.index < 8)
                        .map((row) => {
                          return (
                            <tr>
                              <td>{row.key}</td>
                              <td className="left-align-text">{row.value}</td>
                              <td>
                                <label
                                  className="label-cell"
                                  style={{
                                    width: "150px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    disabled={
                                      (Object.entries(checked).filter(
                                        (c) => c[1] === true
                                      ).length === 3 &&
                                        !checked[row.key]) ||
                                      none === true ||
                                      dontknow === true
                                        ? true
                                        : false
                                    }
                                    className="m-input"
                                  ></input>
                                </label>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Table>
                    <tbody>
                      {rows
                        .filter((row) => row.index >= 8)
                        .map((row) => {
                          return (
                            <tr>
                              <td>{row.key}</td>
                              <td
                                className="left-align-text"
                                onClick={handleClick}
                              >
                                {row.value}
                              </td>
                              <td>
                                <label
                                  className="label-cell"
                                  style={{
                                    width: "150px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    name={row.key}
                                    value={row.value}
                                    onChange={handleClick}
                                    checked={checked[row.key]}
                                    disabled={
                                      (Object.entries(checked).filter(
                                        (c) => c[1] === true
                                      ).length === 3 &&
                                        !checked[row.key]) ||
                                      none === true ||
                                      dontknow === true
                                        ? true
                                        : false
                                    }
                                  ></input>
                                </label>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Form.Control
                type="text"
                placeholder="Other (please specify)"
                style={{ width: "415px", marginTop: "1rem" }}
                onChange={handleChange}
                value={other}
                disabled={none || dontknow ? true : false}
              ></Form.Control>
              <div style={{ textAlign: "left", padding: "1rem 0" }}>
                <Button
                  type="button"
                  variant={none ? "warning" : "light"}
                  value="None of the above"
                  onClick={handleNone}
                  className="none-btn"
                >
                  NONE OF THE ABOVE
                </Button>
                <Button
                  type="button"
                  variant={dontknow ? "warning" : "light"}
                  value="Don't know"
                  onClick={handleDontknow}
                  className="dontknow-btn"
                >
                  DON'T KNOW
                </Button>
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
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
