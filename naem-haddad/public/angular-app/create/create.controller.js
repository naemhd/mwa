angular.module("meanCities").controller("Create",Create)

function Create(CitiesFactory){
    const vm=this;
    vm.isSubmitted=false;


    vm.addCity=function(){
        const postData={
            city:vm.city,
            zip:vm.zip,
            state:vm.state,
            pop:vm.pop,
            loc:[vm.lat,vm.lng]
        }

        if(vm.cityForm.$valid){
            CitiesFactory.postNew(postData).then(function(response){
                console.log("city saved",response);
                vm.saved="City added to database";
                vm.error="";
                vm.city="";
                vm.zip="";
                vm.state="";
                vm.pop="";
                vm.lat="";
                vm.lng="";
            }).catch(function(error){
                console.log("city not saved",error);
            })

        }else{
            vm.isSubmitted=true;
            vm.error="Invalid form submittion"
        }
    }

}