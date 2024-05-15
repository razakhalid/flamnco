const db = require("../services/db");
const { v4 } = require("uuid");
async function postOrder(order) {
    const { firstNameShipping, lastNameShipping, orderTotal, productsInCart } = order;
    const customerName = `${firstNameShipping} ${lastNameShipping}`;
    const orderProductIds = productsInCart.map(({ product_id }) => product_id).join(', ');
    const orderId = v4().slice(0, 6).toUpperCase();
    const result = await db.query(`insert into ordertbl values (
            '${orderId}',
            ${orderTotal},
            '${orderProductIds}',
            '${customerName}'
        );`);

    try {
        return { result, orderId };
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function getOrders(){
    try {
        const result = await db.query(`select * from ordertbl`);
        console.log(result);
        return result.rows;
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    getOrders,
    postOrder
}