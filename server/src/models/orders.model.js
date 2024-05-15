const db = require("../services/db");
const { v4 } = require("uuid");
async function postOrder(order) {
    const { firstNameShipping, lastNameShipping, orderTotal, productsInCart } = order;
    const customerName = `${firstNameShipping} ${lastNameShipping}`;
    const orderProductIds = productsInCart.map(({ product_id }) => product_id).join(', ');
    const orderId = v4().slice(0, 6).toUpperCase();

    console.log(orderTotal);
    try {
        return await db.query(`insert into ordertbl values (
        '${orderId}',
        ${orderTotal},
        '${orderProductIds}',
        '${customerName}'
    );`);
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    postOrder
}