const mongoose=require("mongoose")

const citySchema=mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    pop:{
        type:Number
    },
    state:{
        type:String
    },
    loc:[Number]
})

mongoose.model("City",citySchema,"zips")