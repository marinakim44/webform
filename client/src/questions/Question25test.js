// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Question24 from "./Question24";
// import Question25B from "./Question25B";
// import { Button, Breadcrumb, Table, Form } from "react-bootstrap";
// import "../App.css";
// import { useState } from "react";

// export default function Question25() {
//   const rows = [
//     {
//       key: "A",
//       value: "A skilled, educated and adaptable workforce",
//     },
//     {
//       key: "B",
//       value: "Adequate digital and physical infrastructure",
//     },
//     {
//       key: "C",
//       value: "Reducing climate change and environmental damage",
//     },
//     {
//       key: "D",
//       value: "High levels of employment",
//     },
//     {
//       key: "E",
//       value: "An effective tax system",
//     },
//     {
//       key: "F",
//       value: "Greater income equality",
//     },
//     {
//       key: "G",
//       value: "The good health and well-being of the workforce",
//     },
//     {
//       key: "H",
//       value: "A diverse and inclusive workforce",
//     },
//     {
//       key: "I",
//       value: "Safeguards around usage of personal data",
//     },
//     {
//       key: "J",
//       value: "Predictable macroeconomic environment",
//     },
//     {
//       key: "K",
//       value: "Investment attractiveness of the country",
//     },
//     {
//       key: "L",
//       value: "Fighting against corruption and bribery",
//     },
//     {
//       key: "M",
//       value: "The supremacy of law in all spheres of state activity",
//     },
//     {
//       key: "N",
//       value: "Access to affordable capital",
//     },
//   ];

//   const [input, setInput] = useState([]);
//   const [isNone, setIsNone] = useState(false);
//   const [isDontknow, setIsDontknow] = useState(false);
//   const [other, setOther] = useState("");
//   const [checkedA, setCheckedA] = useState(false);
//   const [disabledA, setDisabledA] = useState(false);
//   const [checkedB, setCheckedB] = useState(false);
//   const [disabledB, setDisabledB] = useState(false);
//   const [checkedC, setCheckedC] = useState(false);
//   const [disabledC, setDisabledC] = useState(false);
//   const [checkedD, setCheckedD] = useState(false);
//   const [disabledD, setDisabledD] = useState(false);
//   const [checkedE, setCheckedE] = useState(false);
//   const [disabledE, setDisabledE] = useState(false);
//   const [checkedF, setCheckedF] = useState(false);
//   const [disabledF, setDisabledF] = useState(false);
//   const [checkedG, setCheckedG] = useState(false);
//   const [disabledG, setDisabledG] = useState(false);
//   const [checkedH, setCheckedH] = useState(false);
//   const [disabledH, setDisabledH] = useState(false);
//   const [checkedI, setCheckedI] = useState(false);
//   const [disabledI, setDisabledI] = useState(false);
//   const [checkedJ, setCheckedJ] = useState(false);
//   const [disabledJ, setDisabledJ] = useState(false);
//   const [checkedK, setCheckedK] = useState(false);
//   const [disabledK, setDisabledK] = useState(false);
//   const [disabledL, setDisabledL] = useState(false);
//   const [checkedL, setCheckedL] = useState(false);
//   const [disabledM, setDisabledM] = useState(false);
//   const [checkedM, setCheckedM] = useState(false);
//   const [disabledN, setDisabledN] = useState(false);
//   const [checkedN, setCheckedN] = useState(false);

//   var [checked, setChecked] = useState({
//     A: false,
//     B: false,
//     C: false,
//     D: false,
//     E: false,
//     F: false,
//     G: false,
//     H: false,
//     I: false,
//     J: false,
//     K: false,
//     L: false,
//     M: false,
//     N: false,
//   });

//   var [disabled, setDisabled] = useState({
//     A: false,
//     B: false,
//     C: false,
//     D: false,
//     E: false,
//     F: false,
//     G: false,
//     H: false,
//     I: false,
//     J: false,
//     K: false,
//     L: false,
//     M: false,
//     N: false,
//   });

//   //   function handleClick(e) {
//   //     var letter = e.target.value;
//   //     var x = eval("checked" + "." + letter);

//   //     setChecked((prev) => {
//   //       return {
//   //         ...prev,
//   //         [letter]: !x,
//   //       };
//   //     });

//   //     if (x) {
//   //       if (input.includes(letter)) {
//   //         input.pop(letter);
//   //       }
//   //     } else {
//   //       if (input.length < 3) {
//   //         if (!input.includes(letter)) {
//   //           input.push(letter);
//   //         }
//   //       } else {
//   //         setChecked((prev) => {
//   //           return {
//   //             ...prev,
//   //             [letter]: false,
//   //           };
//   //         });
//   //         setDisabled((prev) => {
//   //           return {
//   //             ...prev,
//   //             [letter]: true,
//   //           };
//   //         });
//   //       }
//   //     }

//   //     console.log(checked);
//   //   }

//   function handleA(e) {
//     setCheckedA(!checkedA);

//     if (checkedA) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedA(false);
//         setDisabledA(true);
//       }
//     }
//   }

//   function handleB(e) {
//     setCheckedB(!checkedB);

//     if (checkedB) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedB(false);
//         setDisabledB(true);
//       }
//     }
//   }

//   function handleC(e) {
//     setCheckedC(!checkedC);

//     if (checkedC) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedC(false);
//         setDisabledC(true);
//       }
//     }
//   }

//   function handleD(e) {
//     setCheckedD(!checkedD);

//     if (checkedD) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedD(false);
//         if (input.length < 3) {
//           setDisabledD(false);
//         }
//       }
//     }
//   }

//   function handleE(e) {
//     setCheckedE(!checkedE);

//     if (checkedE) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedE(false);
//         setDisabledE(true);
//       }
//     }
//   }

//   function handleF(e) {
//     setCheckedF(!checkedF);

//     if (checkedF) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedF(false);
//         setDisabledF(true);
//       }
//     }
//   }

//   function handleG(e) {
//     setCheckedG(!checkedG);

//     if (checkedG) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedG(false);
//         setDisabledG(true);
//       }
//     }
//   }

//   function handleH(e) {
//     setCheckedH(!checkedH);

//     if (checkedH) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedH(false);
//         setDisabledH(true);
//       }
//     }
//   }

//   function handleI(e) {
//     setCheckedI(!checkedI);

//     if (checkedI) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedI(false);
//         setDisabledI(true);
//       }
//     }
//   }

//   function handleJ(e) {
//     setCheckedJ(!checkedJ);

//     if (checkedJ) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedJ(false);
//         setDisabledJ(true);
//       }
//     }
//   }

//   function handleK(e) {
//     setCheckedK(!checkedK);

//     if (checkedK) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedK(false);
//         setDisabledK(true);
//       }
//     }
//   }

//   function handleL(e) {
//     setCheckedL(!checkedL);

//     if (checkedL) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedL(false);
//         setDisabledL(true);
//       }
//     }
//   }

//   function handleM(e) {
//     setCheckedM(!checkedM);

//     if (checkedM) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedM(false);
//         setDisabledM(true);
//       }
//     }
//   }

//   function handleN(e) {
//     setCheckedN(!checkedN);

//     if (checkedN) {
//       if (input.includes(e.target.value)) {
//         input.pop(e.target.value);
//       }
//     } else {
//       if (input.length < 3) {
//         if (!input.includes(e.target.value)) {
//           input.push(e.target.value);
//         }
//       } else {
//         setCheckedN(false);
//         setDisabledN(true);
//       }
//     }
//   }

//   function handleNone(e) {
//     e.preventDefault();
//     setIsNone(!isNone);
//   }

//   function handleDontknow(e) {
//     e.preventDefault();
//     setIsDontknow(!isDontknow);
//   }

//   function handleChange(e) {
//     if (!isNone && !isDontknow) {
//       setOther(e.target.value);
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (input.length <= 3) {
//       if (isNone) {
//         localStorage.setItem("q25", "None of the above");
//       } else if (isDontknow) {
//         localStorage.setItem("q25", "Don't know");
//       } else if (other) {
//         localStorage.setItem("q25-other", other);
//       } else {
//         localStorage.setItem("q25", JSON.stringify(input));
//       }
//     }
//   }

//   return (
//     <BrowserRouter>
//       <Route path="/eng-q25">
//         <div className="main">
//           <Breadcrumb className="nav-div">
//             <Breadcrumb.Item>
//               <Link className="before-link" to="/">
//                 Home
//               </Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>
//               <Link className="before-link" to="/eng-start">
//                 Credentials
//               </Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>Q1</Breadcrumb.Item>
//             <Breadcrumb.Item>Q2</Breadcrumb.Item>
//             <Breadcrumb.Item>Q3</Breadcrumb.Item>
//             <Breadcrumb.Item>Q4</Breadcrumb.Item>
//             <Breadcrumb.Item>Q5</Breadcrumb.Item>
//             <Breadcrumb.Item>Q6</Breadcrumb.Item>
//             <Breadcrumb.Item>Q7</Breadcrumb.Item>
//             <Breadcrumb.Item>Q8</Breadcrumb.Item>
//             <Breadcrumb.Item>Q9</Breadcrumb.Item>
//             <Breadcrumb.Item>Q10</Breadcrumb.Item>
//             <Breadcrumb.Item>Q11</Breadcrumb.Item>
//             <Breadcrumb.Item>Q12</Breadcrumb.Item>
//             <Breadcrumb.Item>Q13</Breadcrumb.Item>
//             <Breadcrumb.Item>Q14</Breadcrumb.Item>
//             <Breadcrumb.Item>Q15</Breadcrumb.Item>
//             <Breadcrumb.Item>Q16</Breadcrumb.Item>
//             <Breadcrumb.Item>Q17</Breadcrumb.Item>
//             <Breadcrumb.Item>Q18</Breadcrumb.Item>
//             <Breadcrumb.Item>Q19</Breadcrumb.Item>
//             <Breadcrumb.Item>Q20</Breadcrumb.Item>
//             <Breadcrumb.Item>Q21</Breadcrumb.Item>
//             <Breadcrumb.Item>Q22</Breadcrumb.Item>
//             <Breadcrumb.Item>Q23</Breadcrumb.Item>
//             <Breadcrumb.Item>Q24</Breadcrumb.Item>
//             <Breadcrumb.Item active>Q25</Breadcrumb.Item>
//           </Breadcrumb>
//           <div className="progressBarEmpty">
//             <div
//               className="progressBarFilled"
//               style={{
//                 width: ((100 / 41) * 26).toString() + "%",
//               }}
//             ></div>
//           </div>
//           <p>
//             Q25. Which three of these outcomes do you think should be government
//             priorities in Kazakhstan? <br />
//             (PLEASE SELECT UP TO THREE RESPONSES ONLY)
//           </p>
//           <form>
//             <div style={{ overflow: "auto", height: "320px" }}>
//               <Table style={{ fontSize: "12px" }}>
//                 <tbody>
//                   {/* {rows.map((row) => {
//                     return (
//                       <tr>
//                         <td>{row.key}</td>
//                         <td>{row.value}</td>
//                         <td>
//                           <input
//                             type="checkbox"
//                             value={row.key}
//                             onClick={handleClick}
//                             checked={eval("checked" + "." + row.key)}
//                             disabled={eval("disabled" + "." + row.key)}
//                           ></input>
//                         </td>
//                       </tr>
//                     );
//                   })} */}
//                   <tr>
//                     <td>A</td>
//                     <td>A value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="A"
//                         onClick={handleClickA}
//                         checked={checkedA}
//                         disabled={disabledA}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>B</td>
//                     <td>B value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="B"
//                         onClick={handleClickB}
//                         checked={checkedB}
//                         disabled={disabledB}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>C</td>
//                     <td>C value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="C"
//                         onClick={handleClickC}
//                         checked={checkedC}
//                         disabled={disabledC}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>D</td>
//                     <td>D value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="D"
//                         onClick={handleClickD}
//                         checked={checkedD}
//                         disabled={disabledD}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>E</td>
//                     <td>E value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="E"
//                         onClick={handleClickE}
//                         checked={checkedE}
//                         disabled={disabledE}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>F</td>
//                     <td>F value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="F"
//                         onClick={handleClickF}
//                         checked={checkedF}
//                         disabled={disabledF}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>G</td>
//                     <td>G value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="G"
//                         onClick={handleClickG}
//                         checked={checkedG}
//                         disabled={disabledG}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>H</td>
//                     <td>H value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="H"
//                         onClick={handleClickH}
//                         checked={checkedH}
//                         disabled={disabledH}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>I</td>
//                     <td>I value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="I"
//                         onClick={handleClickI}
//                         checked={checkedI}
//                         disabled={disabledI}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>J</td>
//                     <td>J value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="J"
//                         onClick={handleClickJ}
//                         checked={checkedJ}
//                         disabled={disabledJ}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>K</td>
//                     <td>K value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="K"
//                         onClick={handleClickK}
//                         checked={checkedK}
//                         disabled={disabledK}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>L</td>
//                     <td>L value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="L"
//                         onClick={handleClickL}
//                         checked={checkedL}
//                         disabled={disabledL}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>M</td>
//                     <td>M value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="M"
//                         onClick={handleClickM}
//                         checked={checkedM}
//                         disabled={disabledM}
//                       ></input>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>N</td>
//                     <td>N value</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         value="N"
//                         onClick={handleClickN}
//                         checked={checkedN}
//                         disabled={disabledN}
//                       ></input>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </div>
//             <Form.Control
//               type="text"
//               placeholder="Other (please specify)"
//               style={{ marginTop: "1rem" }}
//               value={other}
//               onChange={handleChange}
//             ></Form.Control>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "left",
//                 width: "35%",
//                 marginTop: "2rem",
//               }}
//             >
//               <Button
//                 type="button"
//                 variant={isNone ? "warning" : "light"}
//                 style={{ marginRight: "2rem", width: "100%" }}
//                 value="None of the above"
//                 onClick={handleNone}
//               >
//                 NONE OF THE ABOVE
//               </Button>
//               <Button
//                 type="button"
//                 variant={isDontknow ? "warning" : "light"}
//                 style={{ width: "100%" }}
//                 value="Don't know"
//                 onClick={handleDontknow}
//               >
//                 DON'T KNOW
//               </Button>
//             </div>
//             <Link to="/eng-q24">
//               <Button variant="light" className="back-btn">
//                 Back
//               </Button>
//             </Link>

//             <Button
//               variant="danger"
//               className="next-btn"
//               onClick={handleSubmit}
//             >
//               <Link to="/eng-q25b">Next</Link>
//             </Button>
//           </form>
//         </div>
//       </Route>

//       <Switch>
//         <Route path="/eng-q24">
//           <Question24 />
//         </Route>
//         <Route path="/eng-q25b">
//           <Question25B />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Question25 from "./Question25";
import Question25C from "./Question25C";
import { Button, Breadcrumb, Table, Dropdown, Form } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function Question25B() {
  const rows = [
    {
      key: "A",
      value: "A skilled, educated and adaptable workforce",
    },
    {
      key: "B",
      value: "Adequate digital and physical infrastructure",
    },
    {
      key: "C",
      value: "Reducing climate change and environmental damage",
    },
    {
      key: "D",
      value: "High levels of employment",
    },
    {
      key: "E",
      value: "An effective tax system",
    },
    {
      key: "F",
      value: "Greater income equality",
    },
    {
      key: "G",
      value: "The good health and well-being of the workforce",
    },
    {
      key: "H",
      value: "A diverse and inclusive workforce",
    },
    {
      key: "I",
      value: "Safeguards around usage of personal data",
    },
    {
      key: "J",
      value: "Predictable macroeconomic environment",
    },
    {
      key: "K",
      value: "Investment attractiveness of the country",
    },
    {
      key: "L",
      value: "Fighting against corruption and bribery",
    },
    {
      key: "M",
      value: "The supremacy of law in all spheres of state activity",
    },
    {
      key: "N",
      value: "Access to affordable capital",
    },
  ];

  const columns = [
    "Greatly ineffective",
    "Ineffective",
    "Neither / nor",
    "Effective",
    "Greatly effective",
    "Don't know",
    "Refused",
  ];

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("q25", JSON.stringify(input));
  }

  const [none, setNone] = useState("");
  const [isNone, setIsNone] = useState(false);

  function handleNone(e) {
    e.preventDefault();
    setNone(e.target.value);
    setIsNone(!isNone);
  }

  const [dontknow, setDontknow] = useState("");
  const [isDontknow, setIsDontknow] = useState(false);

  function handleDontknow(e) {
    e.preventDefault();
    setDontknow(e.target.value);
    setIsDontknow(!isDontknow);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNone) {
      localStorage.setItem("q25b", "None of the above");
    } else if (isDontknow) {
      localStorage.setItem("q25b", "Don't know");
    } else {
      localStorage.setItem("q25b", JSON.stringify(input));
    }
  }

  return (
    <BrowserRouter>
      <Route path="/eng-q25b">
        <div>
          <div className="sticky-sub-div">
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
              <Breadcrumb.Item>Q2</Breadcrumb.Item>
              <Breadcrumb.Item>Q3</Breadcrumb.Item>
              <Breadcrumb.Item>Q4</Breadcrumb.Item>
              <Breadcrumb.Item>Q5</Breadcrumb.Item>
              <Breadcrumb.Item>Q6</Breadcrumb.Item>
              <Breadcrumb.Item>Q7</Breadcrumb.Item>
              <Breadcrumb.Item>Q8</Breadcrumb.Item>
              <Breadcrumb.Item>Q9</Breadcrumb.Item>
              <Breadcrumb.Item>Q10</Breadcrumb.Item>
              <Breadcrumb.Item>Q11</Breadcrumb.Item>
              <Breadcrumb.Item>Q12</Breadcrumb.Item>
              <Breadcrumb.Item>Q13</Breadcrumb.Item>
              <Breadcrumb.Item>Q14</Breadcrumb.Item>
              <Breadcrumb.Item>Q15</Breadcrumb.Item>
              <Breadcrumb.Item>Q16</Breadcrumb.Item>
              <Breadcrumb.Item>Q17</Breadcrumb.Item>
              <Breadcrumb.Item>Q18</Breadcrumb.Item>
              <Breadcrumb.Item>Q19</Breadcrumb.Item>
              <Breadcrumb.Item>Q20</Breadcrumb.Item>
              <Breadcrumb.Item>Q21</Breadcrumb.Item>
              <Breadcrumb.Item>Q22</Breadcrumb.Item>
              <Breadcrumb.Item>Q23</Breadcrumb.Item>
              <Breadcrumb.Item>Q24</Breadcrumb.Item>
              <Breadcrumb.Item>Q25</Breadcrumb.Item>
              <Breadcrumb.Item active>Q26</Breadcrumb.Item>
            </Breadcrumb>
            <div className="progressBarEmpty">
              <div
                className="progressBarFilled"
                style={{
                  width: ((100 / 41) * 27).toString() + "%",
                }}
              ></div>
            </div>
          </div>

          <div className="main">
            <p>
              Q25b How effective do you think the government has been in
              achieving these outcomes in Kazakhstan?
              <br /> (Please select one response only per row)
            </p>
            <Form>
              <div style={{ overflow: "auto", height: "320px" }}>
                <Table>
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "#fff",
                    }}
                  >
                    <tr style={{ position: "sticky", top: 0 }}>
                      <th
                        colSpan="2"
                        style={{ position: "sticky", top: 0, zIndex: 1 }}
                      ></th>
                      {columns.map((col) => {
                        return (
                          <th style={{ position: "sticky", top: 0, zIndex: 1 }}>
                            {col}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      return (
                        <tr>
                          <td>{row.key}</td>
                          <td>{row.value}</td>
                          {columns.map((col) => {
                            return (
                              <td>
                                <input
                                  type="radio"
                                  name={row.key}
                                  value={col}
                                  onClick={handleClick}
                                  disabled={isNone || isDontknow ? true : false}
                                ></input>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "35%",
                  marginTop: "2rem",
                }}
              >
                <Button
                  type="button"
                  variant={isNone ? "warning" : "light"}
                  style={{ marginRight: "2rem", width: "100%" }}
                  value="None of the above"
                  onClick={handleNone}
                >
                  NONE OF THE ABOVE
                </Button>
                <Button
                  type="button"
                  variant={isDontknow ? "warning" : "light"}
                  style={{ width: "100%" }}
                  value="Don't know"
                  onClick={handleDontknow}
                >
                  DON'T KNOW
                </Button>
              </div>
              <div className="back-next-btns">
                <Link to="/eng-q25">
                  <Button variant="light" className="back-btn">
                    <i
                      className="fas fa-chevron-left"
                      style={{ marginRight: "8px" }}
                    ></i>
                    Back
                  </Button>
                </Link>

                <Button
                  variant="danger"
                  className="next-btn"
                  onClick={handleSubmit}
                >
                  <Link to="/eng-q25c">Next</Link>
                  <i
                    className="fas fa-chevron-right"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-q25">
          <Question25 />
        </Route>
        <Route path="/eng-q25c">
          <Question25C />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
