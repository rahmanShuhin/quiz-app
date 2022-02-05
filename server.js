const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
