import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EngStart from "./EngStart";
import RusStart from "./RusStart";
import { Dropdown, Breadcrumb } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        {/* <div className="main"> */}
        {/* <Breadcrumb className="nav-div">
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>

          <div> */}
        {/* <h1>Test survey</h1> */}
        <iframe
          src="https://powerful-falls-19450.herokuapp.com/"
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
        {/* <p className="justify-align-text">
              This is a test survey covering:
              <ul>
                <li>API post, get and delete routes</li>
                <li>mongodb atlas connected</li>
                <li>secret data stored in process environments</li>
              </ul>
            </p> */}
        {/* </div> */}
        {/* <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              id="dropdown-basic"
              className="lng-btn"
            >
              Choose language
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/eng-start">
                  <div style={{ width: "100%" }}>English</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/rus-start">Russian</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        {/* </div> */}
      </Route>
      <Switch>
        <Route path="/eng-start">
          <EngStart />
        </Route>
        <Route path="/rus-start">
          <RusStart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
