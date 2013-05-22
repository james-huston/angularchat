'use strict';

angular.module('angularTwoApp')
  .factory('User', ['$resource', function ($resource) {
    return $resource(
      '/api/user/:userId',
      {userId: '@userId'}
    );
  }]);
