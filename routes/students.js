const student = require("../models/student");

const express = require("express");
const studentRouter = express.Router();
studentRouter.use(express.urlencoded())

//posting the specific student John Doe
studentRouter.post('/api/students', (req, res) => {
    Student.create({ name: "Doe", first_name: "John", email: "john@doe.com" })
        .then(student => res.json(student))
        .catch((err) => res.json(err));
})

//getting all entries from the database
studentRouter.get("/api/students", (req, res) => {
    Student.find()
        .then((student) => res.json(student))
        .catch((err) => res.json(err));
});

//updating John with Bob
studentRouter.put('/api/students', (req, res) => {
    Student.updateMany({ first_name: "John" }, { $set: { first_name: "Bob" } })
        .then(student => res.json(student))
        .catch((err) => res.json(err));
})



module.exports = studentRouter;