import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Breadcrumb, Table } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question18() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const rows = [
    {
      key: "A",
      value:
        "My company is increasingly concerned about the reputational risks associated with the amount of taxes it pays",
    },
    {
      key: "B",
      value: "My company aims to minimise the amount of taxes it pays",
    },
    {
      key: "C",
      value:
        "My company effectively communicates to the public all the taxes it pays (e.g., income, payroll, property)",
    },
    {
      key: "D",
      value: "My company’s board regularly reviews its tax strategy",
    },
  ];

  const columns = [
    {
      key: 1,
      value: "Strongly disagree",
    },
    {
      key: 2,
      value: "Moderately disagree",
    },
    {
      key: 3,
      value: "Slightly disagree",
    },
    {
      key: 4,
      value: "Neither agree nor disagree",
    },
    {
      key: 5,
      value: "Slightly agree",
    },
    {
      key: 6,
      value: "Moderately agree",
    },
    {
      key: 7,
      value: "Strongly agree",
    },
    {
      key: 8,
      value: "Don't know",
    },
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [checked, setChecked] = useState([]);

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (!checked.includes(name)) {
      checked.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checked.length < 4) {
      handleShow();
    } else {
      localStorage.setItem("q18", JSON.stringify(input));

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
      };

      axios.post("/allinputs", data);

      history.push("/eng-q19");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q18">
        <div className="main">
          <h2 style={{ textAlign: "left" }}>
            {Math.round(((100 / 39) * 19).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 19).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p className="left-align-text">
            Thinking about the taxes your company pays, to what extent do you
            agree/disagree with the following statements?
            <br /> (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan="2"></td>

                  {columns.map((col) => {
                    return (
                      <td style={{ width: "110px", verticalAlign: "middle" }}>
                        <strong>{col.value}</strong>
                      </td>
                    );
                  })}
                </tr>
                {rows.map((row) => {
                  return (
                    <tr className="table-row">
                      <td>{row.key}</td>
                      <td className="left-align-text">{row.value}</td>
                      {columns.map((col) => {
                        return (
                          <td className="input-cell">
                            <label className="label-cell">
                              <input
                                type="radio"
                                name={row.key}
                                value={col.value}
                                onClick={handleClick}
                              ></input>
                            </label>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
          </form>
        </div>
      </Route>
    </BrowserRouter>
  );
}
