const { response } = require('express');
const mongoose = require('mongoose');
const Student = mongoose.model("Student");


module.exports.getAll = (req, res) => {
    count = 10;
    if (req.query.limit) {
        count = parseInt(req.query.limit);
    }
    Student.find().limit(count).exec((err, students) => {
        console.log("This Is Students (docs)", students);
        res.status(200).json(students);
    })
}

module.exports.getStudent = (req, res) => {
    Student.find({ "_id": req.params.studentId }).limit(1).exec((err, students) => {
        console.log("This Is Students (docs)", students);
        res.status(200).json(students);
    })
}

module.exports.createStudent = (req, res) => {
    Student.create({
        name: req.body.name,
        gpa: parseFloat(req.body.gpa),
        
    },
        function (err, student) {
            if (err) {
                console.log("Error creating the student");
                res.status(400).json(err);
            } else {
                console.log("Student created successfully", student);
                res.status(201).json(student);
            }
        });
}

module.exports.updateStudent = function (req, res) {
    const studentId = req.params.studentId;
    Student.findById(studentId).select("-reviews -publisher").exec(function (err, student) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding student");
            response.status = 500;
            response.message = err;
        } else if (!student) {
            response.status = 404;
            response.message = { "message": "Student ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            student.name = req.body.name;
            student.gpa = parseInt(req.body.gpa);
            
            student.save(function (err, updatedStudent) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};


module.exports.deleteStudent = function (req, res) {
    const studentId = req.params.studentId;
    console.log("DELETE studentId ", studentId);
    Student.findByIdAndRemove(studentId).exec(function (err, deletedStudent) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding student");
            response.status = 500;
            response.message = err;
        } else if (!deletedStudent) {
            response.status = 404;
            response.message = { "message": "Student ID not found" };
        }
        res.status(response.status).json(response.message);
    });
};
