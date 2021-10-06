import { Navbar, Container } from "react-bootstrap";
import logo from "./logo.png";
import "./App.css";
import "./Medium.css";
import "./Small.css";

export default function Nav() {
  return (
    <Navbar className="nav-bar" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="PwC logo white png"
          />
        </Navbar.Brand>
        <Navbar.Text className="nav-bar-text" style={{ color: "white" }}>
          25th Annual Global CEO Survey Questionnaire
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}