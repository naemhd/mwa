const express=require("express");

const app=express();

app.use(express.urlencoded({extended : false}));

app.set("port",5050);

app.get("/multi/:num1",function(req,res){

    let num1=parseInt(req.params.num1);
    let num2=parseInt(req.query.num2);
    console.log(num1,num2);
    res.json(num1*num2);
});

const server=app.listen(app.get("port"),function(){
    console.log("Listing to port ", server.address().port);
});