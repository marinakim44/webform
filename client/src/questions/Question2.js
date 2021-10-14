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
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [country3, setCountry3] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q2-other")) {
      setOther(JSON.parse(localStorage.getItem("q2-other")));
    }
  }, []);

  // const isValidNewOption = (inputValue, selectedValue) =>
  //   inputValue.length > 0 && selectedValue.length < 4;

  function handleChange1(selectedOption) {
    // selectedOption.forEach((option) => {
    //   if (!selectedOptions.includes(option.label)) {
    //     selectedOptions.push(option.label);
    //   }
    // });
    // console.log(selectedOption);
    if (!selectedOptions.includes(selectedOption.label)) {
      setSelectedOptions((prev) => {
        return [...prev, selectedOption.label];
      });
    }
    setCountry1(selectedOption.label);
    setDontknow(false);
  }

  function handleChange2(selectedOption) {
    if (!selectedOptions.includes(selectedOption.label)) {
      setSelectedOptions((prev) => {
        return [...prev, selectedOption.label];
      });
    }
    setCountry2(selectedOption.label);
    setDontknow(false);
  }
  function handleChange3(selectedOption) {
    if (!selectedOptions.includes(selectedOption.label)) {
      setSelectedOptions((prev) => {
        return [...prev, selectedOption.label];
      });
    }
    setCountry3(selectedOption.label);
    setDontknow(false);
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
    setSelectedOptions((prev) => {
      return [...prev, country1, country2, country3];
    });

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

    // console.log(selectedOptions);

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

      axios
        .post("/allinputs", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Data posted");
          } else {
            console.log("Response status " + response.status);
          }
        })
        .catch((err) => console.log(err.response.data));

      history.push("/eng-q3");
    }
  };

  const stylesFalse = {
    border: "solid black 1px",
    backgroundColor: "white",
    color: "black",
  };
  const stylesTrue = {
    border: "none",
    backgroundColor: "#ffa929",
    color: "white",
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

        <Form style={{ width: "100%" }}>
          <Creatable
            components={{ Menu }}
            name="dropdown"
            options={countries}
            closeMenuOnSelect={true}
            placeholder="Please select country 1"
            onChange={handleChange1}
            className="select-countries"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Creatable
            components={{ Menu }}
            name="dropdown"
            options={countries}
            closeMenuOnSelect={true}
            placeholder="Please select country 2"
            onChange={handleChange2}
            className="select-countries"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Creatable
            components={{ Menu }}
            name="dropdown"
            options={countries}
            closeMenuOnSelect={true}
            placeholder="Please select country 3"
            onChange={handleChange3}
            className="select-countries"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Form.Control
            type="text"
            placeholder="Other 1 (please specify)"
            name="other1"
            value={other.other1}
            onChange={handleOther}
            className="input-text"
            // disabled={dontknow ? true : false}
            onBlur={handleBlurOther}
            onFocus={handleFocusOther}
            autoComplete="off"
          ></Form.Control>

          <div className="dontknow-div">
            <Button
              // variant={dontknow === true ? "warning" : "outline-dark"}
              style={dontknow === true ? stylesTrue : stylesFalse}
              type="button"
              // className="back-btn"
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
