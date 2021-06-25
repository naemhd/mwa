const { response } = require('express');
const mongoose=require('mongoose');
const Student=mongoose.model("Student");


module.exports.getAll=(req,res)=>{
    count=10;
    if(req.query.limit){
        count=parseInt(req.query.limit);
    }
    
    Student.find().limit(count).exec((err,Students)=>{
        console.log("This Is Students (docs)",Students);
        res.status(200).json(Students);
    })

}


module.exports.getStudent=(req,res)=>{
    
    Student.find({"_id":req.params.id}).limit(1).exec((err,Students)=>{
        console.log("This Is Students (docs)",Students);
        res.status(200).json(Students);
    })

}


module.exports.getStudentCourses=(req,res)=>{
    
    Student.find({"_id":req.params.id}).limit(1).select("courses").exec((err,Students)=>{
        console.log("This Is Students (docs)",Students);
        res.status(200).json(Students);
    })

}

module.exports.getStudentcourse=(req,res)=>{
    
    Student.find({"_id":req.params.id}).limit(1).exec((err,student)=>{
        console.log(student.courses);
        res.status(200).json(student.courses.id(req.params.course_id));
    })

}