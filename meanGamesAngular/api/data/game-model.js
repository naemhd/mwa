const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year:Number,
    price: Number,
    designer: String,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    }
});


mongoose.model("Game", gameSchema, "games");

module.exports=mongoose;