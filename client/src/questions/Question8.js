import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question8() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    if (!input) {
      handleShow();
    } else {
      localStorage.setItem("q8", input);

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
      };

      axios.post("/allinputs", data);

      history.push("/eng-q10a");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q8">
        <div className="main">
          <div className="sticky-sub-div">
            <h2 className="percent">
              {Math.round(((100 / 39) * 9).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 9).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />
            <p className="left-align-text">
              Has your company's approach to reducing greenhouse gas (GHG)
              emissions been independently assessed and validated (e.g., by
              SBTi)?
            </p>
            <p className="question">
              <i>PLEASE SELECT ONE RESPONSE</i>
            </p>
          </div>
          <form className="left-align-text">
            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="yes"
                  onClick={handleClick}
                />
                Yes, my company’s approach to reducing GHG emissions has been
                independently assessed and validated
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="yes"
                  onClick={handleClick}
                />
                No, but my company’s approach to reducing GHG emissions is
                currently being independently assessed and validated
              </label>
            </div>
            <div className="m-div">
              <label className="m-label radio-input">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="yes"
                  onClick={handleClick}
                />
                No, my company’s approach to reducing GHG emissions has not been
                independently assessed and validated
              </label>
            </div>

            <div className="m-div">
              <label className="m-label">
                <input
                  type="radio"
                  className="m-input radio-input"
                  name="option"
                  value="don't know"
                  onClick={handleClick}
                />
                Don't know
              </label>
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
