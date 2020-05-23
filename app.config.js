'use strict';

var app = angular.module('zooApp');


app.constant("constant", config);

app.controller('ZooController', ZooController);
app.controller('AreaDetailController', AreaDetailController);
app.controller('AddAnimalController', AddAnimalController);
app.controller('AddAreaController', AddAreaController);
app.controller('AnimalDetailController', AnimalDetailController);
app.controller('AddLocationController', AddLocationController);


app.
  config(
    function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('main');

    $stateProvider
      .state('main', {
            url: '/main',
            templateUrl: 'zoo/template/main.html',
            controller: 'ZooController'
        })
      .state('areadetail', {
            url: '/area/:areaId',
            templateUrl: 'zoo/template/area_detail.html',
            controller: 'AreaDetailController'
            // we'll get to this in a bit       
        })
      .state('animaldetail', {
            url: '/animal/detail/:animalId',
            templateUrl: 'zoo/template/animal_detail.html',
            controller: 'AnimalDetailController'
            // we'll get to this in a bit       
        })
      .state('addanimal', {
            url: '/animal/addanimal',
            templateUrl: 'zoo/template/add_animal.html',
            controller: 'AddAnimalController'
            // we'll get to this in a bit       
        })
      .state('addarea', {
            url: '/addarea',
            templateUrl: 'zoo/template/add_area.html',
            controller: 'AddAreaController'
            // we'll get to this in a bit       
        })
      .state('addLocation', {
            url: '/addLocation/:stockId',
            templateUrl: 'zoo/template/add_location.html',
            controller: 'AddLocationController'
            // we'll get to this in a bit       
        });

});
