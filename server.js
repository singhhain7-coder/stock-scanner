const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Stock Scanner API Running");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server Started");
});
