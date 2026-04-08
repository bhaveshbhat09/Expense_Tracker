const express = require('express')
const pool = require('../db/pool')
const createResult = require('../utils/result')
const router = express.Router()


router.post('/', async (req, res) => {
    const { amount, category, description } = req.body
    const sql = `INSERT INTO expenses(amount, category, description) VALUES(?,?,?)`
    try {
        const data = await pool.query(sql, [amount, category, description])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

router.put('/', async (req, res) => {
    const { amount, expense_id } = req.body
    try {
        const sql = 'UPDATE expenses SET amount = ? where expense_id = ?'
        const data = await pool.query(sql, [amount, expense_id ])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

router.delete('/', async (req, res) => {
    const {expense_id} = req.body
    const sql = 'DELETE FROM expenses WHERE expense_id = ?'
    try {
        const data = await pool.query(sql, [expense_id])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

module.exports = router