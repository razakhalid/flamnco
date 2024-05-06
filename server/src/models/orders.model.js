const db = require("../services/db");
const { v4: uuidv4 } = require("uuid");
async function postOrder(order) {
    console.log(order);
}

module.exports = {
    postOrder
}