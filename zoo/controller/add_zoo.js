var AddZooController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";
   $scope.name = "hi";

	// get all zoo 

   $scope.addZoo = function($event){
   		// http call  then back to zoo detail
   }

    $scope.back = function(){
    	$state.go('main', {param1: {}});
   }

};



AddZooController.$inject = ['$scope', '$http', '$state'];
 