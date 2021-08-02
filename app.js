const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const studentRouter = require('./routes/students')
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send("Studentrouter MongoDB exercise")
})

app.use(studentRouter)

app.listen(port, console.log(`Server listening on port ${port}`))