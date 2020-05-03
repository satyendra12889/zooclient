var AddAreaController = function($scope, $http, $state) {
  	// get all zoo 

   $scope.addArea = function($event){
   		// http call  then back to zoo detail

   		 $http({
  method: 'POST',
  url: 'http://localhost:8081/zoo-management/area/add',
  data:{'name':$scope.areaName,
		'qty':$scope.qty}
}).then(function successCallback(response) {
    
    $state.go('main', {});
     
  }, function errorCallback(response) {
    
    console.log(response);
    });
   }

    $scope.back = function(){
    	$state.go('main', {});
   }

};



AddAreaController.$inject = ['$scope', '$http', '$state'];
 