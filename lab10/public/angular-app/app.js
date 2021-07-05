angular.module("meanJobs",["ngRoute"]).config(config)

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"angular-app/jobs-listing/listing.html",
        controller:"jobsListing",
        controllerAs:"vm"
    })
    .when("/jobs/create",{
        templateUrl:"angular-app/create-job/create.html",
        controller:"CreateJob",
        controllerAs:"vm"
    })
    .when("/jobs/:jobId",{
        templateUrl:"angular-app/jobs-detail/detail.html",
        controller:"jobsDetail",
        controllerAs:"vm"
    })
    
    .otherwise({
        redirectTo:"/"
    })

}