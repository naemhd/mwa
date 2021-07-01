const mongoose=require("mongoose")
require("./jobs.model")

const dbUrl="mongodb://127.0.0.1:27017/jobs_db"

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.on("connected",function(){
    console.log("connected to db...");
})

mongoose.connection.on("disconnected",function(){
    console.log("disconnected from db...");
})


module.exports=mongoose;