const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//routing import
const userRouter = require("./routers/userRoute");

const app = express();
//middlewares
app.use(morgan());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);

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
    `${process.env.DATABASE__CONNECTION}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("database connect");
    }
  );
});
