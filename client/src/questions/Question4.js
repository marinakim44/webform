import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question4() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const concerns = JSON.parse(localStorage.getItem("q3-concerns"));
  const rows = [
    {
      key: "1",
      value:
        "...develop products/services (including sourcing and procuring materials/inputs, manufacturing)",
    },
    {
      key: "2",
      value:
        "...sell products/services (including sales and marketing, distribution, public relations)",
    },
    {
      key: "3",
      value:
        "...raise capital (including cost of capital, sources of funding, reporting and compliance)",
    },
    {
      key: "4",
      value:
        "...attract and retain key skills/talent (including reputation, rewards and benefits, culture)",
    },
    {
      key: "5",
      value:
        "...innovate through technology or processes (including research and development, collaboration, creativity)",
    },
  ];

  const [input, setInput] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
  });
  const [checked, setChecked] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
  });
  const [disabled, setDisabled] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
  });

  const [other, setOther] = useState("");

  const handleClick = (e) => {
    const { name, value } = e.target;
    const slicedName = name.slice(0, 1);
    const index = slicedName + value;
    console.log(name, value, slicedName, index);

    setChecked((prev) => {
      return {
        ...prev,
        [index]: !checked[index],
      };
    });

    if (checked[index]) {
      if (input[slicedName].includes(`${slicedName}: ${value}`)) {
        input[slicedName].pop(`${slicedName}: ${value}`);
      }
    } else {
      if (input[slicedName].length < 3) {
        if (!input[slicedName].includes(`${slicedName}: ${value}`)) {
          input[slicedName].push(`${slicedName}: ${value}`);
        }
      } else {
        setChecked((prev) => {
          return {
            ...prev,
            [index]: !checked[index],
          };
        });
        setDisabled((prev) => {
          return {
            ...prev,
            [index]: !disabled[index],
          };
        });
      }
    }

    console.log(input, checked);
  };

  const handleChange = (e) => {
    setOther(e.target.value);
  };

  const errors = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(concerns);

    concerns.forEach((el) => {
      const key = el.slice(0, 1);

      if (key && input[key].length === 0) {
        errors.push(key);
        console.log(errors);
      }
    });

    if (errors.length > 0) {
      handleShow();
    } else {
      localStorage.setItem("q4", JSON.stringify(input));
      localStorage.setItem("q4-other", other);

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
        q4: JSON.parse(localStorage.getItem("q4")),
        q4other: localStorage.getItem("q4-other"),
      };

      axios.post("/allinputs", data);
      history.push("/eng-q5");
    }
  };

  return (
    <BrowserRouter>
      <Route path="/eng-q4">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 5).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 5).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <div className="left-align-text">
              <span>
                How do you anticipate your company could be impacted by the
                following threat(s) over the next 12 months?
                <i>
                  <p
                    className="question"
                    style={{ margin: width <= 480 ? "1rem 0" : "" }}
                  >
                    PLEASE SELECT UP TO THREE RESPONSES PER EACH STATEMENT
                  </p>
                </i>
              </span>
            </div>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {concerns.map((concern) => {
                return (
                  <div>
                    <p className="question" style={{ color: "#db536a" }}>
                      <strong>{concern.substring(2)}</strong>
                    </p>
                    {rows.map((row) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              className="m-input"
                              name={concern}
                              value={row.key}
                              onChange={handleClick}
                              disabled={
                                input[concern.slice(0, 1)].length === 3 &&
                                !input[concern.slice(0, 1)].includes(
                                  `${concern.slice(0, 1)}: ${row.key}`
                                )
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
              <Form.Group>
                <Form.Control
                  placeholder="Other (please specify)"
                  onChange={handleChange}
                  value={other}
                  className="input-text"
                ></Form.Control>
              </Form.Group>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.push("/eng-q3")}
                >
                  <i
                    className="fas fa-chevron-left"
                    style={{ color: "#fff", marginRight: "8px" }}
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
                    style={{ color: "#fff", marginLeft: "8px" }}
                  ></i>
                </Button>
              </div>
            </div>
          ) : (
            <Form>
              <table className="table">
                <tbody>
                  <tr>
                    <th></th>
                    {concerns.map((concern) => {
                      return (
                        <th>
                          <span>{concern.slice(2)}</span>
                        </th>
                      );
                    })}
                  </tr>
                  {rows.map((row) => {
                    return (
                      <tr className="table-row">
                        <td className="left-align-text">{row.value}</td>
                        {concerns.map((concern) => {
                          return (
                            <td className="input-cell">
                              <label className="label-cell">
                                <input
                                  type="checkbox"
                                  name={concern}
                                  value={row.key}
                                  onChange={handleClick}
                                  disabled={
                                    input[concern.slice(0, 1)].length === 3 &&
                                    !input[concern.slice(0, 1)].includes(
                                      `${concern.slice(0, 1)}: ${row.key}`
                                    )
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
              </table>

              <Form.Group>
                <Form.Control
                  placeholder="Other (please specify)"
                  style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
                  onChange={handleChange}
                  value={other}
                ></Form.Control>
              </Form.Group>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.push("/eng-q3")}
                >
                  <i
                    className="fas fa-chevron-left"
                    style={{ color: "#fff", marginRight: "8px" }}
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
                    style={{ color: "#fff", marginLeft: "8px" }}
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
