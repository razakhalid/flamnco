function addProductToCart(req, res) {
    const product = req.body.product;
    const { product_id } = product || {};
    if (!product) return res.status(500).json({ message: "Product missing" });

    if (!req.session.productsInCart) req.session.productsInCart = {};
    if (!req.session.productsInCart[product_id]) {
        req.session.productsInCart[product_id] = { ...product, product_qty_in_cart: 1 };
    } else {
        req.session.productsInCart[product_id][product_qty_in_cart]++;
    }

    return res.status(200).json({
        message: `${product.product_name} added to cart`,
        productsInCart: req.session.productsInCart || { "EG-1A2B3C4D": 1 }
    });
}

module.exports = {
    addProductToCart
}