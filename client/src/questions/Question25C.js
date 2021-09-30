import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Breadcrumb, Table, Form } from "react-bootstrap";
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
      key: "A",
      value: "A skilled, educated and adaptable workforce",
    },
    {
      key: "B",
      value: "Adequate digital and physical infrastructure",
    },
    {
      key: "C",
      value: "Reducing climate change and environmental damage",
    },
    {
      key: "D",
      value: "High levels of employment",
    },
    {
      key: "E",
      value: "An effective tax system",
    },
    {
      key: "F",
      value: "Greater income equality",
    },
    {
      key: "G",
      value: "The good health and well-being of the workforce",
    },
    {
      key: "H",
      value: "A diverse and inclusive workforce",
    },
    {
      key: "I",
      value: "Safeguards around usage of personal data",
    },
    {
      key: "J",
      value: "Predictable macroeconomic environment",
    },
    {
      key: "K",
      value: "Investment attractiveness of the country",
    },
    {
      key: "L",
      value: "Fighting against corruption and bribery",
    },
    {
      key: "M",
      value: "The supremacy of law in all spheres of state activity",
    },
    {
      key: "N",
      value: "Access to affordable capital",
    },
  ];

  const [input, setInput] = useState([]);

  function handleClick(e) {
    if (!input.includes(e.target.value)) {
      input.push(e.target.value);
    }
  }

  const [isNone, setIsNone] = useState(false);
  const [isDontknow, setIsDontknow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleNone(e) {
    e.preventDefault();
    if (isDontknow) {
      setIsDontknow(false);
    }
    if (input) {
      setInput([]);
    }
    setIsNone(!isNone);
    if (isNone) {
      if (isDontknow) {
        setIsDontknow(false);
      }
    }
    if (isNone || isDontknow) {
      setInput([]);
    }
  }

  function handleDontknow(e) {
    e.preventDefault();
    if (isNone) {
      setIsNone(false);
    }
    if (input) {
      setInput([]);
    }
    setIsDontknow(!isDontknow);

    if (isDontknow) {
      if (isNone) {
        setIsNone(false);
      }
    }
    if (isNone || isDontknow) {
      setInput([]);
    }
    setDisabled(!disabled);
    setChecked(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input.length === 0) {
      if (!isNone) {
        if (!isDontknow) {
          handleShow();
        } else {
          localStorage.setItem("q25c-none", isNone);
          localStorage.setItem("q25c-dontknow", isDontknow);
          localStorage.setItem("q25c", JSON.stringify(input));

          history.push("/eng-q26");

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
            q25b: JSON.parse(localStorage.getItem("q25b")),
            q25bNone: localStorage.getItem("q25b-none"),
            q25bDontknow: localStorage.getItem("q25b-dontknow"),
            q25c: JSON.parse(localStorage.getItem("q25c")),
            q25cNone: localStorage.getItem("q25c-none"),
            q25cDontknow: localStorage.getItem("q25c-dontknow"),
          };

          axios.post("/allinputs", data);
        }
      } else {
        localStorage.setItem("q25c-none", isNone);
        localStorage.setItem("q25c-dontknow", isDontknow);
        localStorage.setItem("q25c", JSON.stringify(input));

        history.push("/eng-q26");

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
          q25b: JSON.parse(localStorage.getItem("q25b")),
          q25bNone: localStorage.getItem("q25b-none"),
          q25bDontknow: localStorage.getItem("q25b-dontknow"),
          q25c: JSON.parse(localStorage.getItem("q25c")),
          q25cNone: localStorage.getItem("q25c-none"),
          q25cDontknow: localStorage.getItem("q25c-dontknow"),
        };

        axios.post("/allinputs", data);
      }
    } else {
      localStorage.setItem("q25c-none", isNone);
      localStorage.setItem("q25c-dontknow", isDontknow);
      localStorage.setItem("q25c", JSON.stringify(input));

      history.push("/eng-q26");

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
        q25b: JSON.parse(localStorage.getItem("q25b")),
        q25bNone: localStorage.getItem("q25b-none"),
        q25bDontknow: localStorage.getItem("q25b-dontknow"),
        q25c: JSON.parse(localStorage.getItem("q25c")),
        q25cNone: localStorage.getItem("q25c-none"),
        q25cDontknow: localStorage.getItem("q25c-dontknow"),
      };

      axios.post("/allinputs", data);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q25c">
        <div>
          <div className="sticky-sub-div">
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
              <Breadcrumb.Item>Q19</Breadcrumb.Item>
              <Breadcrumb.Item>Q20</Breadcrumb.Item>
              <Breadcrumb.Item>Q21</Breadcrumb.Item>
              <Breadcrumb.Item>Q22</Breadcrumb.Item>
              <Breadcrumb.Item>Q23</Breadcrumb.Item>
              <Breadcrumb.Item>Q24</Breadcrumb.Item>
              <Breadcrumb.Item>Q25</Breadcrumb.Item>
              <Breadcrumb.Item active>Q26</Breadcrumb.Item>
            </Breadcrumb>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 41) * 27).toString() + "%",
                }}
              ></div>
            </div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <div className="main">
            <p>
              Q25c. In order to achieve goals (if any) which of stated below,
              your company is interested in cooperation with government agencies
              in the next three years? (Select all that apply)
            </p>
            <Form>
              <div style={{ overflow: "auto", height: "320px" }}>
                <Table>
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "#fff",
                    }}
                  >
                    <tr style={{ position: "sticky", top: 0 }}>
                      <th
                        colSpan="2"
                        style={{ position: "sticky", top: 0, zIndex: 1 }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr>
                          <td>{row.key}</td>
                          <td>{row.value}</td>

                          <td>
                            <input
                              type="checkbox"
                              value={row.key}
                              onClick={handleClick}
                              disabled={isNone || isDontknow ? true : false}
                            ></input>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "35%",
                  marginTop: "2rem",
                }}
              >
                <Button
                  type="button"
                  variant={isNone ? "warning" : "light"}
                  style={{ marginRight: "2rem", width: "100%" }}
                  value="None of the above"
                  onClick={handleNone}
                >
                  NONE OF THE ABOVE
                </Button>
                <Button
                  type="button"
                  variant={isDontknow ? "warning" : "light"}
                  style={{ width: "100%" }}
                  value="Don't know"
                  onClick={handleDontknow}
                >
                  DON'T KNOW
                </Button>
              </div>
              <div className="back-next-btns">
                <Button
                  variant="light"
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
        </div>
      </Route>
    </BrowserRouter>
  );
}
