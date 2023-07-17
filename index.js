const express = require('express')
const app = express()
const {connection} = require('./db')
const cors = require('cors')
const {userRouter} = require('./routes/user.routes')
const {quizRouter} = require("./routes/quiz.routes")
require('dotenv').config()
app.use(cors())
app.use(express.json())


app.get('/',(req,res) => {
    res.send('Home Page!!!')
})

app.use('/user',userRouter)
app.use('/quiz',quizRouter)

app.listen(process.env.PORT, async() => {
    try{
        await connection
console.log('Connected to db')
    }
    catch(err){
        console.log(err)
    }
    console.log("Running server")
})




