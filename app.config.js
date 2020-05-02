'use strict';

var app = angular.module('zooApp');


app.constant("constant", config);

app.controller('ZooController', ZooController);
app.controller('ZooDetailController', ZooDetailController);
app.controller('AddAnimalController', AddAnimalController);
app.controller('AddPegController', AddPegController);
app.controller('AddZooController', AddZooController);
app.controller('AnimalDetailController', AnimalDetailController);
app.controller('PegDetailController', PegDetailController);


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
      .state('zoodetail', {
            url: '/zoo/:zooId',
            templateUrl: 'zoo/template/zoo_detail.html',
            controller: 'ZooDetailController'
            // we'll get to this in a bit       
        })
      .state('animaldetail', {
            url: '/animal/detail',
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
      .state('addpen', {
            url: '/pen/addpen',
            templateUrl: 'zoo/template/add_pen.html',
            controller: 'AddPegController'
            // we'll get to this in a bit       
        })
      .state('pendetail', {
            url: '/pen/detail/:penId',
            templateUrl: 'zoo/template/pen_detail.html',
            controller: 'PegDetailController'
            // we'll get to this in a bit       
        })
      .state('addzoo', {
            url: '/addzoo',
            templateUrl: 'zoo/template/add_zoo.html',
            controller: 'AddZooController'
            // we'll get to this in a bit       
        });

});
