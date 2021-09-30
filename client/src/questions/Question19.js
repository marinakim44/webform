import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import ModalAlert from "../ModalAlert";
import "../App.css";
import axios from "axios";

export default function Question19() {
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
      value: "Modeled the cash tax’s impact on our company",
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
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q20");
    }
  }

  return (
    <BrowserRouter>
      <Route>
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link className="before-link" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="before-link" to="/eng-start">
                Credentials
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Q1</Breadcrumb.Item>
            <Breadcrumb.Item>Q2</Breadcrumb.Item>
            <Breadcrumb.Item>Q3</Breadcrumb.Item>
            <Breadcrumb.Item>Q4</Breadcrumb.Item>
            <Breadcrumb.Item>Q5</Breadcrumb.Item>
            <Breadcrumb.Item>Q6</Breadcrumb.Item>
            <Breadcrumb.Item>Q7</Breadcrumb.Item>
            <Breadcrumb.Item>Q8</Breadcrumb.Item>
            <Breadcrumb.Item>Q9</Breadcrumb.Item>
            <Breadcrumb.Item>Q10</Breadcrumb.Item>
            <Breadcrumb.Item>Q11</Breadcrumb.Item>
            <Breadcrumb.Item>Q12</Breadcrumb.Item>
            <Breadcrumb.Item>Q13</Breadcrumb.Item>
            <Breadcrumb.Item>Q14</Breadcrumb.Item>
            <Breadcrumb.Item>Q15</Breadcrumb.Item>
            <Breadcrumb.Item>Q16</Breadcrumb.Item>
            <Breadcrumb.Item>Q17</Breadcrumb.Item>
            <Breadcrumb.Item>Q18</Breadcrumb.Item>
            <Breadcrumb.Item active>Q19</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 20).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Q19. What actions has your company taken, if any, to prepare for
            potential global tax policy change that would make all countries
            commit to an effective corporate tax rate of at least 15%? (PLEASE
            SELECT ALL THAT APPLY)
          </p>
          <Form style={{ textAlign: "left" }}>
            {rows.map((row) => {
              return (
                <div key={row.key}>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      name={row.key}
                      label={row.value}
                      value={row.value}
                      onChange={handleChange}
                      disabled={none || dontknow ? true : false}
                    />
                  </Form.Group>
                </div>
              );
            })}
            <Form.Control
              type="text"
              placeholder="Other (please specify)"
              style={{ width: "45%" }}
              disabled={dontknow || none ? true : false}
              onChange={handleChangeOther}
            ></Form.Control>
            <Button
              variant={none ? "warning" : "light"}
              type="button"
              onClick={handleNone}
            >
              NONE
            </Button>
            <Button
              variant={dontknow ? "warning" : "light"}
              type="button"
              onClick={handleDontknow}
            >
              DON'T KNOW
            </Button>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="light"
                className="back-btn"
                onClick={() => history.goBack()}
              >
                Back
              </Button>

              <Button
                variant="danger"
                className="next-btn"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
