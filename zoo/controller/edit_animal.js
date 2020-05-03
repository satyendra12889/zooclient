var EditAnimalController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";
   $scope.name = "hi";

   // http call  to get valid to get data for animal page 
   // animal type 
   // peg available 

   $scope.addAnimal = function(){
   	// add animal to zoo
   }

    $scope.back = function(){
    	$state.go('zoodetail', {param1: {}});
   }


};



EditAnimalController.$inject = ['$scope', '$http','$state'];
 