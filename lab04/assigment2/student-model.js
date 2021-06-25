const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema({
    id:Number,
    name:String
});

const studentSchema = mongoose.Schema({
    name:String,
    gpa:Number,
    courses:[coursesSchema]
});


mongoose.model("Student", studentSchema, "Students");

module.exports=mongoose;