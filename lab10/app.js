const express=require("express")
const myRouter=require("./api/routes")
const path=require("path")

const app=express();

app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))


app.set("port",5000)

app.use(function(req,res,next){
    console.log("logging...",req.url);
    next();
})

app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use("/",express.static(path.join(__dirname,"public")));


app.use("/api",myRouter)





const server=app.listen(app.get("port"),function(){
    console.log("listing to port...",server.address().port);
})