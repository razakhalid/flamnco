const express = require("express");
const productsRouter = require("./products/products.router");
const ordersRouter = require("./orders/orders.router");
const cartRouter = require("./cart/cart.router");

const api = express.Router();

api.use("/products", productsRouter);
api.use("/cart", cartRouter);
api.use("/orders", ordersRouter);

module.exports = api;