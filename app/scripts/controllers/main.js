
(function() {
  'use strict';

  var mainApp = angular.module('angularTwoApp')
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
})();
