const app = require("./app");
const http = require("http");
const db = require("./services/db");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
    await db.connect();
    server.listen(PORT, () => {
       console.log(`Listening on port ${PORT}`);
    });
}

startServer();