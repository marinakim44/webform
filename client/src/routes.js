// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Results from "./Results";
// import { useState, useEffect } from "react";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import axios from "axios";

// function App() {
//   // radio buttons
//   const [metrics, setMetrics] = useState("Metric");
//   const [gender, setGender] = useState("Male");
//   function changeMetrics(e) {
//     setMetrics(e.target.value);
//   }
//   function changeGender(e) {
//     setGender(e.target.value);
//   }

//   // height and weight
//   const [heightWeight, setHeightWeight] = useState({
//     height: "",
//     weight: "",
//   });

//   function changeHeightWeight(e) {
//     const { name, value } = e.target;
//     setHeightWeight((prevInput) => {
//       return {
//         ...prevInput,
//         [name]: [value],
//       };
//     });
//   }

//   // activity
//   const [activity, setActivity] = useState("Activity");

//   function handleSelect(e) {
//     console.log(e);
//     setActivity(e);
//   }

//   // age
//   const [age, setAge] = useState("");

//   function changeAge(e) {
//     setAge(e.target.value);
//   }

//   //function - submitting the form to backend server
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm(e) {
//     e.preventDefault();
//     const data = {
//       metrics: metrics,
//       height: heightWeight.height[0],
//       weight: heightWeight.weight[0],
//       gender: gender,
//       activity: activity,
//       age: age,
//     };

//     console.log(data);

//     axios.post("http://localhost:3001/postdata", data);

//     setIsSubmitted(true);
//   }

//   //receiving back the data stored in database from the server
//   const [result, setResult] = useState({
//     bmiIndex: "",
//     color: "",
//     definition: "",
//     carbohydrate: "",
//     fiber: "",
//     protein: "",
//   });

//   useEffect(() => {
//     fetch("http://localhost:3001/")
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((jsonRes) => setResult(jsonRes));
//   });

//   return (
//     <div className="App">
//       {!isSubmitted ? (
//         <form className="form" onSubmit={submitForm}>
//           <p className="heading">
//             Please select a type of metric you want to use
//           </p>
//           <hr className="line" size="3"></hr>
//           <div className="metric-div">
//             <fieldset id="metrics">
//               <input
//                 className="metric-input"
//                 type="radio"
//                 name="metrics"
//                 value="Metric"
//                 checked={metrics === "Metric"}
//                 onChange={changeMetrics}
//               />
//               Metric
//               <input
//                 className="imperial-input"
//                 type="radio"
//                 name="metrics"
//                 value="Imperial"
//                 checked={metrics === "Imperial"}
//                 onChange={changeMetrics}
//               />
//               Imperial
//             </fieldset>
//           </div>
//           <div className="height-weight">
//             <div className="height-div">
//               <strong style={{ color: "#52575C" }}>Height</strong>
//             </div>
//             <input
//               className="height-input"
//               placeholder="0"
//               value={heightWeight.height}
//               name="height"
//               onChange={changeHeightWeight}
//             />
//             <strong style={{ color: "#52575C" }}>
//               {metrics === "Imperial" ? "Inches" : "Centimetres"}
//             </strong>
//             <br></br>
//             <div className="weight-div">
//               <strong style={{ color: "#52575C" }}>Weight</strong>
//             </div>
//             <input
//               className="weight-input"
//               placeholder="0"
//               value={heightWeight.weight}
//               name="weight"
//               onChange={changeHeightWeight}
//             />
//             <strong style={{ color: "#52575C" }}>
//               {metrics === "Metric" ? "Kilograms" : "Pounds"}
//             </strong>
//           </div>
//           <p className="heading">Please select your gender</p>
//           <hr className="line" size="3"></hr>
//           <div className="gender-div">
//             <fieldset ide="gender">
//               <input
//                 className="male-input"
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={gender === "Male"}
//                 onChange={changeGender}
//               />
//               Male
//               <input
//                 className="female-input"
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={gender === "Female"}
//                 onChange={changeGender}
//               />
//               Female
//             </fieldset>
//           </div>
//           <p className="heading">Please select your activity level</p>
//           <hr className="line" size="3"></hr>
//           <DropdownButton
//             title={activity}
//             onSelect={handleSelect}
//             style={{ width: "100%" }}
//           >
//             <Dropdown.Item eventKey="Lightly active">
//               Lightly active
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Moderately active">
//               Moderately active
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Very active">Very active</Dropdown.Item>
//           </DropdownButton>
//           <p className="heading">Please enter your age</p>
//           <hr className="line" size="3"></hr>
//           <input
//             className="age-input"
//             placeholder="0"
//             name="age"
//             value={age}
//             onChange={changeAge}
//           />
//           <button className="button">
//             <strong>Calculate BMI</strong>
//           </button>
//         </form>
//       ) : (
//         <Results result={result} />
//       )}
//     </div>
//   );
// }

// export default App;
