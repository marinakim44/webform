import { Route, useHistory } from "react-router-dom";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question4() {
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

  const width = window.screen.width;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [concerns, setConcerns] = useState([]);
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

  const errors = [];
  const [other, setOther] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(concerns);
    if (localStorage.getItem("q4-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q4-checked")));
    }
    if (localStorage.getItem("q4-other")) {
      setOther(localStorage.getItem("q4-other"));
    }
    if (localStorage.getItem("q4-list")) {
      setList(JSON.parse(localStorage.getItem("q4-list")));
    }
    if (localStorage.getItem("q3-concerns")) {
      setConcerns(JSON.parse(localStorage.getItem("q3-concerns")));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const index = name + value;

    setChecked((prev) => {
      return {
        ...prev,
        [index]: !checked[index],
      };
    });
  }

  useEffect(() => {
    concerns.forEach((element) => {
      var i = element.slice(0, 1);

      Object.entries(checked)
        .filter((el) => el[0].slice(0, 1) === i)
        .map((v) => {
          if (v[1] === true) {
            if (list.filter((l) => l.slice(0, 1) === i).length < 3) {
              if (!list.includes(v[0])) {
                list.push(v[0]);
              }
            }
          } else {
            if (list.includes(v[0])) {
              // list.pop(v[0]);
              setList(list.filter((x) => x !== v[0]));
            }
          }
        });
    });

    console.log(list);

    localStorage.setItem("q4-checked", JSON.stringify(checked));
    localStorage.setItem("q4-disabled", JSON.stringify(disabled));
    localStorage.setItem("q4-other", other);
    localStorage.setItem("q4-list", JSON.stringify(list));
  }, [checked, disabled, other, list]);

  const handleOther = (e) => {
    setOther(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    concerns.forEach((el) => {
      var i = el.slice(0, 1);

      if (!list.filter((l) => l.slice(0, 1) === i).length > 0) {
        errors.push(i);
      }
    });

    if (errors.length > 0) {
      handleShow();
    } else {
      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
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
      console.log(JSON.parse(localStorage.getItem("q4-list")));
      history.push("/eng-q5");
    }
  };

  return (
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
                  className="question-i"
                  style={{ margin: width <= 480 ? "1rem 0" : "" }}
                >
                  PLEASE SELECT UP TO THREE RESPONSES PER EACH COLUMN
                </p>
              </i>
            </span>
          </div>
        </div>

        {width <= 768 ? (
          <div className="left-align-text">
            {concerns.map((concern) => {
              return (
                <div key={concern}>
                  <p className="question" style={{ color: "#db536a" }}>
                    <strong>
                      {concern === "A"
                        ? "Macroeconomic volatility"
                        : concern === "B"
                        ? "Climate change"
                        : concern === "C"
                        ? "Social inequality"
                        : concern === "D"
                        ? "Geopolitical conflict"
                        : concern === "E"
                        ? "Cyber risks"
                        : concern === "F"
                        ? "Health risks"
                        : ""}
                    </strong>
                  </p>
                  {rows.map((row) => {
                    return (
                      <div key={row.key} className="m-div">
                        <label className="m-label">
                          <input
                            type="checkbox"
                            name={concern.slice(0, 1)}
                            value={row.key}
                            onChange={handleChange}
                            checked={
                              checked[`${concern.slice(0, 1)}${row.key}`]
                            }
                            disabled={
                              Object.entries(checked).filter(
                                (el) =>
                                  el[0].slice(0, 1) === concern.slice(0, 1) &&
                                  el[1] === true
                              ).length === 3 &&
                              !checked[`${concern.slice(0, 1)}${row.key}`]
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
                onChange={handleOther}
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
                      <th key={concern}>
                        <span>
                          {concern === "A"
                            ? "Macroeconomic volatility"
                            : concern === "B"
                            ? "Climate change"
                            : concern === "C"
                            ? "Social inequality"
                            : concern === "D"
                            ? "Geopolitical conflict"
                            : concern === "E"
                            ? "Cyber risks"
                            : concern === "F"
                            ? "Health risks"
                            : ""}
                        </span>
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
                          <td key={concern} className="input-cell">
                            <label className="label-cell">
                              <input
                                type="checkbox"
                                name={concern.slice(0, 1)}
                                value={row.key}
                                onChange={handleChange}
                                checked={
                                  checked[`${concern.slice(0, 1)}${row.key}`]
                                }
                                disabled={
                                  Object.entries(checked).filter(
                                    (el) =>
                                      el[0].slice(0, 1) ===
                                        concern.slice(0, 1) && el[1] === true
                                  ).length === 3 &&
                                  !checked[`${concern.slice(0, 1)}${row.key}`]
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
                value={other}
                onChange={handleOther}
              ></Form.Control>
            </Form.Group>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
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
  );
}
