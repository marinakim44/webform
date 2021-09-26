import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question22 from "./Question22";
import Question24 from "./Question24";
import { Button, Breadcrumb, Table, Form, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import "../App.css";

export default function Question23() {
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q23", input);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q23">
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
            <Breadcrumb.Item active>Q23</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 24).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q23. How would you describe your company's typical forecasting
            accuracy regarding year-on-year revenue growth?
          </p>
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
                  <td></td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="Less or equal to 10% below actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="6-9% below actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="3-5% below actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="Forecast is within +-2% of actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="3-5% above actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="6-9% above actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="More or equal to 10% above actual"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="option"
                      value="Don't know"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/eng-q22">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q24">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q22">
          <Question22 />
        </Route>
        <Route path="/eng-q24">
          <Question24 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
