import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import { components, default as ReactSelect } from "react-select";
import ModalAlert from "../ModalAlert";
import Creatable from "react-select";
import "../App.css";
import { countries } from "../countries.js";
import { useState } from "react";
import axios from "axios";

const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 3 ? (
        props.children
      ) : (
        <div>Max 3 countries needed</div>
      )}
    </components.Menu>
  );
};

export default function Question2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const isValidNewOption = (inputValue, selectedValue) =>
    inputValue.length > 0 && selectedValue.length < 4;

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [other, setOther] = useState({
    other1: "",
    other2: "",
    other3: "",
  });
  const [isNone, setIsNone] = useState(false);
  const [isDontknow, setIsDontknow] = useState(false);

  function handleChange(selectedOption) {
    selectedOption.forEach((option) => {
      if (!selectedOptions.includes(option.label)) {
        selectedOptions.push(option.label);
      }
    });
    console.log(selectedOptions);
  }

  function handleOther(e) {
    const { name, value } = e.target;
    setOther((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleNone() {
    if (isDontknow) {
      setIsDontknow(false);
    }
    if (selectedOptions) {
      setSelectedOptions([]);
    }
    if (other) {
      setOther({
        other1: "",
        other2: "",
        other3: "",
      });
    }

    setIsNone(!isNone);

    if (isNone) {
      setSelectedOptions([]);
      setIsDontknow(false);
    }

    if (isNone || isDontknow) {
      setSelectedOptions([]);
    }

    console.log(isNone);
  }

  function handleDontknow() {
    if (isNone) {
      setIsNone(false);
    }
    if (selectedOptions) {
      setSelectedOptions([]);
    }
    if (other) {
      setOther({
        other1: "",
        other2: "",
        other3: "",
      });
    }

    setIsDontknow(!isDontknow);

    if (isDontknow) {
      setSelectedOptions([]);
      setIsNone(false);
    }

    if (isNone || isDontknow) {
      setSelectedOptions([]);
    }
    console.log(isDontknow);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      selectedOptions.length === 0 &&
      !isNone &&
      !isDontknow &&
      !other.other1 &&
      !other.other2 &&
      !other.other3
    ) {
      handleShow();
    } else {
      if (other.other1) {
        selectedOptions.push(other.other1);
      }
      if (other.other2) {
        selectedOptions.push(other.other2);
      }
      if (other.other3) {
        selectedOptions.push(other.other3);
      }

      localStorage.setItem("q2", JSON.stringify(selectedOptions));
      localStorage.setItem("q2-none", isNone);
      localStorage.setItem("q2-dontknow", isDontknow);
      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2none: localStorage.getItem("q2-none"),
        q2dontknow: localStorage.getItem("q2-dontknow"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q3");
    }
    console.log(selectedOptions, other, isNone, isDontknow);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q2">
        <div className="main" style={{ display: "block", overflow: "scroll" }}>
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
            <Breadcrumb.Item active>Q2</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 3).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p>
              Q2. Which three countries/territories, excluding the
              country/territory in which you are based, do you consider most
              important for your company’s prospects for revenue growth over the
              next 12 months?
            </p>
          </div>

          <Form>
            <div
              style={{
                width: "35%",
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              <Creatable
                isDisabled={isNone || isDontknow ? true : false}
                components={{ Menu }}
                isMulti
                isValidNewOption={isValidNewOption}
                options={countries}
                closeMenuOnSelect={false}
                placeholder="Please select 3 countries"
                onChange={handleChange}
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Other country 1 (please specify)"
              name="other1"
              value={other.other1}
              onChange={handleOther}
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
              disabled={isNone || isDontknow ? true : false}
            ></Form.Control>
            <Form.Control
              type="text"
              name="other2"
              value={other.other2}
              onChange={handleOther}
              placeholder="Other country 2 (please specify)"
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
              disabled={isNone || isDontknow ? true : false}
            ></Form.Control>
            <Form.Control
              type="text"
              name="other3"
              value={other.other3}
              onChange={handleOther}
              placeholder="Other country 3 (please specify)"
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
              disabled={isNone || isDontknow ? true : false}
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
                value="none"
                onClick={handleNone}
              >
                My company <strong>does not</strong> operate internationally
              </Button>
              <Button
                type="button"
                variant={isDontknow ? "warning" : "light"}
                style={{ width: "100%" }}
                value="Don't know"
                onClick={handleDontknow}
              >
                Don't know
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
          </Form>
        </div>
      </Route>
      {/* <Switch>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
      </Switch> */}
    </BrowserRouter>
  );
}
