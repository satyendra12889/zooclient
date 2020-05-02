var PegDetailController = function($scope, $http, $state) {
   
   $scope.animals = [{'name':"n1"}, {'name':"n2"}];
   $scope.pens = [{'name':"n1", 'animal':{'name':"name1"}}, {'name':"n2", 'animal':{'name':"n"}}];
   $scope.temp = "hh";
   $scope.name = "Zoo Name";

   if($state.params.penId!=null){

      $http({
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/zoo/'+$stateParams.zooId,
}).then(function successCallback(response) {
    $scope.animals = response.data.allAnimals;
    $scope.name = response.data.zooName;
    $scope.pens = response.data.allPens;
     console.log(response);
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

   }else{
      $state.go('main', {});
   }

   $scope.addPen = function($event, data){
   	$state.go('addpen', {param1: data});
   }

   $scope.addAnimal = function($event, data){
   	$state.go('addanimal', {param1: data});
   }
};

PegDetailController.$inject = ['$scope', '$http','$state'];
