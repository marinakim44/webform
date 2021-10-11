import { Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { components } from "react-select";
import ModalAlert from "../ModalAlert";
import Creatable from "react-select";
import "../App.css";
import { countries } from "../countries.js";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-dropdown/style.css";

const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;

  return (
    <components.Menu {...props}>
      {optionSelectedLength < 3 ? (
        props.children
      ) : (
        <div>Maximum 3 countries needed</div>
      )}
    </components.Menu>
  );
};

export default function Question2() {
  const width = window.screen.width;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dontknow, setDontknow] = useState(false);
  const [other, setOther] = useState({
    other1: "",
    other2: "",
    other3: "",
  });
  const [active, setActive] = useState({
    dropdown: false,
    other1: false,
    other2: false,
    other3: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q2-other")) {
      setOther(JSON.parse(localStorage.getItem("q2-other")));
    }
  }, []);

  const isValidNewOption = (inputValue, selectedValue) =>
    inputValue.length > 0 && selectedValue.length < 4;

  function handleChange(selectedOption) {
    selectedOption.forEach((option) => {
      if (!selectedOptions.includes(option.label)) {
        selectedOptions.push(option.label);
      }
    });
    console.log(selectedOption);
  }

  const handleOther = (e) => {
    const { name, value } = e.target;
    setOther((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleDontknow = () => {
    setDontknow(!dontknow);
    if (dontknow === false) {
      setSelectedOptions([]);
      setOther({
        other1: "",
        other2: "",
        other3: "",
      });
    }
  };

  const handleBlurOther = (e) => {
    const { name } = e.target;

    setActive((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  };

  const handleBlur = (e) => {
    setActive((prev) => {
      return {
        ...prev,
        dropdown: false,
      };
    });
  };

  const handleFocusOther = (e) => {
    const { name } = e.target;

    setActive((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  };

  const handleFocus = (e) => {
    setActive((prev) => {
      return {
        ...prev,
        dropdown: true,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(other)
      .filter((x) => x[1] !== "")
      .map((x) => {
        if (!selectedOptions.includes(x[1])) {
          selectedOptions.push(x[1]);
        }
      });
    localStorage.setItem("q2", JSON.stringify(selectedOptions));
    localStorage.setItem("q2-dontknow", dontknow);
    localStorage.setItem("q2-other", JSON.stringify(other));

    console.log(selectedOptions);

    if (
      selectedOptions.length === 0 &&
      dontknow === false &&
      Object.entries(other).filter((x) => x[1] === "").length === 3
    ) {
      handleShow();
    } else {
      const data = {
        uuid: localStorage.getItem("uuid"),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
      };

      axios.post("/allinputs", data);

      history.push("/eng-q3");
    }
  };

  return (
    <Route path="/eng-q2">
      <div className="main">
        <div
          className={
            Object.entries(active).filter((el) => el[1] === true).length > 0 &&
            width <= 480
              ? ""
              : "sticky-sub-div"
          }
        >
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
              Which <strong>three countries/territories</strong>, excluding the
              country/territory in which you are based, do you consider most
              important for your company’s prospects for revenue growth over the
              next 12 months?
            </p>
          </div>
        </div>
        <Creatable
          isDisabled={dontknow ? true : false}
          components={{ Menu }}
          name="dropdown"
          isMulti
          isValidNewOption={isValidNewOption}
          options={countries}
          closeMenuOnSelect={false}
          placeholder="Please select 3 countries"
          onChange={handleChange}
          className="select-countries"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <Form style={{ width: "100%" }}>
          <Form.Control
            type="text"
            placeholder="Other 1 (please specify)"
            name="other1"
            value={other.other1}
            onChange={handleOther}
            className="input-text"
            disabled={dontknow ? true : false}
            onBlur={handleBlurOther}
            onFocus={handleFocusOther}
            autoComplete="off"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other2"
            value={other.other2}
            onChange={handleOther}
            placeholder="Other 2 (please specify)"
            className="input-text"
            disabled={dontknow ? true : false}
            onBlur={handleBlurOther}
            onFocus={handleFocusOther}
            autoComplete="off"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other3"
            value={other.other3}
            onChange={handleOther}
            placeholder="Other 3 (please specify)"
            className="input-text"
            disabled={dontknow ? true : false}
            onBlur={handleBlurOther}
            onFocus={handleFocusOther}
            autoComplete="off"
          ></Form.Control>
          <div className="dontknow-div">
            <Button
              variant={dontknow === true ? "warning" : "outline-dark"}
              type="button"
              className="back-btn"
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
