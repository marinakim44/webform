import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ModalAlert from "../ModalAlert";
import "../App.css";
import "../Medium.css";
import axios from "axios";

export default function Question19() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "key1",
      value: "The global tax policy change is not applicable to our company",
    },
    {
      key: "key2",
      value:
        "Engaged tax specialists to advise our company on potential implications",
    },
    {
      key: "key3",
      value: "Modeled the cash tax’s impact on our company",
    },
    {
      key: "key4",
      value:
        "Conducted scenario planning regarding where our company will pay taxes",
    },
    {
      key: "key5",
      value: "Encouraged government officials to support the tax policy",
    },
    {
      key: "key6",
      value:
        "Recommended additional tax policy changes to government officials",
    },
  ];

  const [none, setNone] = useState(false);
  const [dontknow, setDontknow] = useState(false);
  const [input, setInput] = useState([]);
  const [checked, setChecked] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
  });
  const [disabled, setDisabled] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
  });
  const [other, setOther] = useState("");

  function clearAll() {
    setChecked((prev) => {
      return { ...prev, key1: false, key2: false, key3: false, key4: false };
    });
    setDisabled((prev) => {
      return { ...prev, key1: false, key2: false, key3: false, key4: false };
    });
    setInput([]);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });
    if (checked) {
      if (!input.includes(value)) {
        input.push(value);
      }
    }
  }

  function handleChangeOther(e) {
    setOther(e.target.value);
  }

  function handleNone() {
    if (dontknow) {
      setDontknow(false);
    }
    setNone(!none);

    if (none) {
      clearAll();
      setDontknow(false);
    }
  }

  function handleDontknow() {
    if (none) {
      setNone(false);
    }
    setDontknow(!dontknow);

    if (dontknow) {
      clearAll();
      setNone(false);
    }
  }

  function handleSubmit(e) {
    if (none || dontknow) {
      setChecked(false);
      setInput([]);
      setDontknow(false);
    }
    if (!none && !dontknow && input.length === 0 && !other) {
      handleShow();
    } else {
      localStorage.setItem("q19", JSON.stringify(input));
      localStorage.setItem("q19-none", none);
      localStorage.setItem("q19-dontknow", dontknow);
      localStorage.setItem("q19-other", other);

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
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q20");
    }
  }

  return (
    <Route>
      <div className="main" style={{ height: "100%" }}>
        <div className={width <= 768 ? "sticky-sub-div" : ""}>
          <h2 className="percent">
            {Math.round(((100 / 39) * 20).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 20).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            What actions has your company taken, if any, to prepare for
            potential global tax policy change that would make all countries
            commit to an effective corporate tax rate of at least 15%?
          </p>
          <p
            className="left-align-text"
            style={{ margin: width <= 480 ? "1rem 0" : "" }}
          >
            <i>PLEASE SELECT ALL THAT APPLY</i>
          </p>
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div className="m-div">
                  <label>
                    <input
                      style={{ marginRight: "8px" }}
                      type="checkbox"
                      name={row.key}
                      value={row.value}
                      onChange={handleChange}
                      disabled={none || dontknow ? true : false}
                    />
                    {row.value}
                  </label>
                </div>
              );
            })}
            <div style={{ width: "100%" }}>
              <Form.Control
                type="text"
                placeholder="Other (please specify)"
                disabled={dontknow || none ? true : false}
                onChange={handleChangeOther}
                className="input-text"
                style={{ marginTop: "2rem" }}
              ></Form.Control>
            </div>
            <div className="back-next-btns">
              <Button
                variant={none ? "warning" : "light"}
                type="button"
                onClick={handleNone}
                className="back-btn none-btn"
                style={{
                  margin: 0,
                  marginTop: "1rem",
                  height: width > 480 ? "60px" : "70px",
                }}
              >
                NONE OF THE ABOVE
              </Button>
              <Button
                variant={dontknow ? "warning" : "light"}
                type="button"
                onClick={handleDontknow}
                className="next-btn dontknow-btn"
                style={{
                  margin: 0,
                  marginTop: "1rem",
                  height: width > 480 ? "60px" : "70px",
                }}
              >
                DON'T KNOW
              </Button>
            </div>
            <div className="back-next-btns">
              <Button
                variant="secondary"
                className="back-btn"
                onClick={() => history.goBack()}
                style={{ marginTop: "1rem" }}
              >
                <i className="fas fa-chevron-left back-arrow"></i>
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
                style={{ marginTop: "1rem" }}
              >
                Next
                <i class="fas fa-chevron-right next-arrow"></i>
              </Button>
            </div>
          </div>
        ) : (
          <Form style={{ textAlign: "left" }}>
            {rows.map((row) => {
              return (
                <Form.Group key={row.key}>
                  <label>
                    <input
                      style={{ marginRight: "8px" }}
                      type="checkbox"
                      name={row.key}
                      value={row.value}
                      onChange={handleChange}
                      disabled={none || dontknow ? true : false}
                    />
                    {row.value}
                  </label>
                </Form.Group>
              );
            })}
            <Form.Control
              type="text"
              placeholder="Other (please specify)"
              style={{ width: "45%" }}
              disabled={dontknow || none ? true : false}
              onChange={handleChangeOther}
              style={{ margin: "1rem 0", width: "45%" }}
            ></Form.Control>
            <Button
              variant={none ? "warning" : "light"}
              type="button"
              onClick={handleNone}
              style={{ width: "15.5%", marginRight: "1rem" }}
            >
              NONE
            </Button>
            <Button
              variant={dontknow ? "warning" : "light"}
              type="button"
              onClick={handleDontknow}
              style={{ width: "15.5%", marginRight: "1rem" }}
            >
              DON'T KNOW
            </Button>
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
          </Form>
        )}
      </div>
    </Route>
  );
}
