const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(3000, () => console.log("Server started"));