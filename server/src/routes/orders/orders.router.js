const express = require("express");
const { httpPostOrder, httpGetOrders } = require("./orders.controller");

const ordersRouter = express.Router();

ordersRouter.get('/', httpGetOrders);
ordersRouter.post('/', httpPostOrder);

module.exports = ordersRouter;