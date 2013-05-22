'use strict';

angular.module('angularTwoApp')
  .directive('focusinput', function () {
    return {
      link: function postLink(scope, element, attrs) {
        element.bind('click', function() {
          angular.element(attrs.focusinput).focus();
        });
      }
    };
  });
