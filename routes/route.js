// const { Response } = require("../models/model");
const { Answer } = require("../models/modelUpdate");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  let answer = new Answer({
    date: req.body.date,
    uuid: req.body.uuid,
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
  });

  try {
    if (await Answer.findOne({ uuid: req.body.uuid })) {
      await Answer.updateOne(
        { uuid: req.body.uuid },
        {
          date: req.body.date,
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
          if (!err) {
            console.log("Document updated");
          } else {
            console.log(err);
          }
        }
      );
    } else {
      await answer.save();
      res.send(answer);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
