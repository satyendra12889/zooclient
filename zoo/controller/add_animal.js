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
  url: "http://localhost:8081/zoo-management/type/list"
}).then(function successCallback(response) {
     console.log(response);
    $scope.animalType = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });

   $scope.addAnimal = function(){
   	// add animal to zoo
   }

    $scope.back = function(){
    	$state.go('zoodetail', {param1: {}});
   }


};



AddAnimalController.$inject = ['$scope', '$http','$state'];
 