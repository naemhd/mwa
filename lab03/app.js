const express=require("express");
const conn=require("./dbconnections")

conn.opend();

const app=express();

app.get("/",function(req,res){
    let limit=4;
    if(req.query.limit){
        
        limit=parseInt(req.query.limit)
        if(limit>8){
            limit=8;
        }
        console.log(limit);
    }
    
    let db = conn.get();
    // console.log(db);

    let colleciton = db.collection("games");
    
    colleciton.find().limit(limit).toArray(function(err, docs) {
        // console.log("Found games", docs);
        res.status(200).json(docs);
        });

});


app.set("port",5050);

const server=app.listen(app.get("port"),function(){
    console.log("Listing to port ", server.address().port);
});





// .find().toArray(function(err,docs){
// console.log docs
