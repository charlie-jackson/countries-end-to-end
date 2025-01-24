const { Pool } = require('pg') //Pool is a constructor on the dependency

const db = new Pool({
    connectionString: process.env.DB_URL,
})

module.exports = db