var ZooController = function($scope, $http, $state) {
   
   $scope.data = ["hh", "h1"];
   $scope.temp = "hh";



   $scope.name = "hi";

   $http({
  method: 'GET',
  url: 'http://localhost:8081/zoo-management/zoo'
}).then(function successCallback(response) {
    $scope.data = response.data;
     console.log(response);
  }, function errorCallback(response) {
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



   $scope.zooClicked = function($event, data){
   	$state.go('zoodetail', {zooId: data.zooId});
   }

   $scope.addZooClicked = function(){
   	$state.go('addzoo', {});
   }
};

ZooController.$inject = ['$scope', '$http','$state'];
