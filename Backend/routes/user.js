const express = require('express')

const pool = require('../db/pool')
const createResult = require('../utils/result')
//const config = require('../utils/config')

const router = express.Router()

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    const sql = `INSERT INTO users(full_name,email,password) VALUES(?,?,?)`
    try {
        const data = await pool.query(sql, [name, email,password])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    try {
        const data = await pool.query(sql, [email])
        const users = data[0][0]
        if (users)
            res.send(createResult(users))
        else
            res.send(createResult(null,'Invalid email or password'))

    } catch (error) {
        res.send(createResult(null,error))
    }
})

router.put('/', async (req, res) => {
    const { full_name, email } = req.body
    try {
        const sql = 'UPDATE users SET full_name = ? where email = ?'
        const data = await pool.query(sql, [full_name, email])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

router.delete('/', async (req, res) => {
    const {user_id} = req.body
    const sql = 'DELETE FROM users WHERE user_id = ?'
    try {
        const data = await pool.query(sql, [user_id])
        res.send(createResult(data[0]))
    } catch (error) {
        res.send(createResult(null, error))
    }
})

module.exports = router