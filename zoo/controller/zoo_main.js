var ZooController = function($scope, $http, $state) {
   
   $scope.areas = [];
   $scope.stock = [];



   $scope.name = "hi";

   $http({
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/dashboard'
}).then(function successCallback(response) {
     console.log(response);
    $scope.areas = response.data.allArea;
    $scope.animal = response.data.animal;
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


 $http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/type/list"
}).then(function successCallback(response) {
     console.log(response);
    $scope.animalType = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });



   $scope.areaClicked = function($event, data){
   	$state.go('areadetail', {areaId: data.areaId});
   }

   $scope.animalClicked = function($event, data){
   	$state.go('animaldetail', {animalId: data.animalId});
   }

   $scope.addAnimalClicked = function(){
   	$state.go('addanimal', {});
   }

   $scope.addAreaClicked = function(){
   	$state.go('addarea', {});
   }
};

ZooController.$inject = ['$scope', '$http','$state'];
