angular.module("meanJobs").controller("jobsListing",jobsListing)

function jobsListing(JobsFactory){
    const vm=this;
    vm.title="Listing page"
    JobsFactory.getAll().then(function(response){
        console.log(response);
        vm.jobs=response
    })
}