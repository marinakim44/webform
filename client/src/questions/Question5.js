import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Table, Breadcrumb } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question5() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [input, setInput] = useState({
    carbonNeutral: "",
    netZero: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input.carbonNeutral !== "" && input.netZero !== "") {
      localStorage.setItem("q5-carbonNeutral", input.carbonNeutral);
      localStorage.setItem("q5-netZero", input.netZero);

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
      };

      axios.post("/allinputs", data);

      if (input.netZero === "yes") {
        history.push("/eng-q6");
      } else if (input.netZero === "no but") {
        history.push("/eng-q7");
      } else if (input.netZero === "no") {
        if (input.carbonNeutral === "yes") {
          history.push("/eng-q10a");
        } else if (input.carbonNeutral === "no but") {
          history.push("/eng-q10b");
        } else if (
          input.carbonNeutral === "dontKnow" ||
          input.carbonNeutral === "no"
        ) {
          history.push("/eng-q11");
        }
      } else if (input.netZero === "dontKnow") {
        if (input.carbonNeutral === "yes") {
          history.push("/eng-q10a");
        } else if (input.carbonNeutral === "no but") {
          history.push("/eng-q10b");
        } else if (input.carbonNeutral === "dontKnow") {
          history.push("/eng-q12");
        } else if (input.carbonNeutral === "no") {
          history.push("/eng-q11");
        }
      }
    } else {
      handleShow();
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q5">
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
            <Breadcrumb.Item active>Q5</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 6).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <p>
            Q5. Has your company made a: carbon-neutral commitment? net-zero
            commitment? (PLEASE SELECT ONE RESPONSE FOR EACH STATEMENT)
          </p>
          <form>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Yes, my company has made this commitment</th>
                  <th>
                    No, but my company is working toward making this commitment
                  </th>
                  <th>No, my company has not made this commitment</th>
                  <th>Don't know</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="left-align-text">
                    Carbon-neutral commitment Achieved when a company offsets
                    its greenhouse gas (GHG) emissions to zero (e.g., by
                    purchasing voluntary carbon credits)
                  </td>
                  <td>
                    <input
                      name="carbonNeutral"
                      value="yes"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="carbonNeutral"
                      value="no but"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="carbonNeutral"
                      value="no"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="carbonNeutral"
                      value="dontKnow"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    Net-zero commitment Achieved when a company reduces its
                    greenhouse gas (GHG) emissions to near zero and removes its
                    remaining unavoidable emissions
                  </td>
                  <td>
                    <input
                      name="netZero"
                      value="yes"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="netZero"
                      value="no but"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="netZero"
                      value="no"
                      type="radio"
                      onClick={handleClick}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="netZero"
                      value="dontKnow"
                      type="radio"
                      onClick={handleClick}
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
