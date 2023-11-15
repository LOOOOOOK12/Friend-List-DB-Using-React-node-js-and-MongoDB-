const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FriendsModel = require('./Models/Friends')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://l27.0.0.1:27017/Friends')

app.post('/add', (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const age = req.body.age;
    const about = req.body.about;
    FriendsModel.create({
        name: name,
        gender: gender,
        age: age,
        about: about
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})
app.listen(3001, () => {
    console.log("Server is Running")
})