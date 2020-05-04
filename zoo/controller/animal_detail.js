var AnimalDetailController = function($scope, $http, $state, $stateParams) {
   
   $scope.animals = [{'name':"n1"}, {'name':"n2"}];
   $scope.pens = [{'name':"n1", 'animal':{'name':"name1"}}, {'name':"n2", 'animal':{'name':"n"}}];
   $scope.temp = "hh";
   $scope.name = "Zoo Name";

if($stateParams.animalId!=null){

   $http({
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/animal/'+$stateParams.animalId
}).then(function successCallback(response) {
     console.log(response);
    $scope.name = response.data.animalName;
    $scope.type = response.data.type;
    $scope.stock = response.data.stocks;
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}else{
   $state.go('main', {});
}
   $scope.backClicked = function(){
   	$state.go('main', {});
   }

   
   $scope.editClicked = function($event, data){
      $state.go('addLocation', {'stockId':data.stockId});
   }
};

AnimalDetailController.$inject = ['$scope', '$http','$state', '$stateParams'];
