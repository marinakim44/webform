// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// configs
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database, data schema and model
mongoose.connect(
  "mongodb+srv://admin-marina:testpassword4488@cluster0.hr1hl.mongodb.net/questionsDB?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

const responseSchema = {
  fullName: String,
  email: String,
  question1A: String,
  question1B: String,
  question2: Array,
  question3A: String,
  question3B: String,
  question3C: String,
  question3D: String,
  question3E: String,
  question3F: String,
  question4: Array,
  question5A: String,
  question5B: String,
  question6: String,
  question7: String,
  question8: String,
  question9: String,
  question10A: String,
  question10B: String,
  question10C: String,
  question10D: String,
  question10E: String,
  question10F: String,
  question10G: String,
  question11A: String,
  question11B: String,
  question11C: String,
  question11D: String,
  question11E: String,
  question11F: String,
  question11G: String,
  question12A: String,
  question12B: String,
  question12C: String,
  question12D: String,
  question13A: String,
  question13B: String,
  question14A: String,
  question14B: String,
  question14C: String,
  question15A: String,
  question15B: String,
  question16: String,
  question17A: String,
  question17B: String,
  question17C: String,
  question17D: String,
  question17E: String,
  question17F: String,
  question17G: String,
  question18A: String,
  question18B: String,
  question18C: String,
  question18D: String,
  question19: Array,
  question20A: String,
  question20B: String,
  question20C: String,
  question20D: String,
  question20E: String,
  question20F: String,
  question21A: String,
  question21B: String,
  question22: Array,
  question23: String,
  question24A: Array,
  question24B: Array,
  question25A: Array,
  question25BA: String,
  question25BB: String,
  question25BC: String,
  question25BD: String,
  question25BE: String,
  question25BF: String,
  question25BG: String,
  question25BH: String,
  question25BI: String,
  question25BJ: String,
  question25BK: String,
  question25BL: String,
  question25BM: String,
  question25BN: String,
  question25BO: String,
  question25BP: String,
  question25BQ: String,
  question25CA: String,
  question25CB: String,
  question25CC: String,
  question25CD: String,
  question25CE: String,
  question25CF: String,
  question25CG: String,
  question25CH: String,
  question25CI: String,
  question25CJ: String,
  question25CK: String,
  question25CL: String,
  question25CM: String,
  question25CN: String,
  question25CO: String,
  question25CP: String,
  question25CQ: String,
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

// API requests

// run server
app.listen(3001, function () {
  console.log("Express server is running");
});
