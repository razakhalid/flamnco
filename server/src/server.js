const app = require("./app");
const http = require("http");
const express = require("express");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    app.listen(PORT, () => {
       console.log(`Listening on port ${PORT}`);
    });
}

startServer();