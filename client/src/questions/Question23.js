import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Table, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question23() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const rows = [
    "<= 10% below actual",
    "6-9% below actual",
    "3-5% below actual",
    "Forecast is within +-2% of actual",
    "3-5% above actual",
    "6-9% above actual",
    ">= 10% above actual",
    "Don't know",
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      localStorage.setItem("q23", input);
      history.push("/eng-q24");

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
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q23">
        <div className="main">
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
            <h2 className="percent">
              {Math.round(((100 / 39) * 24).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 24).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              How would you describe your company's typical forecasting accuracy
              regarding year-on-year revenue growth?
            </p>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {rows.map((row) => {
                return (
                  <div className="m-div">
                    <label className="m-label">
                      <input
                        type="radio"
                        name="option"
                        value={row}
                        onClick={handleClick}
                        className="m-input"
                      ></input>
                      {row}
                    </label>
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
            <Form>
              <Table bordered>
                <tbody>
                  <tr style={{ color: "#dc3545", fontWeight: "bold" }}>
                    <td colSpan="3">Forecast is below actual</td>
                    <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                      Forecast is within +-2% of actual
                    </td>
                    <td colSpan="3">Forecast is below actual</td>
                    <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                      Don't know
                    </td>
                  </tr>
                  <tr>
                    <td>Less or equal to 10% below actual</td>
                    <td>6-9% below actual</td>
                    <td>3-5% below actual</td>

                    <td>3-5% above actual</td>
                    <td>6-9% above actual</td>
                    <td>More or equal to 10% above actual</td>
                  </tr>

                  <tr>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="Less or equal to 10% below actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="6-9% below actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="3-5% below actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="Forecast is within +-2% of actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="3-5% above actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="6-9% above actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="More or equal to 10% above actual"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                    <td className="input-cell">
                      <label className="label-cell">
                        <input
                          type="radio"
                          name="option"
                          value="Don't know"
                          onClick={handleClick}
                        ></input>
                      </label>
                    </td>
                  </tr>
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
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}
