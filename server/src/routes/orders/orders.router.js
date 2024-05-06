const express = require("express");
const { httpPostOrder } = require("./orders.controller");

const ordersRouter = express.Router();

ordersRouter.post('/', httpPostOrder);

module.exports = ordersRouter;