import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import QuestionI from "./QuestionI";
import EngFinish from "../EngFinish";
import { Button, Breadcrumb, Form } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function QuestionJ() {
  const rows = [
    "Fewer than 500",
    "500-999",
    "1,000-4,999",
    "5,000–9,999",
    "10,000–24,999",
    "25,000–49,999",
    "50,000 or more",
    "Don't know",
  ];

  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("qj", input);

    const allInputs = {
      fullName: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      title: localStorage.getItem("title"),
      q1a: localStorage.getItem("q1a"),
      q1b: localStorage.getItem("q1b"),
      q2: JSON.parse(localStorage.getItem("countries")),
      q3: JSON.parse(localStorage.getItem("q3")),
      q4: JSON.parse(localStorage.getItem("q4")),
      q4other: localStorage.getItem("q4-other"),
      q5a: localStorage.getItem("q4-carbonNeutral"),
      q5b: localStorage.getItem("q4-netZero"),
      q6: localStorage.getItem("q6"),
      q7: localStorage.getItem("q7"),
      q8: localStorage.getItem("q8"),
      q9: localStorage.getItem("q9"),
      q10: JSON.parse(localStorage.getItem("q10")),
      q11: JSON.parse(localStorage.getItem("q11")),
      q12: JSON.parse(localStorage.getItem("q12")),
      q13a: localStorage.getItem("q13a"),
      q13b: localStorage.getItem("q13b"),
      q14: JSON.parse(localStorage.getItem("q14")),
      q15: JSON.parse(localStorage.getItem("q15")),
      q16: localStorage.getItem("q16"),
      q17: JSON.parse(localStorage.getItem("q17")),
      q18: JSON.parse(localStorage.getItem("q18")),
      q19: JSON.parse(localStorage.getItem("q19")),
      q20: JSON.parse(localStorage.getItem("q20")),
      q21: JSON.parse(localStorage.getItem("q21")),
      q22: JSON.parse(localStorage.getItem("q22")),
      q23: localStorage.getItem("q23"),
      q24: JSON.parse(localStorage.getItem("q24")),
      q25: JSON.parse(localStorage.getItem("q25")),
      q25b: JSON.parse(localStorage.getItem("q25b")),
      q25c: JSON.parse(localStorage.getItem("q25c")),
      q26: localStorage.getItem("q26"),
      q27: localStorage.getItem("q27"),
      q28: localStorage.getItem("q28"),
      qa: localStorage.getItem("qa"),
      qb: localStorage.getItem("qb"),
      qc: localStorage.getItem("qc"),
      qd: localStorage.getItem("qd"),
      qe: localStorage.getItem("qe"),
      qf: localStorage.getItem("qf"),
      qg: localStorage.getItem("qg"),
      qh: localStorage.getItem("qh"),
      qi: localStorage.getItem("qi"),
      qj: localStorage.getItem("qj"),
      // qk: localStorage.getItem("qk"),
      // ql: localStorage.getItem("ql"),
    };

    axios.post("/allinputs", allInputs);
  }

  return (
    <BrowserRouter>
      <Route path="/eng-qj">
        <div className="main">
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
            <Breadcrumb.Item>Q26</Breadcrumb.Item>
            <Breadcrumb.Item>Q27</Breadcrumb.Item>
            <Breadcrumb.Item>Q28</Breadcrumb.Item>
            <Breadcrumb.Item>QA</Breadcrumb.Item>
            <Breadcrumb.Item>QB</Breadcrumb.Item>
            <Breadcrumb.Item>QC</Breadcrumb.Item>
            <Breadcrumb.Item>QD</Breadcrumb.Item>
            <Breadcrumb.Item>QE</Breadcrumb.Item>
            <Breadcrumb.Item>QF</Breadcrumb.Item>
            <Breadcrumb.Item>QG</Breadcrumb.Item>
            <Breadcrumb.Item>QH</Breadcrumb.Item>
            <Breadcrumb.Item>QI</Breadcrumb.Item>
            <Breadcrumb.Item>QJ</Breadcrumb.Item>
            <Breadcrumb.Item>QK</Breadcrumb.Item>
            <Breadcrumb.Item active>QL</Breadcrumb.Item>
          </Breadcrumb>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 41) * 41).toString() + "%",
              }}
            ></div>
          </div>

          <p>
            QJ. How many employees does your company have? (PLEASE SELECT ONE
            RESPONSE)
          </p>
          <Form>
            {["radio"].map((type) =>
              rows.map((row) => {
                return (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={row}
                      style={{
                        textAlign: "left",
                      }}
                      onClick={handleClick}
                      value={row}
                      name="option"
                    />
                  </div>
                );
              })
            )}
            <Link to="/eng-qi">
              <Button variant="light" className="back-btn">
                Back
              </Button>
            </Link>

            <Button
              variant="danger"
              className="next-btn"
              onClick={handleSubmit}
            >
              <Link to="/eng-finish">Next</Link>
            </Button>
          </Form>
        </div>
      </Route>

      <Switch>
        <Route path="/eng-qi">
          <QuestionI />
        </Route>
        <Route path="/eng-finish">
          <EngFinish />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import QuestionI from "./QuestionI";
// import QuestionK from "./QuestionK";
// import { Button, Breadcrumb, Form } from "react-bootstrap";
// import "../App.css";
// import { useState } from "react";

// export default function QuestionJ() {
// const rows = [
//   "Fewer than 500",
//   "500-999",
//   "1,000-4,999",
//   "5,000–9,999",
//   "10,000–24,999",
//   "25,000–49,999",
//   "50,000 or more",
//   "Don't know",
// ];

//   const [input, setInput] = useState("");

//   function handleClick(e) {
//     setInput(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     localStorage.setItem("qj", input);
//   }

//   return (
//     <BrowserRouter>
//       <Route path="/eng-qj">
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
//             <Breadcrumb.Item>Q25</Breadcrumb.Item>
//             <Breadcrumb.Item>Q26</Breadcrumb.Item>
//             <Breadcrumb.Item>Q27</Breadcrumb.Item>
//             <Breadcrumb.Item>Q28</Breadcrumb.Item>
//             <Breadcrumb.Item>QA</Breadcrumb.Item>
//             <Breadcrumb.Item>QB</Breadcrumb.Item>
//             <Breadcrumb.Item>QC</Breadcrumb.Item>
//             <Breadcrumb.Item>QD</Breadcrumb.Item>
//             <Breadcrumb.Item>QE</Breadcrumb.Item>
//             <Breadcrumb.Item>QF</Breadcrumb.Item>
//             <Breadcrumb.Item>QG</Breadcrumb.Item>
//             <Breadcrumb.Item>QH</Breadcrumb.Item>
//             <Breadcrumb.Item>QI</Breadcrumb.Item>
//             <Breadcrumb.Item active>QJ</Breadcrumb.Item>
//           </Breadcrumb>
//           <div className="progressBarEmpty">
//             <div
//               className="progressBarFilled"
//               style={{
//                 width: ((100 / 41) * 39).toString() + "%",
//               }}
//             ></div>
//           </div>
//           <p>
//             QJ. How many employees does your company have? (PLEASE SELECT ONE
//             RESPONSE)
//           </p>
//           <Form>
//             {["radio"].map((type) =>
//               rows.map((row) => {
//                 return (
//                   <div key={`default-${type}`} className="mb-3">
//                     <Form.Check
//                       type={type}
//                       id={`default-${type}`}
//                       label={row}
//                       style={{
//                         textAlign: "left",
//                       }}
//                       onClick={handleClick}
//                       value={row}
//                       name="option"
//                     />
//                   </div>
//                 );
//               })
//             )}
//             <Link to="/eng-qi">
//               <Button variant="light" className="back-btn">
//                 Back
//               </Button>
//             </Link>

//             <Button
//               variant="danger"
//               className="next-btn"
//               onClick={handleSubmit}
//             >
//               <Link to="/eng-qk">Next</Link>
//             </Button>
//           </Form>
//         </div>
//       </Route>

//       <Switch>
//         <Route path="/eng-qi">
//           <QuestionI />
//         </Route>
//         <Route path="/eng-qk">
//           <QuestionK />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
