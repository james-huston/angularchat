'use strict';

angular.module('angularTwoApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
      })
      .when('/chat', {
        templateUrl: 'views/chatMain.html',
        controller: 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
