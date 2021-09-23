import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "../App";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Responses() {
  const [output, setOutput] = useState([
    {
      name: "",
      email: "",
      title: "",
    },
  ]);

  useEffect(() => {
    // fetch("https://shielded-falls-89312.herokuapp.com/display")
    fetch("/display")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setOutput(jsonRes));
  }, [output]);

  function deleteRecords() {
    axios.delete("/delete");
  }

  return (
    <BrowserRouter>
      <Route path="/responses">
        <div className="main">
          <h1>Responses displayed</h1>
          <Table>
            <tbody>
              {output.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="back-next-btns">
            <Link to="/">
              <Button variant="success" style={{ width: "200px" }}>
                <i
                  class="fas fa-chevron-left"
                  style={{ color: "#fff", marginRight: "10px" }}
                ></i>
                Back home
              </Button>
            </Link>
            <Button
              variant="danger"
              onClick={deleteRecords}
              style={{ width: "200px" }}
            >
              Delete all
              <i
                class="fas fa-trash"
                style={{ color: "#fff", marginLeft: "10px" }}
              ></i>
            </Button>
          </div>
        </div>
      </Route>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
