var AddAnimalController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";
   $scope.name = "hi";

   $scope.areas = [];
   $scope.pegs = [];
   $scope.animalType = [];

   // http call  to get valid to get data for animal page 
   // animal type 
   // pen available 
  // http://localhost:8081/zoo-management/type/list

  
$http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/animal/all"
}).then(function successCallback(response) {
    $scope.animal = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });

$http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/area"
}).then(function successCallback(response) {
    $scope.areas = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });

   $scope.addAnimal = function(){
   	// add animal to zoo

   	$http({
  method: 'POST',
  url: "http://localhost:8081/zoo-management/stock/add",
  data: {
  "animaId": $scope.selectedAnimal.animalId,
  "name": $scope.animalName,
  "penId": ($scope.selectedpen!=null?$scope.selectedpen.pegId:-1)
  }
}).then(function successCallback(response) {
    alert(response.data.msg);
    $state.go('main', {});
  }, function errorCallback(response) {
    console.log(response);
    
    });
   }

    $scope.back = function(){
    	$state.go('main', {});
   }

 $scope.changesArea = function($event, value){
	$http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/area/available/"+$scope.selectedArea.areaId
}).then(function successCallback(response) {
    $scope.pen = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });
console.log(value);
 }  


};



AddAnimalController.$inject = ['$scope', '$http','$state'];
 