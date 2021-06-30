angular.module("meanJobs", ["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/", {
        templateURL: "angular-app/job-list/job-list.html",
        controller: "JobsController",
        controllerAs: "vm"
    });
}