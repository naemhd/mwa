angular.module("myApp", ["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "listingController/listingTemplate.html",
        controller: "listingController",
        controllerAs: "listingControl"
    });
}