const express=require("express")
const router=express.Router();
const jobs=require("../controllers/jobs.controller")

router.route("/jobs")
    .get(jobs.getAllJobs)
    .post(jobs.createJob)

router.route("/jobs/:jobId")
    .get(jobs.getJob)
    .post(jobs.getAllJobs)
    .put(jobs.updateJob)
    .patch(jobs.updateJob)
    .delete(jobs.deleteJob)


router.route("/jobs/:jobId/skills")
    .get(jobs.getAllSkills)
    .post(jobs.addSkills)

router.route("/jobs/:jobId/skills/:skillId")
    .get(jobs.getSkill)
    .put(jobs.updateSkill)
    .patch(jobs.updateSkill)
    .delete(jobs.deleteSkill)


module.exports=router;