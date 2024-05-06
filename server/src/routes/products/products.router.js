const express = require("express");
const { httpGetAllProducts } = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);

module.exports = productsRouter;