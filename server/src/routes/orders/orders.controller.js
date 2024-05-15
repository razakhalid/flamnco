const { postOrder } = require("../../models/orders.model");
async function httpPostOrder(req, res) {
    try {
        return await postOrder(req.body);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports = {
    httpPostOrder
}