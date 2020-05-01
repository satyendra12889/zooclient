var ZooController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";
   $scope.name = "hi";

   $scope.zooClicked = function($event, data){
   	$state.go('zoodetail', {param1: data});
   }

   $scope.addZooClicked = function($event, data){
   	$state.go('addzoo', {param1: data});
   }
};

ZooController.$inject = ['$scope', '$http','$state'];
