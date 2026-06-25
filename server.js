const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Stock Scanner API Running");
});

app.get("/auth/callback", (req, res) => {
  res.send("AliceBlue Connected Successfully");
});

app.get("/scanner", (req, res) => {
  res.json({
    status: "ok"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server Started");
});
