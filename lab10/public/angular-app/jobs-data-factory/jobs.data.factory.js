angular.module("meanJobs").factory("JobsFactory",JobsFactory)

function JobsFactory($http){
    return {
        getAll:getAll,
        getOne:getOne,
        postJob:postJob
    }
    function getAll(){
        return $http.get("/api/jobs").then(completed).catch(failed);
    }
    function getOne(jobId){
        return $http.get("/api/jobs/"+jobId).then(completed).catch(failed);
    }
    function postJob(postData){
        return $http.post("/api/jobs",postData).then(completed).catch(failed);
    }
    function completed(response){
        console.log(response);
        return response.data;
    }
    function failed(error){
        console.log(error);
        return error.status.statusText
    }
}