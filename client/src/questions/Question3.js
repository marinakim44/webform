import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Table, Button, Breadcrumb } from "react-bootstrap";
import "../App.css";
import ModalAlert from "../ModalAlert";
import { useState } from "react";
import axios from "axios";

export default function Question3() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [listOthers, setListOthers] = useState([]);
  const [listOfConcerns, setListOfConcerns] = useState([]);
  const [listAll, setListAll] = useState([]);

  function handleRadioButtonClick(e) {
    const { name, value } = e.target;
    if (
      value === "Moderately concerned" ||
      value === "Very concerned" ||
      value === "Extremely concerned"
    ) {
      if (!listOfConcerns.includes(name)) {
        listOfConcerns.push(name);
      }
    } else {
      if (!listOthers.includes(name)) {
        listOthers.push(name);
      }
    }
    if (!listAll.includes(name)) {
      listAll.push(name);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (listAll.length < 6) {
      handleShow();
    } else {
      localStorage.setItem("q3", JSON.stringify(listOfConcerns));

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
      };

      axios.post("/allinputs", data);

      if (listOfConcerns.length !== 0) {
        history.push("/eng-q4");
      } else {
        history.push("/eng-q5");
      }
    }
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
          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p>
              Q3. How concerned are you about the following global threats
              negatively impacting your company over the next 12 months?
              <br /> (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
            </p>
          </div>

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

            <Button
              variant="light"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              Back
            </Button>

            <Button
              type="button"
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
