angular.module("meanCities").controller("Details",Details)

function Details(CitiesFactory,$routeParams){
    const vm=this;
    vm.title="Details page"
    CitiesFactory.getOne($routeParams.cityId).then(function(response){
        console.log(response);
        vm.city=response
    })
}