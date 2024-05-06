const db = require("../services/db");
async function getAllProducts() {
    const { rows } = await db.query(`
        select * from products;  
    `);
    return rows;
}

module.exports = {
    getAllProducts
}