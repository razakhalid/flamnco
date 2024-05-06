const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 3
});

async function connect() {
    return await pool.connect((err) => {
        if (err) {
            console.error(`Could not connect to db: ${err}`);
        }  else {
            console.log('Connected to db');
        }
    });
}

async function disconnect() {
    return await pool.end();
}

function query(query) {
    try {
        return pool.query(query);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    connect,
    disconnect,
    query
}



