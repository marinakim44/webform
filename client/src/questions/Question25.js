import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Breadcrumb, Table, Form } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question25() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState([]);
  const [isNone, setIsNone] = useState(false);
  const [isDontknow, setIsDontknow] = useState(false);
  const [other, setOther] = useState("");
  const [checkedA, setCheckedA] = useState(false);
  const [disabledA, setDisabledA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [disabledB, setDisabledB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [disabledC, setDisabledC] = useState(false);
  const [checkedD, setCheckedD] = useState(false);
  const [disabledD, setDisabledD] = useState(false);
  const [checkedE, setCheckedE] = useState(false);
  const [disabledE, setDisabledE] = useState(false);
  const [checkedF, setCheckedF] = useState(false);
  const [disabledF, setDisabledF] = useState(false);
  const [checkedG, setCheckedG] = useState(false);
  const [disabledG, setDisabledG] = useState(false);
  const [checkedH, setCheckedH] = useState(false);
  const [disabledH, setDisabledH] = useState(false);
  const [checkedI, setCheckedI] = useState(false);
  const [disabledI, setDisabledI] = useState(false);
  const [checkedJ, setCheckedJ] = useState(false);
  const [disabledJ, setDisabledJ] = useState(false);
  const [checkedK, setCheckedK] = useState(false);
  const [disabledK, setDisabledK] = useState(false);
  const [disabledL, setDisabledL] = useState(false);
  const [checkedL, setCheckedL] = useState(false);
  const [disabledM, setDisabledM] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [disabledN, setDisabledN] = useState(false);
  const [checkedN, setCheckedN] = useState(false);

  function handleA(e) {
    setCheckedA(!checkedA);

    if (disabledA) {
      if (input.includes(e.target.value)) {
        setInput(input.filter((e) => e !== e.target.value));
      }
    }

    if (checkedA) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedA(false);
        setDisabledA(true);
      }
    }
  }

  function handleB(e) {
    setCheckedB(!checkedB);

    if (checkedB) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedB(false);
        setDisabledB(true);
      }
    }
  }

  function handleC(e) {
    setCheckedC(!checkedC);

    if (checkedC) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedC(false);
        setDisabledC(true);
      }
    }
  }

  function handleD(e) {
    setCheckedD(!checkedD);

    if (checkedD) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedD(false);
        if (input.length < 3) {
          setDisabledD(false);
        }
      }
    }
  }

  function handleE(e) {
    setCheckedE(!checkedE);

    if (checkedE) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedE(false);
        setDisabledE(true);
      }
    }
  }

  function handleF(e) {
    setCheckedF(!checkedF);

    if (checkedF) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedF(false);
        setDisabledF(true);
      }
    }
  }

  function handleG(e) {
    setCheckedG(!checkedG);

    if (checkedG) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedG(false);
        setDisabledG(true);
      }
    }
  }

  function handleH(e) {
    setCheckedH(!checkedH);

    if (checkedH) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedH(false);
        setDisabledH(true);
      }
    }
  }

  function handleI(e) {
    setCheckedI(!checkedI);

    if (checkedI) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedI(false);
        setDisabledI(true);
      }
    }
  }

  function handleJ(e) {
    setCheckedJ(!checkedJ);

    if (checkedJ) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedJ(false);
        setDisabledJ(true);
      }
    }
  }

  function handleK(e) {
    setCheckedK(!checkedK);

    if (checkedK) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedK(false);
        setDisabledK(true);
      }
    }
  }

  function handleL(e) {
    setCheckedL(!checkedL);

    if (checkedL) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedL(false);
        setDisabledL(true);
      }
    }
  }

  function handleM(e) {
    setCheckedM(!checkedM);

    if (checkedM) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedM(false);
        setDisabledM(true);
      }
    }
  }

  function handleN(e) {
    setCheckedN(!checkedN);

    if (checkedN) {
      if (input.includes(e.target.value)) {
        input.pop(e.target.value);
      }
    } else {
      if (input.length < 3) {
        if (!input.includes(e.target.value)) {
          input.push(e.target.value);
        }
      } else {
        setCheckedN(false);
        setDisabledN(true);
      }
    }
  }

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
      setInput("");
    }

    setDisabledA(!disabledA);
    setDisabledB(!disabledB);
    setDisabledC(!disabledC);
    setDisabledD(!disabledD);
    setDisabledE(!disabledE);
    setDisabledF(!disabledF);
    setDisabledG(!disabledG);
    setDisabledH(!disabledH);
    setDisabledI(!disabledI);
    setDisabledJ(!disabledJ);
    setDisabledK(!disabledK);
    setDisabledL(!disabledL);
    setDisabledM(!disabledM);
    setDisabledN(!disabledN);
    if (checkedA) {
      setCheckedA(false);
    }
    if (checkedB) {
      setCheckedB(false);
    }
    if (checkedC) {
      setCheckedC(false);
    }
    if (checkedD) {
      setCheckedD(false);
    }
    if (checkedE) {
      setCheckedE(false);
    }
    if (checkedF) {
      setCheckedF(false);
    }
    if (checkedG) {
      setCheckedG(false);
    }
    if (checkedH) {
      setCheckedH(false);
    }
    if (checkedI) {
      setCheckedI(false);
    }
    if (checkedJ) {
      setCheckedJ(false);
    }
    if (checkedK) {
      setCheckedK(false);
    }
    if (checkedL) {
      setCheckedL(false);
    }
    if (checkedM) {
      setCheckedM(false);
    }
    if (checkedN) {
      setCheckedN(false);
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
      setInput("");
    }
    setDisabledA(!disabledA);
    setDisabledB(!disabledB);
    setDisabledC(!disabledC);
    setDisabledD(!disabledD);
    setDisabledE(!disabledE);
    setDisabledF(!disabledF);
    setDisabledG(!disabledG);
    setDisabledH(!disabledH);
    setDisabledI(!disabledI);
    setDisabledJ(!disabledJ);
    setDisabledK(!disabledK);
    setDisabledL(!disabledL);
    setDisabledM(!disabledM);
    setDisabledN(!disabledN);
    if (checkedA) {
      setCheckedA(false);
    }
    if (checkedB) {
      setCheckedB(false);
    }
    if (checkedC) {
      setCheckedC(false);
    }
    if (checkedD) {
      setCheckedD(false);
    }
    if (checkedE) {
      setCheckedE(false);
    }
    if (checkedF) {
      setCheckedF(false);
    }
    if (checkedG) {
      setCheckedG(false);
    }
    if (checkedH) {
      setCheckedH(false);
    }
    if (checkedI) {
      setCheckedI(false);
    }
    if (checkedJ) {
      setCheckedJ(false);
    }
    if (checkedK) {
      setCheckedK(false);
    }
    if (checkedL) {
      setCheckedL(false);
    }
    if (checkedM) {
      setCheckedM(false);
    }
    if (checkedN) {
      setCheckedN(false);
    }
  }

  function handleChange(e) {
    if (!isNone && !isDontknow) {
      setOther(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input.length === 0) {
      if (!isNone) {
        if (!isDontknow) {
          if (!other) {
            handleShow();
          }
        }
      }
    } else {
      localStorage.setItem("q25none", isNone);
      localStorage.setItem("q25dontknow", isDontknow);
      localStorage.setItem("q25", JSON.stringify(input));
      localStorage.setItem("q25-other", other);

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
      };

      axios.post("/allinputs", data);
      history.push("/eng-q25b");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q25">
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
            <Breadcrumb.Item>Q19</Breadcrumb.Item>
            <Breadcrumb.Item>Q20</Breadcrumb.Item>
            <Breadcrumb.Item>Q21</Breadcrumb.Item>
            <Breadcrumb.Item>Q22</Breadcrumb.Item>
            <Breadcrumb.Item>Q23</Breadcrumb.Item>
            <Breadcrumb.Item>Q24</Breadcrumb.Item>
            <Breadcrumb.Item active>Q25</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 26).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p>
            Q25. Which three of these outcomes do you think should be government
            priorities in Kazakhstan? <br />
            (PLEASE SELECT UP TO THREE RESPONSES ONLY)
          </p>
          <form>
            <div style={{ overflow: "auto", height: "320px" }}>
              <Table style={{ fontSize: "12px" }}>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>A skilled, educated and adaptable workforce</td>
                    <td>
                      <input
                        type="checkbox"
                        value="A"
                        onClick={handleA}
                        checked={checkedA}
                        disabled={disabledA}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Adequate physical and digital infrastructure</td>
                    <td>
                      <input
                        type="checkbox"
                        value="B"
                        onClick={handleB}
                        checked={checkedB}
                        disabled={disabledB}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>Reducing climate change and environmental damage</td>
                    <td>
                      <input
                        type="checkbox"
                        value="C"
                        onClick={handleC}
                        checked={checkedC}
                        disabled={disabledC}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>High levels of employment</td>
                    <td>
                      <input
                        type="checkbox"
                        value="D"
                        onClick={handleD}
                        checked={checkedD}
                        disabled={disabledD}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td>An effective tax system</td>
                    <td>
                      <input
                        type="checkbox"
                        value="E"
                        onClick={handleE}
                        checked={checkedE}
                        disabled={disabledE}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>Greater income equality</td>
                    <td>
                      <input
                        type="checkbox"
                        value="F"
                        onClick={handleF}
                        checked={checkedF}
                        disabled={disabledF}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>G</td>
                    <td>The good health and well-being of the workforce</td>
                    <td>
                      <input
                        type="checkbox"
                        value="G"
                        onClick={handleG}
                        checked={checkedG}
                        disabled={disabledG}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>H</td>
                    <td>A diverse and inclusive workforce</td>
                    <td>
                      <input
                        type="checkbox"
                        value="H"
                        onClick={handleH}
                        checked={checkedH}
                        disabled={disabledH}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>Safeguards around usage of personal data</td>
                    <td>
                      <input
                        type="checkbox"
                        value="I"
                        onClick={handleI}
                        checked={checkedI}
                        disabled={disabledI}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>J</td>
                    <td>Predictable macroeconomic environment</td>
                    <td>
                      <input
                        type="checkbox"
                        value="J"
                        onClick={handleJ}
                        checked={checkedJ}
                        disabled={disabledJ}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>K</td>
                    <td>Investment attractiveness of the country</td>
                    <td>
                      <input
                        type="checkbox"
                        value="K"
                        onClick={handleK}
                        checked={checkedK}
                        disabled={disabledK}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>Fighting against corruption and bribery</td>
                    <td>
                      <input
                        type="checkbox"
                        value="L"
                        onClick={handleL}
                        checked={checkedL}
                        disabled={disabledL}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>
                      The supremacy of law in all spheres of state activity
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        value="M"
                        onClick={handleM}
                        checked={checkedM}
                        disabled={disabledM}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>N</td>
                    <td>Access to affordable capital</td>
                    <td>
                      <input
                        type="checkbox"
                        value="N"
                        onClick={handleN}
                        checked={checkedN}
                        disabled={disabledN}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Form.Control
              type="text"
              placeholder="Other (please specify)"
              style={{ marginTop: "1rem" }}
              value={other}
              onChange={handleChange}
            ></Form.Control>
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
          </form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
