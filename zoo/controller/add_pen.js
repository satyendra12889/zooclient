var AddPenController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";
   $scope.name = "hi";

   // get animal availale 

   $scope.addPen = function($event){
   	// add pen witj animals 
   	// check for failure 
   }

    $scope.back = function(){
    	$state.go('zoodetail', {param1: {}});
   }


};



AddPenController.$inject = ['$scope', '$http', "$state"];