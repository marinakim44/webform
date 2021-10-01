require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//below line for production
const port = process.env.PORT || 5000;
//below line for development
// const port = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("error", (err) => {
  console.log(err);
});

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
    question10: {
      A: String,
      B: String,
      C: String,
      D: String,
      E: String,
      F: String,
      G: String,
    },
    question11: {
      A: String,
      B: String,
      C: String,
      D: String,
      E: String,
      F: String,
      G: String,
    },
    question12: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    question13: {
      a: String,
      b: String,
    },
    question14: Object,
    question15: Object,
    question16: String,
    question17: {
      A: String,
      B: String,
      C: String,
      D: String,
      E: String,
      F: String,
      G: String,
    },
    question18: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    question19: {
      input: Array,
      none: Boolean,
      dontknow: Boolean,
      other: String,
    },
    question20: {
      A: String,
      B: String,
      C: String,
      D: String,
      E: String,
      F: String,
    },
    question21: {
      A: String,
      B: String,
    },
    question22revenue: Number,
    question22profit: Number,
    question22return: Number,
    question22dontknowRevenue: Boolean,
    question22dontknowProfit: Boolean,
    question22dontknowReturn: Boolean,
    question23: String,
    question24: {
      A: Array,
      B: Array,
    },
    question25A: Array,
    question25Anone: Boolean,
    question25Adontknow: Boolean,
    question25Aother: String,
    question25B: {
      A: String,
      B: String,
      C: String,
      D: String,
      E: String,
      F: String,
      G: String,
      H: String,
      I: String,
      J: String,
      K: String,
      L: String,
      M: String,
      N: String,
    },
    question25Bnone: Boolean,
    question25Bdontknow: Boolean,
    question25C: Array,
    question25Cnone: Boolean,
    question25Cdontknow: Boolean,
    question26: String,
    question27: String,
    question28: String,
    questionA: String,
    questionAother: String,
    questionB: Number,
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

//POST APIs
app.post("/allinputs", (req, res) => {
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
      // question1: {
      //   a: req.body.q1a,
      //   b: req.body.q1b,
      // },
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
      question10: req.body.q10,
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
      question22revenue: req.body.q22revenue,
      question22profit: req.body.q22profit,
      question22return: req.body.q22return,
      question22dontknowRevenue: req.body.dontknowRevenue,
      question22dontknowProfit: req.body.dontknowProfit,
      question22dontknowReturn: req.body.dontknowReturn,
      question23: req.body.q23,
      question24: req.body.q24,
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
      question26: req.body.q26,
      question27: req.body.q27,
      question28: req.body.q28,
      questionA: req.body.qa,
      questionAother: req.body.qaOther,
      questionB: req.body.qb,
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
});

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
