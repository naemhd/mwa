const { response } = require('express');
const mongoose=require('mongoose');
const Game=mongoose.model("Game");


module.exports.getAll=(req,res)=>{
    count=10;
    if(req.query.limit){
        count=parseInt(req.query.limit);
    }
    
    Game.find().limit(count).exec((err,games)=>{
        console.log("This Is Games (docs)",games);
        res.status(200).json(games);
    })

}


module.exports.getGame=(req,res)=>{
    
    Game.find({"_id":req.params.id}).limit(1).exec((err,games)=>{
        console.log("This Is Games (docs)",games);
        res.status(200).json(games);
    })

}