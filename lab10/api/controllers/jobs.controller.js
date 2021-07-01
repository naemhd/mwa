const db=require("../data/db")
const Jobs=db.model("Jobs")

module.exports.getAllJobs=function(req,res){
    Jobs.find().exec(function(err,jobs){
        res.json(jobs);
    })
}