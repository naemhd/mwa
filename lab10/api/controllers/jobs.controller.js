const db=require("../data/db")
const Jobs=db.model("Jobs")

module.exports.getAllJobs=function(req,res){
    let offset=0;
    let count=10;
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query && req.query.count){
        count=parseInt(req.query.count);
    }
    Jobs.find().skip(offset).limit(count).exec(function(err,jobs){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(jobs){
                console.log(jobs)
                
                res.status(200).json(jobs)
            }else{
                res.status(400).json({message:"error finding jobs"})
            }
        }
    })
}

module.exports.getOneJob=function(req,res){
    Jobs.findById(req.params.jobId).exec(function(err,job){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(job){
                res.status(200).json(job)
            }else{
                res.status(400).json({message:"error finding job"})
            }
        }
    })
}

module.exports.updateOneJob=function(req,res){
    Jobs.findById(req.params.jobId).exec(function(err,job){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(job){
                job.title=req.body.title,
                job.salary=req.body.salary,
                job.location=req.body.location,
                job.description=req.body.description,
                job.experience=req.body.experience,
                job.skills=req.body.skills,
                job.postDate=req.body.postDate,
                job.save(function(err,updatedJob){
                    if(err){
                        res.status(500).json({message:"error updating job"})
                    }else{
                        res.status(201).json({updatedJob})
                    }
                })
            }else{
                res.status(404).json({message:"error finding job"})
            }
        }
    })
}

module.exports.deleteOneJob=function(req,res){
    Jobs.findById(req.params.jobId).exec(function(err,job){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(job){
                job.remove();
                res.status(200).json({status:"job removed"})
            }else{
                res.status(400).json({message:"error finding job"})
            }
        }
    })
}

module.exports.createJob=function(req,res){

    const newJob={
        title:req.body.title,
        salary:req.body.salary,
        location:req.body.location,
        description:req.body.description,
        experience:req.body.experience,
        skills:req.body.skills,
        postDate:req.body.postDate
    }

    console.log(newJob);

    Jobs.create(newJob,function(err,newDbJob){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(newDbJob){
                res.status(201).json({newDbJob})
            }else{
                res.status(400).json({message:"error inserting new game"})
            }
        }
    })
}