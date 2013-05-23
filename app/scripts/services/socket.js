'use strict';

angular.module('angularTwoApp')
  .factory('socket', function ($rootScope) {

    var socket = io.connect('http://localhost:8080');

    var emitFunction = function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, arguments);
          }
        });
      });
    };

    var onFunction = function (eventName, callback) {
      socket.on(eventName, function () {
        $rootScope.$apply(function () {
          callback.apply(socket, arguments);
        });
      });
    };

    return {
      on: onFunction, 
      emit: emitFunction
    };
  });
