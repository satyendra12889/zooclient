var ZooController = function($scope, $http, $state) {
   
   $scope.areas = [];
   $scope.stock = [];
   $scope.calledFromChange = false;
   $scope.name = "";


 $scope.getDashBoardData = function(){
 	  $http({
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/dashboard',
  params:{
  	animalType:($scope.selectedAnimal!=null?$scope.selectedAnimal.codeId:-1),
  	areaId:($scope.selectedArea!=null?$scope.selectedArea.areaId:-1),
  	penId:($scope.selectedpen!=null?$scope.selectedpen.pegId:-1)
  }

}).then(function successCallback(response) {
     console.log(response);
   if(!$scope.calledFromChange){
    $scope.areas = response.data.allArea;
    $scope.pen = [];
}
$scope.calledFromChange = false;
    $scope.animal = response.data.animal;
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}

$scope.changesArea = function($event, x){
	$scope.calledFromChange = true;
	$scope.getPenForArea();
	$scope.getDashBoardData();
}

$scope.getPenForArea = function(){
	if($scope.selectedArea!=null){
	  $http({
	
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/pen/filled/'+$scope.selectedArea.areaId
 

}).then(function successCallback(response) {
     console.log(response);
    $scope.pen = response.data;
    
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}
}


$scope.reset = function(){
	$scope.selectedAnimal = null;
	$scope.selectedArea = null;
	$scope.selectedpen = null;
	$scope.getDashBoardData();
}
 $http({
  method: 'GET',
  url: "http://localhost:8081/zoo-management/animal/type/list"
}).then(function successCallback(response) {
     console.log(response);
    $scope.animalType = response.data;
    // $scope.pen = null;
    $scope.selectedpen = null;

  }, function errorCallback(response) {
    console.log(response);
    
    });

	$scope.penClicked = function($event, data)
	{
		$scope.calledFromChange = true;
		$scope.getDashBoardData();

	}

	$scope.animalTypeClicked = function($event, data)
	{
		$scope.calledFromChange = true;
		$scope.getDashBoardData();
	}

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

   $scope.getDashBoardData();
};

ZooController.$inject = ['$scope', '$http','$state'];
