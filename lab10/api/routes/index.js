const express=require("express")
const jobsController=require("../controllers/jobs.controller")

const router=express.Router();

router.route("/jobs")
    .get(jobsController.getAllJobs)
    .post(jobsController.createJob)

router.route("/jobs/:jobId")
    .get(jobsController.getOneJob)
    .put(jobsController.updateOneJob)
    .delete(jobsController.deleteOneJob)

module.exports=router;