const mongoose = require('mongoose')

const FriendsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required:true
        },
        about: {
            type: String,
            required: true
        }
    })

const FriendsModel = mongoose.model("friends", FriendsSchema)
module.exports = FriendsModel;