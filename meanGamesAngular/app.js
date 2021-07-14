const express=require("express");
require("./api/data/db")
const myRouter=require("./api/routes")

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/",function(req,res,next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use("/api",myRouter)

app.set("port",3000);



app.use(function(req, res, next) {
    //logging requests
    console.log(req.method, req.url);
    console.log('logging...');
    next();
});

const server=app.listen(app.get("port"),function(){
    console.log("listening to port "+server.address().port);
})

