angular.module("myApp").controller("listingController", listingController);

function listingController($http) {
    const vm = this;
    console.log("vv");
    $http.get("https://cat-fact.herokuapp.com/facts?animal_type=cat").then(function (response) {
        console.log("bbb");
        vm.data = response.data;
    });

}
