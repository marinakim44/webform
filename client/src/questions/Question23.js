import { Route, useHistory } from "react-router-dom";
import { Table, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";
import Buttons from "../Buttons";

export default function Question23({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q23")) {
      setInput(localStorage.getItem("q23"));
    }
    if (localStorage.getItem("q23-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q23-checked")));
    }
  }, []);
  const rows =
    lng === "English"
      ? [
          {
            key: "A",
            value: "≥10% below actual",
          },
          {
            key: "B",
            value: "6-9% below actual",
          },
          {
            key: "C",
            value: "3-5% below actual",
          },
          {
            key: "D",
            value: "Forecast is within ±2% of actual",
          },
          {
            key: "E",
            value: "3-5% above actual",
          },
          {
            key: "F",
            value: "6-9% above actual",
          },
          {
            key: "G",
            value: "≥10% above actual",
          },
          {
            key: "H",
            value: "Don't know",
          },
        ]
      : [
          {
            key: "A",
            value: "≥10% ниже фактического",
          },
          {
            key: "B",
            value: "6–9% ниже фактического",
          },
          {
            key: "C",
            value: "3-5% ниже фактического",
          },
          {
            key: "D",
            value: "Прогноз в пределах ±2% of от фактического",
          },
          {
            key: "E",
            value: "3-5% выше фактического",
          },
          {
            key: "F",
            value: "6-9% выше фактического",
          },
          {
            key: "G",
            value: "≥10% выше фактического",
          },
          {
            key: "H",
            value: "Затрудняюсь ответить",
          },
        ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
  });

  function handleClick(e) {
    const { value } = e.target;
    setInput(value);

    Object.keys(checked)
      .filter((v) => v === value)
      .map((v) => (checked[v] = true));
    Object.keys(checked)
      .filter((v) => v !== value)
      .map((v) => (checked[v] = false));
  }

  useEffect(() => {
    localStorage.setItem("q23", input);
    localStorage.setItem("q23-checked", JSON.stringify(checked));
  }, [input, checked]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      handleShow();
    } else {
      history.push("/eng-q24");

      const data = {
        uuid: localStorage.getItem("uuid"),
        date: localStorage.getItem("date"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
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
        q20: JSON.parse(localStorage.getItem("q20")),
        q21: JSON.parse(localStorage.getItem("q21")),
        q22: JSON.parse(localStorage.getItem("q22")),
        q23: localStorage.getItem("q23"),
      };

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status === 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Route path="/eng-q23">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 24).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
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
          {lng === "English" ? (
            <p className="left-align-text" style={{ marginBottom: "1rem" }}>
              How would you describe your company's typical forecasting accuracy
              regarding year-on-year revenue growth?
            </p>
          ) : (
            <p className="left-align-text" style={{ marginBottom: "1rem" }}>
              Как бы вы описали типичную точность прогнозов вашей компании
              относительно годового роста доходов?
            </p>
          )}
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div className="m-div" key={row.key}>
                  <label className="m-label">
                    <input
                      type="radio"
                      name="option"
                      value={row.key}
                      onChange={handleClick}
                      className="m-input"
                      checked={checked[`${row.key}`]}
                    ></input>
                    {row.value}
                  </label>
                </div>
              );
            })}
          </div>
        ) : (
          <Form>
            <Table bordered>
              <tbody>
                <tr style={{ color: "#db536a", fontWeight: "bold" }}>
                  <td colSpan="3">
                    {lng === "English"
                      ? "Forecast is below actual"
                      : "Прогноз ниже фактического"}
                  </td>
                  <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                    {lng === "English"
                      ? "Forecast is within ±2% of actual"
                      : "Прогноз в пределах ±2% of от фактического"}
                  </td>
                  <td colSpan="3">
                    {lng === "English"
                      ? "Forecast is above actual"
                      : "Прогноз выше фактического"}
                  </td>
                  <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                    {lng === "English" ? "Don't know" : "Затрудняюсь ответить"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {lng === "English"
                      ? "≥10% below actual"
                      : "≥10% ниже фактического"}
                  </td>
                  <td>
                    6-9%{" "}
                    {lng === "English" ? "below actual" : "ниже фактического"}
                  </td>
                  <td>
                    3-5%{" "}
                    {lng === "English" ? "below actual" : "ниже фактического"}
                  </td>

                  <td>
                    3-5%{" "}
                    {lng === "English" ? "above actual" : "выше фактического"}
                  </td>
                  <td>
                    6-9%{" "}
                    {lng === "English" ? "above actual" : "выше фактического"}
                  </td>
                  <td>
                    {lng === "English"
                      ? "≥10% above actual"
                      : "≥10% выше фактического"}
                  </td>
                </tr>

                <tr>
                  {rows.map((row) => {
                    return (
                      <td className="input-cell" key={row.key}>
                        <label className="label-cell">
                          <input
                            type="radio"
                            name="option"
                            value={row.key}
                            onChange={handleClick}
                            checked={checked[`${row.key}`]}
                          ></input>
                        </label>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
          </Form>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
