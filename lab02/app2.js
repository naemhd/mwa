const express=require("express");
const path=require("path");

const app=express();

app.use("/",express.static(path.join(__dirname,"public")));
app.set("port",5050);


const server=app.listen(app.get("port"),function(){
    console.log("Listing to port ", server.address().port);
});