const express = require("express");
const cookieSession = require('cookie-session');
const cors = require("cors");
const path = require("path");
const api = require("./routes/api");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:4200"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist", "client", "browser")));
app.use(cookieSession({
  name: 'session',
  keys: ['my-secret-key-1'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use('/api', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "client", "browser", "index.html"));
});

module.exports = app;