const express = require("express");
const { httpAddProductToCart, httpGetProductsInCart } = require("./cart.controller");

const cartRouter = express.Router();

cartRouter.get('/', httpGetProductsInCart);
cartRouter.post('/', httpAddProductToCart);

module.exports = cartRouter;