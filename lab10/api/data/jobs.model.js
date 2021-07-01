const mongoose=require("mongoose")


const jobsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    }

})

mongoose.model("Jobs",jobsSchema,"jobs_listing")