import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { components } from "react-select";
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
  const width = window.screen.width;
  window.onload = function () {
    window.scrollTo(0, 0);
  };
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

  function handleDontknow() {
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
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      selectedOptions.length === 0 &&
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

        q2dontknow: localStorage.getItem("q2-dontknow"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q3");
    }
  }

  return (
    <Route path="/eng-q2">
      <div className="main">
        <div className={width <= 768 ? "sticky-sub-div" : ""}>
          <h2 className="percent">
            {Math.round(((100 / 39) * 3).toString())}% completed
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 3).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          <div className="left-align-text">
            <p className="question">
              Which three countries/territories, excluding the country/territory
              in which you are based, do you consider most important for your
              company’s prospects for revenue growth over the next 12 months?
            </p>
          </div>
        </div>

        <Form style={{ width: "100%" }}>
          <Creatable
            isDisabled={isDontknow ? true : false}
            components={{ Menu }}
            isMulti
            isValidNewOption={isValidNewOption}
            options={countries}
            closeMenuOnSelect={false}
            placeholder="Please select 3 countries"
            onChange={handleChange}
            className="select-countries"
          />

          <Form.Control
            type="text"
            placeholder="Other country 1 (please specify)"
            name="other1"
            value={other.other1}
            onChange={handleOther}
            disabled={isDontknow ? true : false}
            className="input-text"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other2"
            value={other.other2}
            onChange={handleOther}
            placeholder="Other country 2 (please specify)"
            disabled={isDontknow ? true : false}
            className="input-text"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other3"
            value={other.other3}
            onChange={handleOther}
            placeholder="Other country 3 (please specify)"
            className="input-text"
            disabled={isDontknow ? true : false}
          ></Form.Control>
          <div className="dontknow-div">
            <Button
              type="button"
              variant={isDontknow ? "warning" : "light"}
              className="back-btn"
              style={{ margin: 0 }}
              value="Don't know"
              onClick={handleDontknow}
              className="dontknow-btn"
            >
              Don't know
            </Button>
          </div>
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
        </Form>
      </div>
    </Route>
  );
}
