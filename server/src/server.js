const app = require("./app");
const http = require("http");
const express = require("express");
const db = require("./services/db");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
    await db.connect();
    // await query("create table products ( id int primary key )");

    await db.query(`
        create table if not exists products (
            id int primary key, 
            name varchar(50) not null)
    `);
    // const rows = await db.query("insert into products values ( 1 )");
    // console.log(rows);
    server.listen(PORT, () => {
       console.log(`Listening on port ${PORT}`);
    });
}

startServer();