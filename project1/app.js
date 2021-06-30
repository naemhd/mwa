const express =require("express")
const myRouter=require("./api/routes")
const path=require("path")

const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))


app.use(function(req,res,next){
    console.log("logging requests.... "+req.url);
    next();
})

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.use("/api",myRouter)

app.use("/", express.static(path.join(__dirname, "public")));


app.set("port",3000)
const server=app.listen(app.get("port"),function(){
    console.log("listinging to port "+server.address().port);
})