const { getAllProducts } = require("../../models/products.model");
async function httpGetAllProducts(req, res) {
    return res.status(200).json(await getAllProducts());
}

module.exports = {
    httpGetAllProducts
}