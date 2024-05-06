const db = require("../services/db");
async function getAllProducts() {
    const { rows } = await db.query(`
        select * from product limit 10;  
    `);
    return rows;
}

module.exports = {
    getAllProducts
}