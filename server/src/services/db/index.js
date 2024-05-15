const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgres://flamnco-main-db-03e1953ab9fc095ea:RySAx3M8WWzJpwDTns4phKphtFFURr@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/flamnco-main-db-03e1953ab9fc095ea",
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



