angular.module("meanCities").factory("CitiesFactory",CitiesFactory)

function CitiesFactory($http){
    return {
        getAll:getAll,
        getOne:getOne,
        postNew:postNew,
        deleteOne:deleteOne
    }
    function getAll(query){
        return $http.get("/api/cities",{params:query}).then(completed).catch(failed);
    }
    function getOne(cityId){
        return $http.get("/api/cities/"+cityId).then(completed).catch(failed);
    }
    function postNew(postData){
        return $http.post("/api/cities",postData).then(completed).catch(failed);
    }
    function deleteOne(cityId){
        return $http.delete("/api/cities/"+cityId).then(completed).catch(failed);
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