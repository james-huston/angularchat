'use strict';

angular.module('angularTwoApp')
  .controller('ChatCtrl', function ($scope) {
    $scope.chatMessages = [];

    $scope.sendChat = function () {
      $scope.chatMessages.push({content: $scope.newMessage});
      $scope.newMessage = '';
    };
  });