var AddZooController = function($scope, $http, $state) {
  	// get all zoo 

   $scope.addZoo = function($event){
   		// http call  then back to zoo detail

   		 $http({
  method: 'POST',
  url: 'http://localhost:8081/zoo-management/zoo/add',
  data:{'name':$scope.zooName}
}).then(function successCallback(response) {
    
    $state.go('main', {});
     console.log(response);
  }, function errorCallback(response) {
    
    console.log(response);
    });
   }

    $scope.back = function(){
    	$state.go('main', {});
   }

};



AddZooController.$inject = ['$scope', '$http', '$state'];
 