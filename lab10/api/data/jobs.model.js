const mongoose=require("mongoose")

const locationSchema=mongoose.Schema({
    coords:{
        type:[Number],
        index:"2dsphere"
    }
})

const skill=mongoose.Schema({
    title:{
        type:String,
        require:true
    }
})

const jobsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:0
    },
    location:locationSchema,
    description:{
        type:String
    },
    experience:{
        type:String
    },
    skills:[skill],
    postDate:{
        type:Date
    }

})

mongoose.model("Jobs",jobsSchema,"jobs_listing")