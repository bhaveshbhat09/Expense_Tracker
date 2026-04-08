const express = require('express')
const cors = require('cors')

//routes
const userRouter = require('./routes/user')
const expenseRouter = require('./routes/expense')

const app = express()


app.use(cors())
app.use(express.json())
app.use('/user', userRouter)
app.use('/expense', expenseRouter)


app.listen(4000, '127.0.0.1', () => {
    console.log('server started at port 4000')
})