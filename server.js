require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//mongoose

// const user = process.env.USER;
// const password = process.env.PASSWORD;
// const cluster = process.env.CLUSTER;

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

const responseSchema = {
  name: String,
  email: String,
  title: String,
};

const Response = mongoose.model("Response", responseSchema);

// API requests
app.post("/name", (req, res) => {
  console.log(req.body);

  const newResponse = new Response({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
  });

  newResponse
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});

app.get("/display", (req, res) => {
  Response.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete all
app.delete("/delete", (req, res) => {
  Response.deleteMany({}, (req, res, err) => {
    if (!err) {
      console.log("deleted");
    } else {
      console.log(err);
    }
  });
});

//delete one
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Response.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Deleted one record");
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
