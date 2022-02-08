const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
//middlewares
app.use(morgan());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  //database connection
  mongoose.connect(
    "mongodb+srv://dbShuhin:XMNpi6tcCQssjEhK@cluster0.ktymi.mongodb.net/quiz-tutorial?retryWrites=true&w=majority",
    () => {
      console.log("database connect");
    }
  );
});
