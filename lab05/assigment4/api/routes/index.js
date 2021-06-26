const express=require("express")

const router=express.Router();

const studentController=require("../controllers/students.controller")

router.route("/students")
    .get(studentController.getAll)
    .post(studentController.createStudent);
router.route("/students/:studentId")
    .get(studentController.getStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports=router;

