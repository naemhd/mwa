angular.module("meanJobs").controller("CreateJob",CreateJob)

function CreateJob(JobsFactory){
    const vm=this;
    vm.isSubmitted=false;


    vm.addJob=function(){
        const postData={
            title:vm.title,
            salary:vm.salary,
            description:vm.description,
            experience:vm.experience,
            postDate:vm.postDate
        }

        if(vm.jobForm.$valid){
            JobsFactory.postJob(postData).then(function(response){
                console.log("jon saved");
            }).catch(function(error){
                console.log("job not saved",error);
            })

        }else{
            vm.isSubmitted=true;
        }
    }

}