const { postOrder, getOrders} = require("../../models/orders.model");

async function httpGetOrders(req, res) {
    try {
        const orders = await getOrders();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

async function httpPostOrder(req, res) {
    try {
        const { result, orderId } = await postOrder(req.body);
        return res.status(200).json({ message: "Order placed successfully!", orderId });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports = {
    httpGetOrders,
    httpPostOrder
}