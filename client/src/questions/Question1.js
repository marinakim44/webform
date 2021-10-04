import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import "../Small.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question1() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const rows = [
    {
      key: "A",
      value: "Global economic growth - next 12 months",
    },
    {
      key: "B",
      value: "Kazakhstan economic growth - next 12 months",
    },
  ];

  const columns = [
    {
      key: "1",
      value: "Decline significantly",
    },
    {
      key: "2",
      value: "Decline moderately",
    },
    {
      key: "3",
      value: "Decline slightly",
    },
    {
      key: "4",
      value: "Stay the same",
    },
    {
      key: "5",
      value: "Improve slightly",
    },
    {
      key: "6",
      value: "Improve moderately",
    },
    {
      key: "7",
      value: "Improve significantly",
    },
    {
      key: "8",
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (input.A && input.B) {
      localStorage.setItem("q1", JSON.stringify(input));
      history.push("/eng-q2");

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
      };
      axios.post("/allinputs", data);
    } else {
      handleShow();
    }
  };

  return (
    <Route path="/eng-q1" exact>
      <div className="main" style={{ height: "100%" }}>
        <div className={width <= 768 ? "sticky-sub-div" : ""}>
          <h2 className="percent">
            {Math.round(((100 / 39) * 2).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 2).toString() + "%",
              }}
            ></div>
          </div>

          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p className="question">
              How do you believe economic growth (i.e., gross domestic product)
              will change, if at all, over the next 12 months in: <br />
              <span style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                A) the global economy?
              </span>
              <br />
              <span style={{ marginLeft: "2rem" }}>B) Kazakhstan economy?</span>
            </p>
            <i>
              <p
                className="question"
                style={{ margin: width <= 480 ? "1rem 0" : "" }}
              >
                PLEASE SELECT ONE RESPONSE PER EACH STATEMENT
              </p>
            </i>
          </div>
        </div>
        {width <= 768 ? (
          <div>
            <p className="question">
              <span style={{ fontWeight: "bold", color: "#dc3545" }}>
                Global&nbsp;
              </span>
              economic growth - next 12 months
            </p>
            <div className="left-align-text">
              {columns.map((col) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        type="radio"
                        name="A"
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
            <p className="question">
              <span style={{ fontWeight: "bold", color: "#dc3545" }}>
                Kazakhstan&nbsp;
              </span>
              economic growth - next 12 months
            </p>
            <div className="left-align-text">
              {columns.map((col) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        type="radio"
                        name="B"
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
          <Form>
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
                      <td className="left-align-text">{row.value}</td>

                      {columns.map((col) => {
                        return (
                          <td key={col.key} className="input-cell">
                            <label className="label-cell">
                              <input
                                name={row.key}
                                value={col.value}
                                type="radio"
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
          </Form>
        )}
      </div>
    </Route>
  );
}
