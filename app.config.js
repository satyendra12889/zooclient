'use strict';

angular.
  module('zooApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/main', {
          template: '<phone-list></phone-list>'
        }).
        when('/list/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/main');
    }
  ]);
