angular.module("meanJobs", ["ngRoute"])
    .controller("JobsController", JobsController);
function JobsController(JobDataFactory) {
    const vm = this;
    vm.title = "Mean Jobs App";
    JobDataFactory.getAllJobs().then(function(response) {
        vm.jobs= response;
    });
}