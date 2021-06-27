const mongoose=require("../data/db")
const Job=mongoose.model("Job")

module.exports.getAllJobs=function(req,res){

    Job.find().exec(function(err,jobs){
        res.json(jobs)

    })
}

module.exports.getJob=function(req,res){
    Job.findOne({"_id":req.params.jobId}).exec(function(err,job){
        res.json(job);

    });
}

module.exports.createJob=function(req,res){
    let job={
        title:req.body.title,
        age:parseInt(req.body.age)
    }
console.log(job);
    Job.create(job,function(err,job){
        if(err){
            res.status(400).send(err);
        }else{
            if(job){
                res.json(job);
            }else{
                res.status(500).send("something wrong happened");
            }   
        }
    })
}

module.exports.updateJob=(req,res) => {

    Job.findOne({"_id":req.params.jobId}).exec(function(err,job){
        if(err){
            res.status(400).send(err);
        }else{
            if(job){
                console.log(job);
                job.title=req.body.title;
                job.age=req.body.age;
                job.save(function (err,updatedJob) {
                    res.json(updatedJob);
                    
                })

            }else{
                res.status(200).send("job not found");
            }
        }
    })
}

module.exports.deleteJob=(req,res)=>{
    Job.findByIdAndRemove({"_id":req.params.jobId}).exec(function(err,job){
        let response={status:204,message:"job deleted"};
        if(err){
            response.status=500;
            response.message=err;
        }else if(!job){
            response.status=400;
            response.message="job not found";
        }

        res.status(response.status).json(response);
    })
}

module.exports.getAllSkills=(req,res)=>{
    Job.findById(req.params.jobId).select("skills").exec(function(err,job){
        let response={status:200,message:"job skill created"};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            if(!job){
                response.status=404;
                response.message="job not found";
            }else{
                res.status(response.status).json(job.skills);
            }

        }
        res.status(response.status).json(response);
});
}

module.exports.getSkill=(req,res)=>{
    Job.findOne({"_id":req.params.jobId,"skills._id":req.params.skillId}).select("skills").exec(function(err,job){
        let response={status:200,message:"job skill"};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            if(!job){
                response.status=404;
                response.message="job not found";
            }else{
                console.log(job)
                response.message=job.skills.length>0?job.skills[0]:[]
            }

        }
        res.status(response.status).json(response.message);
});
}

module.exports.addSkills=(req,res)=>{
    Job.findById(req.params.jobId).select("skills").exec(function(err,job){
        let response={status:201,message:"job skill created"};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            if(!job){
                response.status=404;
                response.message="job not found";
            }else{
                if(!job.skills){
                    job.skills=[{name:req.body.name}];
                }else{
                    job.skills.push({name:req.body.name})
                    
                }
                job.save(function(err,updatedJob){
                    res.status(response.status).json(response);
                })
                
            }
        }

    })
}

module.exports.updateSkill=(req,res)=>{
    Job.findOne({"_id":req.params.jobId,"skills._id":req.params.skillId}).select("skills").exec(function(err,job){
        let response={status:200,message:"job skill updated"};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            if(!job){
                response.status=404;
                response.message="job not found";
            }else{
                console.log(job)
                if(job.skills.length>0){
                    job.skills[0].name=req.body.name;
                    job.save(function(err,updatedJob){
                        return res.status(response.status).json(updatedJob);
                    })

                }else{
                    response.status=404;
                    response.message="skill not found";
                }
                
            }

        }
        if(response.status!=200){
            res.status(response.status).json(response);
        }
});
}

module.exports.deleteSkill=(req,res)=>{
    Job.findOne({"_id":req.params.jobId,"skills._id":req.params.skillId}).select("skills").exec(function(err,job){
        let response={status:204,message:"job skill deleted"};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            if(!job){
                response.status=404;
                response.message="job not found";
            }else{
                console.log(job)
                if(job.skills.length>0){
                    job.skills[0].remove();
                    job.save(function(err,updatedJob){
                        res.status(response.status).json(response.message);
                    })
                }
            }

        }
        if(response.status!=204){
            res.status(response.status).json(response.message);
        }
});
}
