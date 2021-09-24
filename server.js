//import required packages
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//below for production
// const port = process.env.PORT || 5000;
const port = 3001;

//configure app
app.use(express.json());
app.use(cors());

//connect to database
mongoose.connect(process.env.MONGO_URI);

//configure data schema and model
const responseSchema = {
  fullName: String,
  email: String,
  question1: {
    a: String,
    b: String,
  },
  question2: Array,
  question3: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
  },
  question4: Array,
  question5: {
    a: String,
    b: String,
  },
  question6: String,
  question7: String,
  question8: String,
  question9: String,
  question10: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
    g: String,
  },
  question11: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
    g: String,
  },
  question12: {
    a: String,
    b: String,
    c: String,
    d: String,
  },
  question13: {
    a: String,
    b: String,
  },
  question14: {
    a: String,
    b: String,
    c: String,
  },
  question15: {
    a: String,
    b: String,
  },
  question16: String,
  question17: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
    g: String,
  },
  question18: {
    a: String,
    b: String,
    c: String,
    d: String,
  },
  question19: Array,
  question20: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
  },
  question21: {
    a: String,
    b: String,
  },
  question22: Array,
  question23: String,
  question24: {
    a: Array,
    b: Array,
  },
  question25A: Array,
  question25B: {
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
    g: String,
    h: String,
    i: String,
    j: String,
    k: String,
    l: String,
    m: String,
    n: String,
    o: String,
    p: String,
    q: String,
  },
  question25C: Array,
  question26: String,
  question27: String,
  question28: String,
  questionA: String,
  questionB: Number,
  questionC: String,
  questionD: String,
  questionE: String,
  questionF: String,
  questionG: String,
  questionH: String,
  questionI: String,
  questionJ: String,
  questionK: String,
  questionL: String,
};

const Response = mongoose.model("Response", responseSchema);

//POST APIs
app.post("/allinputs", (req, res) => {
  const newResponse = new Response({
    question1: {
      a: req.body.q1,
      b: req.body.q2,
    },
  });
  newResponse
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});

// app.post("/input", (req, res) => {
//   const newResponse = new Response({
//     name: req.body.name,
//     email: req.body.email,
//     title: req.body.title,
//     responses: {
//       question1A: "",
//       question1B: "",
//     },
//   });

//   newResponse
//     .save()
//     .then((item) => console.log(item))
//     .catch((err) => res.status(400).json("Error " + err));
// });

// // ---question 1 saved
// app.post("/q1", (req, res) => {
//   //   const id = Response.findOne().sort({ _id: -1 }).limit(1);

//   const newResponse = new Response({
//     question1A: req.body.question1A,
//     question1B: req.body.question1B,
//   });

//   newResponse
//     .save()
//     .then((item) => console.log(item))
//     .catch((err) => res.status(400).json("Error " + err));
// });

//GET APIs
app.get("/display", (req, res) => {
  Response.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error " + err));
});

//DELETE APIs
app.delete("/delete", (req, res) => {
  Response.deleteMany({}, (req, res, err) => {
    if (!err) {
      console.log("deleted");
    } else {
      console.log(err);
    }
  });
});

//for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server
app.listen(port, function () {
  console.log("Express is running");
});
