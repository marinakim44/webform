require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 3001;
const NodeRSA = require("node-rsa");
const key = new NodeRSA({ b: 512 });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const options = {
  // serverSelectionTimeoutMS: 60000,
  // socketTimeoutMS: 45000,
  // keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, options, function (err) {
  if (!err) {
    console.log("Mongodb connected...");
  } else {
    console.log(err);
  }
});

// mongoose.set("bufferCommands", false);
// mongoose.connect(process.env.MONGO_URI, options, function (err) {
//   console.log(err);
// });

// mongoose.connection.on("error", (err) => {
//   console.log(err);
// });

var date = new Date();
var currentDate = date.toString();

const responseSchema = new mongoose.Schema(
  {
    datetime: {
      type: Date,
      required: true,
    },
    uuid: String,
    language: String,
    name: String,
    company: String,
    title: String,
    email: String,
    phone: String,
    question1: Object,
    question2: Array,
    question2none: Boolean,
    question2dontknow: Boolean,
    question3: Object,
    question4: Array,
    question4other: String,
    question5: Object,
    question6: String,
    question7: String,
    question8: String,
    question9: String,
    question10A: Object,
    question10B: Object,
    question11: Object,
    question12: Object,
    question13: Object,
    question14: Object,
    question15: Object,
    question16: String,
    question17: Object,
    question18: Object,
    question19: {
      input: Array,
      none: Boolean,
      dontknow: Boolean,
      other: String,
    },
    question20: Object,
    question21: Object,
    question22: Object,
    question23: String,
    question24: Array,
    question24none: Object,
    question24not: Object,
    question25A: Array,
    question25Anone: Boolean,
    question25Adontknow: Boolean,
    question25Aother: String,
    question25B: Object,
    question25Bnone: Boolean,
    question25Bdontknow: Boolean,
    question25C: Array,
    question25Cnone: Boolean,
    question25Cdontknow: Boolean,
    question25Cother: String,
    question26: String,
    question27: String,
    question28: String,
    questionA: String,
    questionAother: String,
    questionB: String,
    questionC: String,
    questionCother: String,
    questionD: String,
    questionE: String,
    questionF: String,
    questionFother: String,
    questionG: String,
    questionH: String,
    questionI: String,
    questionJ: String,
    questionK: String,
    questionL: String,
  },
  {
    bufferCommands: false,
    autoCreate: false,
  }
);

const Response = mongoose.model("Response", responseSchema);

// const encryptSchema = new mongoose.Schema(
//   {
//     uuid: String,
//     name: String,
//     company: String,
//     title: String,
//     email: String,
//     phone: String,
//   },
//   {
//     bufferCommands: false,
//     autoCreate: false,
//   }
// );

// const Encrypt = mongoose.model("Encrypt", encryptSchema);

//POST APIs
app.post("/allinputs", (req, res) => {
  // var encryptedName = key.encrypt(req.body.name, "base64");
  // var encryptedCompany = key.encrypt(req.body.company, "base64");
  // var encryptedTitle = key.encrypt(req.body.title, "base64");
  // var encryptedEmail = key.encrypt(req.body.email, "base64");
  // var encryptedPhone = key.encrypt(req.body.phone, "base64");

  Response.findOneAndUpdate(
    { uuid: req.body.uuid },
    {
      datetime: currentDate,
      name: req.body.name,
      company: req.body.company,
      title: req.body.title,
      email: req.body.email,
      phone: req.body.phone,
      question1: req.body.q1,
      question2: req.body.q2,
      question2none: req.body.q2none,
      question2dontknow: req.body.q2dontknow,
      question3: req.body.q3,
      question4: req.body.q4,
      question4other: req.body.q4other,
      question5: req.body.q5,
      question6: req.body.q6,
      question7: req.body.q7,
      question8: req.body.q8,
      question9: req.body.q9,
      question10A: req.body.q10a,
      question10B: req.body.q10b,
      question11: req.body.q11,
      question12: req.body.q12,
      question13: {
        a: req.body.q13a,
        b: req.body.q13b,
      },
      question14: req.body.q14,
      question15: req.body.q15,
      question16: req.body.q16,
      question17: req.body.q17,
      question18: req.body.q18,
      question19: {
        input: req.body.q19,
        none: req.body.q19none,
        dontknow: req.body.q19dontknow,
        other: req.body.q19other,
      },
      question20: req.body.q20,
      question21: req.body.q21,
      question22: req.body.q22,
      question23: req.body.q23,
      question24: req.body.q24,
      question24none: req.body.q24none,
      question24not: req.body.q24not,
      question25A: req.body.q25,
      question25Anone: req.body.q25none,
      question25Adontknow: req.body.q25dontknow,
      question25Aother: req.body.q25other,
      question25B: req.body.q25b,
      question25Bnone: req.body.q25bNone,
      question25Bdontknow: req.body.q25bDontknow,
      question25C: req.body.q25c,
      question25Cnone: req.body.q25cNone,
      question25Cdontknow: req.body.q25cDontknow,
      question25Cother: req.body.q25cOther,
      question26: req.body.q26,
      question27: req.body.q27,
      question28: req.body.q28,
      questionA: req.body.qa,
      questionAother: req.body.qaOther,
      questionB: req.body.qbString,
      questionC: req.body.qc,
      questionCother: req.body.qcOther,
      questionD: req.body.qd,
      questionE: req.body.qe,
      questionF: req.body.qf,
      questionFother: req.body.qfOther,
      questionG: req.body.qg,
      questionH: req.body.qh,
      questionI: req.body.qi,
      questionJ: req.body.qj,
    },
    { upsert: true },
    function (err, doc) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send("Saved");
      }
    }
  );

  // const decryptedData = new Encrypt({
  //   uuid: req.body.uuid,
  //   name: key.decrypt(encryptedName, "utf8"),
  //   company: key.decrypt(encryptedCompany, "utf8"),
  //   title: key.decrypt(encryptedTitle, "utf8"),
  //   email: key.decrypt(encryptedEmail, "utf8"),
  //   phone: key.decrypt(encryptedPhone, "utf8"),
  // });

  // decryptedData
  //   .save()
  //   .then((item) => console.log(item))
  //   .catch((err) => console.log(err));
});

//GET APIs
// app.get("/display", (req, res) => {
//   Response.find()
//     .then((items) => res.json(items))
//     .catch((err) => res.status(400).json("Error " + err));
// });

//DELETE APIs
// app.delete("/delete", (req, res) => {
//   Response.deleteMany({}, (req, res, err) => {
//     if (!err) {
//       console.log("deleted");
//     } else {
//       console.log(err);
//     }
//   });
// });

//for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server
app.listen(port, function () {
  console.log("Express server launched...");
});
