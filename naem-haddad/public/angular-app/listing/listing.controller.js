angular.module("meanCities").controller("Listing",Listing)

function Listing(CitiesFactory,$routeParams){
    const vm=this;
    let count=10;
    let offset=0;

    vm.title="Listing page"
    CitiesFactory.getAll().then(function(response){
        console.log(response);
        vm.cities=response
    });

    vm.deleteCity=function(cityId){
        console.log(cityId)
        CitiesFactory.deleteOne(cityId).then(function(response){
            console.log("delete..",response);
            CitiesFactory.getAll().then(function(response){
                vm.cities=response;
            })
        })
    }

    vm.search=function(){
        if(vm.searchForm.$valid){
        CitiesFactory.getAll({lat:vm.lat,lng:vm.lng,max:vm.max}).then(function(response){
            vm.cities=response;
            vm.error="";
        })
    }else{
        vm.error="Invalid form submittion"
    }
    }

    vm.next=function(){
        if(offset<0){
            offset=0;
        }
        offset++;
        CitiesFactory.getAll({count:count,offset:offset*count}).then(function(response){
            vm.cities=response;

        })
    }

    vm.back=function(){
        offset--;
        if(offset<0){
            offset=0;
        }
        
        CitiesFactory.getAll({count:count,offset:offset*count}).then(function(response){
            vm.cities=response;
        })
    }
}