import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Question2 from "./Question2";
import Question4 from "./Question4";
import Question5 from "./Question5";
import "../App.css";
import { useState } from "react";

export default function Question3() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  const [f, setF] = useState(false);

  const listOfConcerns = [];

  function handleA(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setA(true);
      listOfConcerns.push("a");
    } else {
      setA(false);
    }
  }

  function handleB(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setB(true);
      listOfConcerns.push("b");
    } else {
      setB(false);
    }
  }

  function handleC(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setC(true);
      listOfConcerns.push("c");
    } else {
      setC(false);
    }
  }

  function handleD(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setD(true);
      listOfConcerns.push("d");
    } else {
      setD(false);
    }
  }

  function handleE(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setE(true);
      listOfConcerns.push("e");
    } else {
      setE(false);
    }
  }

  function handleF(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      setF(true);
      listOfConcerns.push("f");
    } else {
      setF(false);
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q3">
        <div className="main">
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
                      type="checkbox"
                      name="notA"
                      value="Not concerned"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyA"
                      value="Slightly concerned"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyA"
                      value="Moderately concerned"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryA"
                      value="Very concerned"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyA"
                      value="Extremely concerned"
                      onClick={handleA}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowA"
                      value="Don't know"
                      onClick={handleA}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">B) Climate change</td>
                  <td>
                    <input
                      type="checkbox"
                      name="notB"
                      value="Not concerned"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyB"
                      value="Slightly concerned"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyB"
                      value="Moderately concerned"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryB"
                      value="Very concerned"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyB"
                      value="Extremely concerned"
                      onClick={handleB}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowB"
                      value="Don't know"
                      onClick={handleB}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">C) Social inequality</td>
                  <td>
                    <input
                      type="checkbox"
                      name="notC"
                      value="Not concerned"
                      onClick={handleC}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyC"
                      value="Slightly concerned"
                      onClick={handleC}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyC"
                      value="Moderately concerned"
                      onClick={handleC}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryC"
                      value="Very concerned"
                      onClick={handleC}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyC"
                      value="Extremely concerned"
                      onClick={handleC}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowC"
                      value="Don't know"
                      onClick={handleC}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">D) Geopolitical conflict</td>
                  <td>
                    <input
                      type="checkbox"
                      name="notD"
                      value="Not concerned"
                      onClick={handleD}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyD"
                      value="Slightly concerned"
                      onClick={handleD}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyD"
                      value="Moderately concerned"
                      onClick={handleD}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryD"
                      value="Very concerned"
                      onClick={handleD}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyD"
                      value="Extremely concerned"
                      onClick={handleD}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowD"
                      value="Don't know"
                      onClick={handleD}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">E) Cyber risks</td>
                  <td>
                    <input
                      type="checkbox"
                      name="notE"
                      value="Not concerned"
                      onClick={handleE}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyE"
                      value="Slightly concerned"
                      onClick={handleE}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyE"
                      value="Moderately concerned"
                      onClick={handleE}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryE"
                      value="Very concerned"
                      onClick={handleE}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyE"
                      value="Extremely concerned"
                      onClick={handleE}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowE"
                      value="Don't know"
                      onClick={handleE}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="left-align-text">F) Healthh risks</td>
                  <td>
                    <input
                      type="checkbox"
                      name="notF"
                      value="Not concerned"
                      onClick={handleF}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="slightlyF"
                      value="Slightly concerned"
                      onClick={handleF}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="moderatelyF"
                      value="Moderately concerned"
                      onClick={handleF}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="veryF"
                      value="Very concerned"
                      onClick={handleF}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="extremelyF"
                      value="Extremely concerned"
                      onClick={handleF}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="dontknowF"
                      value="Don't know"
                      onClick={handleF}
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

            <Link to={a || b || c || d || e || f ? "/eng-q4" : "/eng-q5"}>
              <Button variant="danger" className="next-btn">
                Next
              </Button>
            </Link>
          </form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q2">
          <Question2 />
        </Route>
        <Route path="/eng-q4">
          <Question4
            a={a}
            b={b}
            c={c}
            d={d}
            e={e}
            f={f}
            list={listOfConcerns}
          />
        </Route>
        <Route path="/eng-q5">
          <Question5 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
