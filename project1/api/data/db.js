const mongoose=require("mongoose")
require("./jobs.model")

const dbUrl="mongodb://127.0.0.1/jobs";

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})



module.exports=mongoose;