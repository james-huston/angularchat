'use strict';

angular.module('angularTwoApp')
  .controller('LoginCtrl', function ($scope, $location) {
  	$scope.user = {};
  	$scope.login = function () {
  		if ($scope.user.username === 'jhuston' && $scope.user.password === 'letmein') {
  			$location.path('/chat');
  		}
  	};
  });
