'use strict';

/**
 * @ngdoc function
 * @name sewbotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sewbotApp
 */
angular.module('sewbotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
