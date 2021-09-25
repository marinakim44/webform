import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Table, Button, Breadcrumb } from "react-bootstrap";
import Question2 from "./Question2";
import Question4 from "./Question4";
import Question5 from "./Question5";
import "../App.css";
import { useState } from "react";

export default function Question3() {
  const [concern, setConcern] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  const [listOfConcerns, setListOfConcerns] = useState([]);

  function handleRadioButtonClick(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setConcern((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
      listOfConcerns.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q3", JSON.stringify(listOfConcerns));
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q3">
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
            <Breadcrumb.Item active>Q3</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 4).toString() + "%",
              }}
            ></div>
          </div>
          <p>
            Q3. How concerned are you about the following global threats
            negatively impacting your company over the next 12 months?
            <br /> (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Not concerned</th>
                  <th>Slightly concerned</th>
                  <th>Moderately concerned</th>
                  <th>Very concerned</th>
                  <th>Extremely concerned</th>
                  <th>Don't know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="left-align-text">
                    A) Macroeconomic volatility
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Macroeconomic volatility"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">B) Climate change</td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Climate change"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">C) Social inequality</td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Social inequality"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">D) Geopolitical conflict</td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Geopolitical conflict"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">E) Cyber risks</td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Cyber risks"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">F) Health risks</td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Not concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Slightly concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Moderately concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Very concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Extremely concerned"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="Health risks"
                      value="Don't know"
                      onClick={handleRadioButtonClick}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Link to="/eng-q2">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              type="button"
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to={listOfConcerns.length === 0 ? "/eng-q5" : "/eng-q4"}>
                Next
              </Link>
            </Button>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q2">
          <Question2 />
        </Route>
        <Route path="/eng-q4">
          <Question4 />
        </Route>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
