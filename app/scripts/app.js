'use strict';

/**
 * @ngdoc overview
 * @name sewbotApp
 * @description
 * # sewbotApp
 *
 * Main module of the application.
 */
angular
  .module('sewbotApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
