const express =require("express")
const myRouter=require("./api/routes")

const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))


app.use(function(req,res,next){
    console.log("logging requests.... "+req.url);
    next();
})

app.use("/",myRouter)


app.set("port",3000)
const server=app.listen(app.get("port"),function(){
    console.log("listinging to port "+server.address().port);
})