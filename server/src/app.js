const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:4200"
}));
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist", "client", "browser")));

app.get('/api', (req, res) => {
  res.status(200).json({
    raza: "khalid"
  })
});

module.exports = app;