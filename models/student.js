const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
    name: String,
    first_name: String,
    email: String,
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Student', Student)