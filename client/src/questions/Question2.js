import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Button, Form, Breadcrumb } from "react-bootstrap";
import { components, default as ReactSelect } from "react-select";
import makeAnimated from "react-select/animated";
import Creatable from "react-select";
import Question1 from "./Question1";
import Question3 from "./Question3";
import "../App.css";
import { countries } from "../countries.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { question2 } from "../actions";

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
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const isValidNewOption = (inputValue, selectedValue) =>
    inputValue.length > 0 && selectedValue.length < 4;

  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleChange(selectedOption) {
    selectedOption.forEach((option) => {
      if (!selectedOptions.includes(option.label)) {
        selectedOptions.push(option.label);
      }
    });
    console.log(selectedOptions);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(question2(selectedOptions));
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
              {/* <ReactSelect
                options={countries}
                components={animatedComponents}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                placeholder="Please select 3 countries..."
                onChange={handleChange}
              /> */}
              <Creatable
                components={(animatedComponents, { Menu })}
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
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
            ></Form.Control>

            <Form.Control
              type="text"
              placeholder="Other country 2 (please specify)"
              style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
            ></Form.Control>

            <Link to="/eng-q1">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-q3">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>
      <Switch>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
        <Route path="/eng-q3">
          <Question3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
