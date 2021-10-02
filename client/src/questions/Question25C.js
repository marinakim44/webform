import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Breadcrumb, Table, Form, Col, Row } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25C() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const rows = [
    {
      index: 1,
      key: "A",
      value: "A skilled, educated and adaptable workforce",
    },
    {
      index: 2,
      key: "B",
      value: "Adequate physical and digital infrastructure",
    },
    {
      index: 3,
      key: "C",
      value: "Reducing climate change and environmental damage",
    },
    {
      index: 4,
      key: "D",
      value: "High levels of employment",
    },
    {
      index: 5,
      key: "E",
      value: "An effective tax system",
    },
    {
      index: 6,
      key: "F",
      value: "Greater income equality",
    },
    {
      index: 7,
      key: "G",
      value: "The good health and well-being of the workforce",
    },
    {
      index: 8,
      key: "H",
      value: "A diverse and inclusive workforce",
    },
    {
      index: 9,
      key: "I",
      value: "Safeguards around usage of personal data",
    },
    {
      index: 10,
      key: "J",
      value: "Predictable macroeconomic environment",
    },
    {
      index: 11,
      key: "K",
      value: "Investment attractiveness of the country",
    },
    {
      index: 12,
      key: "L",
      value: "Fighting against corruption and bribery",
    },
    {
      index: 13,
      key: "M",
      value: "The supremacy of law in all spheres of state activity",
    },
    {
      index: 14,
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
    const { name, value } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });

    if (checked[name]) {
      if (input.includes(`${name}: ${value}`)) {
        input.pop(`${name}: ${value}`);
      }
    } else {
      if (!input.includes(`${name}: ${value}`)) {
        input.push(`${name}: ${value}`);
      } else {
        setChecked(false);
        setDisabled(true);
      }
    }

    console.log(checked, input);
  };

  const handleChange = (e) => {
    setOther(e.target.value);
  };

  const handleNone = () => {
    if (dontknow) {
      setDontknow(false);
    }
    if (input) {
      setInput([]);
    }
    setNone(!none);

    if (none) {
      if (dontknow) {
        setDontknow(false);
      }
    }
    if (none || dontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  };

  const handleDontknow = () => {
    if (none) {
      setNone(false);
    }
    if (input) {
      setInput([]);
    }
    setDontknow(!dontknow);

    if (dontknow) {
      if (none) {
        setNone(false);
      }
    }
    if (none || dontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("q25c-none", none);
    localStorage.setItem("q25c-dontknow", dontknow);
    localStorage.setItem("q25c", JSON.stringify(input));
    localStorage.setItem("q25c-other", other);

    if (input.length === 0 && !none && !other && !dontknow) {
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
        q25none: localStorage.getItem("q25none"),
        q25dontknow: localStorage.getItem("q25dontknow"),
        q25other: localStorage.getItem("q25-other"),
        q25: JSON.parse(localStorage.getItem("q25")),
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
        q25cOther: localStorage.getItem("q25c-other"),
      };

      axios.post("/allinputs", data);
      history.push("/eng-q26");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/eng-q25c">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 28).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 28).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Which three of these outcomes do you think should be government
            priorities in Kazakhstan?
            <br />
            (Select all that apply)
          </p>
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
                                  disabled={none || dontknow ? true : false}
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
                                  disabled={none || dontknow ? true : false}
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
              style={{ width: "33.5%", marginTop: "1rem" }}
              onChange={handleChange}
              value={other}
              disabled={none || dontknow ? true : false}
            ></Form.Control>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                width: "33.5%",
                marginTop: "2rem",
              }}
            >
              <Button
                type="button"
                variant={none ? "warning" : "light"}
                style={{ marginRight: "2rem", width: "46%" }}
                value="None of the above"
                onClick={handleNone}
              >
                NONE OF THE ABOVE
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
        </div>
      </Route>
    </BrowserRouter>
  );
}