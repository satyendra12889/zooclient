var PegDetailController = function($scope, $http, $state) {
   
   $scope.animals = [{'name':"n1"}, {'name':"n2"}];
   $scope.pens = [{'name':"n1", 'animal':{'name':"name1"}}, {'name':"n2", 'animal':{'name':"n"}}];
   $scope.temp = "hh";
   $scope.name = "Zoo Name";

   $scope.addPen = function($event, data){
   	$state.go('addpen', {param1: data});
   }

   $scope.addAnimal = function($event, data){
   	$state.go('addanimal', {param1: data});
   }
};

PegDetailController.$inject = ['$scope', '$http','$state'];
