const mongoose=require("./db")
const express=require("express");
const gamecontroller=require("./controllers/games.controller");

const app=express();

app.get("/games",gamecontroller.getAll);

app.get("/games/:id",gamecontroller.getGame)

const server=app.listen(3000,function(){
    console.log("listening to port "+server.address().port);
})

