angular.module("meanCities",["ngRoute"]).config(config)

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"angular-app/listing/listing.html",
        controller:"Listing",
        controllerAs:"vm"
    })
    .when("/cities/create",{
        templateUrl:"angular-app/create/create.html",
        controller:"Create",
        controllerAs:"vm"
    })
    .when("/cities/:cityId",{
        templateUrl:"angular-app/details/detail.html",
        controller:"Details",
        controllerAs:"vm"
    })
    .otherwise({
        redirectTo:"/"
    })

}