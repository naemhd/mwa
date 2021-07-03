angular.module("meanJobs").controller("jobsDetail",jobsDetail)

function jobsDetail(JobsFactory,$routeParams){
    const vm=this;
    vm.title="Detail page"
    JobsFactory.getOne($routeParams.jobId).then(function(response){
        console.log(response);
        vm.job=response
    })
}