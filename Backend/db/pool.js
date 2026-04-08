const mysql2 = require('mysql2/promise')
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '09082003',
    database: 'expense_tracker'
})

module.exports = pool