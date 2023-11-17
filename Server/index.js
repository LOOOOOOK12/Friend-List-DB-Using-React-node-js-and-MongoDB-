const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FriendsModel = require('./Models/Friends')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Friends")

app.post("/createFriend", (req,res) => {
    FriendsModel.create(req.body)
    .then(friends => res.json(friends))
    .catch(error => res.json(error))
})

app.get('/',(req, res) => {
    FriendsModel.find({})
    .then(friends => res.json(friends))
    .catch(err => res.json(err))
})

app.delete("/deleteFriend/:id",(req, res) =>{
    const id = req.params.id;
    FriendsModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(error => res.json(error))

})


app.listen(3001, () => {
    console.log("Server is Running")
})