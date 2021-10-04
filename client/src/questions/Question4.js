import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import ModalAlert from "../ModalAlert";

export default function Question4() {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const concerns = JSON.parse(localStorage.getItem("q3-concerns"));
  const rows = [
    {
      key: "1",
      value:
        "...develop products/services (including sourcing and procuring materials/inputs, manufacturing)",
    },
    {
      key: "2",
      value:
        "...sell products/services (including sales and marketing, distribution, public relations)",
    },
    {
      key: "3",
      value:
        "...raise capital (including cost of capital, sources of funding, reporting and compliance)",
    },
    {
      key: "4",
      value:
        "...attract and retain key skills/talent (including reputation, rewards and benefits, culture)",
    },
    {
      key: "5",
      value:
        "...innovate through technology or processes (including research and development, collaboration, creativity)",
    },
  ];

  const [other, setOther] = useState("");
  const [input, setInput] = useState([]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);

  function handleClick(e) {
    const { name, value } = e.target;

    if (name === "Macroeconomic volatility") {
      setChecked1(!checked1);
      console.log(checked1);
      if (setChecked1) {
        if (!input.includes(`Macroeconomic volatility: ${value}`))
          input.push(`Macroeconomic volatility: ${value}`);
      } else {
        if (input.includes(`Macroeconomic volatility: ${value}`))
          input.pop(`Macroeconomic volatility: ${value}`);
      }
      console.log(input);
    }
    if (name === "Climate change") {
      setChecked2(!checked2);
      if (setChecked2) {
        input.push(`Climate change: ${value}`);
      }
    }
    if (name === "Social inequality") {
      setChecked3(!checked3);
      if (setChecked3) {
        input.push(`Social inequality: ${value}`);
      }
    }
    if (name === "Geopolitical conflict") {
      setChecked4(!checked4);
      if (setChecked4) {
        input.push(`Climate change: ${value}`);
      }
    }
    if (name === "Cyber risks") {
      setChecked5(!checked5);
      if (setChecked5) {
        input.push(`Cyber risks: ${value}`);
      }
    }
    if (name === "Health risks") {
      setChecked6(!checked6);
      if (setChecked6) {
        input.push(`Health risks: ${value}`);
      }
    }
  }

  function handleChange(e) {
    setOther(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input.length === 0 && !other) {
      handleShow();
    } else {
      localStorage.setItem("q4", JSON.stringify(input));
      localStorage.setItem("q4-other", other);

      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1a: localStorage.getItem("q1a"),
        q1b: localStorage.getItem("q1b"),
        q2: JSON.parse(localStorage.getItem("countries")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4")),
        q4other: localStorage.getItem("q4-other"),
      };

      axios.post("/allinputs", data);
      history.push("/eng-q5");
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q4">
        <div className="main" style={{ height: "100%" }}>
          <div className={width <= 768 ? "sticky-sub-div" : ""}>
            <h2 className="percent">
              {Math.round(((100 / 39) * 5).toString())}% completed
            </h2>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 39) * 5).toString() + "%",
                }}
              ></div>
            </div>
            <ModalAlert show={show} close={handleClose} />

            <div className="left-align-text">
              <span>
                How do you anticipate your company could be impacted by the
                following threat(s) over the next 12 months?
                <i>
                  <p
                    className="question"
                    style={{ margin: width <= 480 ? "1rem 0" : "" }}
                  >
                    PLEASE SELECT UP TO THREE RESPONSES PER EACH STATEMENT
                  </p>
                </i>
              </span>
            </div>
          </div>
          {width <= 768 ? (
            <div className="left-align-text">
              {concerns.map((concern) => {
                return (
                  <div>
                    <p className="question">
                      <strong>{concern}</strong>
                    </p>
                    {rows.map((row) => {
                      return (
                        <div className="m-div">
                          <label className="m-label">
                            <input
                              type="checkbox"
                              className="m-input"
                              name={concern}
                              value={row.key}
                              onClick={handleClick}
                            ></input>
                            {row.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <Form.Group>
                <Form.Control
                  placeholder="Other (please specify)"
                  onChange={handleChange}
                  value={other}
                  className="input-text"
                ></Form.Control>
              </Form.Group>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i
                    className="fas fa-chevron-left"
                    style={{ color: "#fff", marginRight: "8px" }}
                  ></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i
                    className="fas fa-chevron-right"
                    style={{ color: "#fff", marginLeft: "8px" }}
                  ></i>
                </Button>
              </div>
            </div>
          ) : (
            <Form>
              <table className="table">
                <tbody>
                  <tr>
                    <th></th>
                    {concerns.map((concern) => {
                      return (
                        <th>
                          <span>{concern}</span>
                        </th>
                      );
                    })}
                  </tr>
                  {rows.map((row) => {
                    return (
                      <tr className="table-row">
                        <td className="left-align-text">{row.value}</td>
                        {concerns.map((concern) => {
                          return (
                            <td className="input-cell">
                              <label className="label-cell">
                                <input
                                  type="checkbox"
                                  name={concern}
                                  value={row.key}
                                  onClick={handleClick}
                                ></input>
                              </label>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <Form.Group>
                <Form.Control
                  placeholder="Other (please specify)"
                  style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
                  onChange={handleChange}
                  value={other}
                ></Form.Control>
              </Form.Group>
              <div className="back-next-btns">
                <Button
                  variant="secondary"
                  className="back-btn"
                  onClick={() => history.goBack()}
                >
                  <i
                    className="fas fa-chevron-left"
                    style={{ color: "#fff", marginRight: "8px" }}
                  ></i>
                  Back
                </Button>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  Next
                  <i
                    className="fas fa-chevron-right"
                    style={{ color: "#fff", marginLeft: "8px" }}
                  ></i>
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Route>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Route, useHistory } from "react-router-dom";
// import { Button, Form } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import "../App.css";
// import "../Medium.css";
// import axios from "axios";
// import ModalAlert from "../ModalAlert";

// export default function Question4() {
//   const width = window.screen.width;
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const history = useHistory();
//   const concerns = JSON.parse(localStorage.getItem("q3-concerns"));
//   const rows = [
//     {
//       key: "1",
//       value:
//         "...develop products/services (including sourcing and procuring materials/inputs, manufacturing)",
//     },
//     {
//       key: "2",
//       value:
//         "...sell products/services (including sales and marketing, distribution, public relations)",
//     },
//     {
//       key: "3",
//       value:
//         "...raise capital (including cost of capital, sources of funding, reporting and compliance)",
//     },
//     {
//       key: "4",
//       value:
//         "...attract and retain key skills/talent (including reputation, rewards and benefits, culture)",
//     },
//     {
//       key: "5",
//       value:
//         "...innovate through technology or processes (including research and development, collaboration, creativity)",
//     },
//   ];

//   const [input, setInput] = useState({
//     A: [],
//     B: [],
//     C: [],
//     D: [],
//     E: [],
//     F: [],
//   });
//   const [checked, setChecked] = useState({
//     A: false,
//     B: false,
//     C: false,
//     D: false,
//     E: false,
//     F: false,
//   });
//   const [disabled, setDisabled] = useState({
//     A: false,
//     B: false,
//     C: false,
//     D: false,
//     E: false,
//     F: false,
//   });

//   const handleClick = (e) => {
//     const { name, value } = e.target;
//     const slicedName = name.slice(0, 1);

//     setChecked((prev) => {
//       return {
//         ...prev,
//         [slicedName]: !checked[slicedName],
//       };
//     });

//     if (checked[slicedName]) {
//       if (input[slicedName].includes(`${slicedName}: ${value}`)) {
//         input[slicedName].pop(`${slicedName}: ${value}`);
//       }
//     } else {
//       if (input[slicedName].length < 3) {
//         if (!input[slicedName].includes(`${slicedName}: ${value}`)) {
//           input[slicedName].push(`${slicedName}: ${value}`);
//         }
//       } else {
//         setChecked((prev) => {
//           return {
//             ...prev,
//           };
//         });
//         setDisabled(true);
//       }
//     }

//     console.log(input, checked);
//   };

//   return (
//     <BrowserRouter>
//       <Route path="/eng-q4">
//         <div className="main">
//           <div className="sticky-sub-div">
//             <h2 className="percent">
//               {Math.round(((100 / 39) * 5).toString())}% completed
//             </h2>
//             <div className="progressBarEmpty">
//               <div
//                 className="progressBarFilled"
//                 style={{
//                   width: ((100 / 39) * 5).toString() + "%",
//                 }}
//               ></div>
//             </div>
//             <ModalAlert show={show} close={handleClose} />
//             <div className="left-align-text">
//               <span>
//                 How do you anticipate your company could be impacted by the
//                 following threat(s) over the next 12 months?
//                 <i>
//                   <p
//                     className="question"
//                     style={{ margin: width <= 480 ? "1rem 0" : "" }}
//                   >
//                     PLEASE SELECT UP TO THREE RESPONSES PER EACH STATEMENT
//                   </p>
//                 </i>
//               </span>
//             </div>
//           </div>
//           {width <= 768 ? (
//             <div className="left-align-text">
//               {concerns.map((concern) => {
//                 return (
//                   <div>
//                     <p className="question">
//                       <strong>{concern}</strong>
//                     </p>
//                     {rows.map((row) => {
//                       return (
//                         <div className="m-div">
//                           <label className="m-label">
//                             <input
//                               type="checkbox"
//                               className="m-input"
//                               name={concern}
//                               value={row.key}
//                               onChange={handleClick}
//                             ></input>
//                             {row.value}
//                           </label>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               })}
//               <Form.Group>
//                 <Form.Control
//                   placeholder="Other (please specify)"
//                   // onChange={handleChange}
//                   // value={other}
//                   className="input-text"
//                 ></Form.Control>
//               </Form.Group>
//               <div className="back-next-btns">
//                 <Button
//                   variant="secondary"
//                   className="back-btn"
//                   onClick={() => history.goBack()}
//                 >
//                   <i
//                     className="fas fa-chevron-left"
//                     style={{ color: "#fff", marginRight: "8px" }}
//                   ></i>
//                   Back
//                 </Button>

//                 <Button
//                   variant="danger"
//                   className="next-btn"
//                   // onClick={handleSubmit}
//                 >
//                   Next
//                   <i
//                     className="fas fa-chevron-right"
//                     style={{ color: "#fff", marginLeft: "8px" }}
//                   ></i>
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <Form>
//               <table className="table">
//                 <tbody>
//                   <tr>
//                     <th></th>
//                     {concerns.map((concern) => {
//                       return (
//                         <th>
//                           <span>{concern.slice(2)}</span>
//                         </th>
//                       );
//                     })}
//                   </tr>
//                   {rows.map((row) => {
//                     return (
//                       <tr className="table-row">
//                         <td className="left-align-text">{row.value}</td>
//                         {concerns.map((concern) => {
//                           return (
//                             <td className="input-cell">
//                               <label className="label-cell">
//                                 <input
//                                   type="checkbox"
//                                   name={concern}
//                                   value={row.key}
//                                   onChange={handleClick}
//                                   disabled={
//                                     disabled[concern.slice(1, 2)] ? true : false
//                                   }
//                                 ></input>
//                               </label>
//                             </td>
//                           );
//                         })}
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>

//               <Form.Group>
//                 <Form.Control
//                   placeholder="Other (please specify)"
//                   style={{ width: "35%", margin: 0, marginBottom: "2rem" }}
//                   // onChange={handleChange}
//                   // value={other}
//                 ></Form.Control>
//               </Form.Group>
//               <div className="back-next-btns">
//                 <Button
//                   variant="secondary"
//                   className="back-btn"
//                   onClick={() => history.goBack()}
//                 >
//                   <i
//                     className="fas fa-chevron-left"
//                     style={{ color: "#fff", marginRight: "8px" }}
//                   ></i>
//                   Back
//                 </Button>

//                 <Button
//                   variant="danger"
//                   className="next-btn"
//                   // onClick={handleSubmit}
//                 >
//                   Next
//                   <i
//                     className="fas fa-chevron-right"
//                     style={{ color: "#fff", marginLeft: "8px" }}
//                   ></i>
//                 </Button>
//               </div>
//             </Form>
//           )}
//         </div>
//       </Route>
//     </BrowserRouter>
//   );
// }
