import { addProductToCart } from '../../models/cart.model';
function httpAddProductToCart(req, res) {
    return addProductToCart(req, res);
}

function httpGetProductsInCart(req, res) {
    return res.status(200).json({
        productsInCart: req.session.productsInCart || { "EG-1A2B3C4D": 1 }
    });
}

module.exports = {
    httpAddProductToCart,
    httpGetProductsInCart
}