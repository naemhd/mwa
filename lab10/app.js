const express=require("express")
const myRouter=require("./api/routes")

const app=express();

app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))

app.set("port",3000)

app.use("/api",myRouter)


app.use(function(req,res){
    console.log("logging...",req.url)
})


const server=app.listen(app.get("port"),function(){
    console.log("listing to port...",server.address().port);
})