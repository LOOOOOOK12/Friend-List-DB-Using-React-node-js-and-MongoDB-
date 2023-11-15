const mongoose = require('mongoose')

const FriendsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your friends name"]
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required:true,
        },
        about: {
            type: String,
            required: true
        }
    }
)

const FriendsModel = mongoose.model("friends", FriendsSchema)
module.exports = FriendsModel;