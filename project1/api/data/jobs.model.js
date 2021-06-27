const mongoose=require("mongoose");

const skillSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const jobsSchema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    skills:[skillSchema]
})

mongoose.model("Job",jobsSchema,"listings")

module.exports=jobsSchema