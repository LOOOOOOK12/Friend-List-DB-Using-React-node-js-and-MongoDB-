const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FriendsModel = require('./Models/Friends')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Friends")

//gawa friend
app.post("/createFriend", (req,res) => {
    FriendsModel.create(req.body)
    .then(friends => res.json(friends))
    .catch(error => res.json(error))
})

//kunin yung friends
app.get('/',(req, res) => {
    FriendsModel.find({})
    .then(friends => res.json(friends))
    .catch(err => res.json(err))
})

//Pang Update ng friend
app.get('/getFriends/:id', (req, res) =>{
    const id = req.params.id;
    FriendsModel.findById({_id:id})
    .then(friends => res.json(friends))
    .catch(err => res.json(err))
})

//dito iuupdate su friend sa modal
app.put('/updateFriend/:id',(req, res) => {
    const id = req.params.id;
    FriendsModel.findByIdAndUpdate({_id: id},{
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        about: req.body.about})
    .then(friends => res.json(friends))
    .catch(err => res.json(err))
})

//delete su barkada mo
app.delete("/deleteFriend/:id",(req, res) =>{
    const id = req.params.id;
    FriendsModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(error => res.json(error))
})

//pang open lang kung gumagana server
app.listen(3001, () => {
    console.log("Server is Running")
})