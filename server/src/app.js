const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./services/db");
const api = require("./routes/api");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:4200"
}));
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist", "client", "browser")));
app.use('/api', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "client", "browser", "index.html"));
});

module.exports = app;