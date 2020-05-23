var AddLocationController = function($scope, $http, $state, $stateParams) {
   
   $scope.data = {};
   $scope.temp = "";
   $scope.name = "";

   $scope.areas = [];
   $scope.pegs = [];
   $scope.animalType = [];

   // http call  to get valid to get data for animal page 
   // animal type 
   // pen available 
  // http://localhost:8081/zoo-management/type/list

$http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/area"
}).then(function successCallback(response) {
    $scope.areas = response.data;
  }, function errorCallback(response) {
    console.log(response);
    
    });

   $scope.addLocation = function(){
   	// add animal to zoo
if($stateParams.stockId!=null){

  $http({
  method: 'POST',
  url: "http://localhost:8081/zoo-management/stock/update",
  data: {
  "id": $stateParams.stockId,
  "penId": ($scope.selectedpen!=null?$scope.selectedpen.pegId:-1)
  }
}).then(function successCallback(response) {
    alert(response.data.msg);
    $state.go('main', {});
  }, function errorCallback(response) {
    console.log(response);
    
    });

}else{
  $state.go('main', {});
}
   	
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



AddLocationController.$inject = ['$scope', '$http','$state', '$stateParams'];
 