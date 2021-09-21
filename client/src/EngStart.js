import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Question1 from "./questions/Question1";
import App from "./App";
import "./App.css";
import { Button, Breadcrumb, Form } from "react-bootstrap";

function EngStart() {
  return (
    <BrowserRouter>
      <Route path="/eng-start">
        <div className="main">
          <Breadcrumb className="nav-div">
            <Breadcrumb.Item>
              <Link className="before-link" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Credentials</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{ width: ((100 / 41) * 1).toString() + "%" }}
            ></div>
          </div>
          <Form>
            <Form.Group>
              <Form.Label style={{ marginBottom: "1rem" }}>
                <span>
                  Please specify the ID number provided in the invitaion email
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Specify ID number"
                style={{ width: "30%", margin: "auto auto" }}
              ></Form.Control>
            </Form.Group>

            <br></br>
            <div className="back-next-btns">
              <Link to="/">
                <Button variant="light" className="back-btn">
                  <i
                    class="fas fa-chevron-left"
                    style={{ color: "#000", marginRight: "10px" }}
                  ></i>
                  Back
                </Button>
              </Link>
              <Link to="/eng-q1">
                <Button variant="danger" className="next-btn">
                  Start
                  <i
                    class="fas fa-chevron-right"
                    style={{ color: "#fff", marginLeft: "10px" }}
                  ></i>
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/eng-q1">
          <Question1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default EngStart;
