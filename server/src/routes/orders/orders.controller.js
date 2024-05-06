const { postOrder } = require("../../models/orders.model");
async function httpPostOrder(req, res) {
    const { checkout_info } = req.body;
    await postOrder(checkout_info);
    return res.status(200).json();
}

module.exports = {
    httpPostOrder
}