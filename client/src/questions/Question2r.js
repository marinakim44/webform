import { Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { components } from "react-select";
import ModalAlert from "../ModalAlert";
import Creatable from "react-select";
import "../App.css";
import { countriesRus } from "../countriesRus.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;

  return (
    <components.Menu {...props}>
      {optionSelectedLength < 3 ? (
        props.children
      ) : (
        <div>Можно выбрать максимум 3 страны</div>
      )}
    </components.Menu>
  );
};

export default function Question2r() {
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

    console.log(selectedOptions);
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

      history.push("/rus-q3");
    }
  };

  return (
    <Route path="/rus-q2">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 3).toString())}% завершено
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
              Какие три страны, за исключением страны, в которой вы находитесь,
              вы считаете наиболее важными для перспектив роста доходов вашей
              компании в следующие 12 месяцев?
            </p>
          </div>
        </div>

        <Form style={{ width: "100%" }}>
          <Creatable
            isDisabled={dontknow ? true : false}
            components={{ Menu }}
            isMulti
            isValidNewOption={isValidNewOption}
            options={countriesRus}
            closeMenuOnSelect={false}
            placeholder="Пожалуйста, выберите 3 страны"
            onChange={handleChange}
            className="select-countries"
          />

          <Form.Control
            type="text"
            placeholder="Другое 1 (пожалуйста, укажите)"
            name="other1"
            value={other.other1}
            onChange={handleOther}
            disabled={dontknow ? true : false}
            className="input-text"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other2"
            value={other.other2}
            onChange={handleOther}
            placeholder="Другое 2 (пожалуйста, укажите)"
            disabled={dontknow ? true : false}
            className="input-text"
          ></Form.Control>
          <Form.Control
            type="text"
            name="other3"
            value={other.other3}
            onChange={handleOther}
            placeholder="Другое 3 (пожалуйста, укажите)"
            className="input-text"
            disabled={dontknow ? true : false}
          ></Form.Control>
          <div className="dontknow-div">
            <Button
              type="button"
              variant={dontknow ? "warning" : "outline-dark"}
              className={width <= 480 ? "dontknow-btn" : "back-btn"}
              style={{ margin: 0 }}
              value="Don't know"
              onClick={handleDontknow}
              className="dontknow-btn"
            >
              Не знаю
            </Button>
          </div>
          <div className="back-next-btns">
            <Button
              variant="secondary"
              className="back-btn"
              onClick={() => history.goBack()}
            >
              <i className="fas fa-chevron-left back-arrow"></i>
              Назад
            </Button>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              Далее
              <i class="fas fa-chevron-right next-arrow"></i>
            </Button>
          </div>
        </Form>
      </div>
    </Route>
  );
}
