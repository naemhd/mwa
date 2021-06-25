const mongoose=require("./db")
const express=require("express");
const studentcontroller=require("./controllers/student.controller");

const app=express();

app.get("/students",studentcontroller.getAll);

app.get("/students/:id",studentcontroller.getStudent)

app.get("/students/:id/courses",studentcontroller.getStudentCourses)

app.get("/students/:id/courses/:course_id",studentcontroller.getStudentcourse)

const server=app.listen(3000,function(){
    console.log("listening to port "+server.address().port);
})

