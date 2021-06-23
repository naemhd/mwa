const express=require("express");

const app=express();

app.set("port",5050);

const server=app.listen(app.get("port"),function(){
    console.log("Listing to port ", server.address().port);
});