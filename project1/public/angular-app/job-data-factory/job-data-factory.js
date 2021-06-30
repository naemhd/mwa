angular.module("meanJobs").factory("JobDataFactory", JobDataFactory);
function JobDataFactory($http) {
    return {
        getAllJobs: getAllJobs
    };
    function getAllJobs() {
        return $http.get("http://localhost:3000/api/jobs").then(complete).catch(failed);
    }
    function complete(response) {
        console.log(response.data);
        return response.data
            ;
    }
    function failed(error) {
        return error.status.statusText
            ;
    }
}