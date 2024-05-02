const { Pool } = require("pg");

const config = {
    connectionString: process.env.DATABASE_URL,
    max: 3
}

const pool = new Pool(config);

function connect() {
    return pool.connect((err) => {
        if (err) {
            console.error(`Could not connect to db: ${err}`);
        }  else {
            console.log('Connected to db');
        }
    });
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
    query
}