'use strict';

describe('Directive: focusinput', function () {
  beforeEach(module('angularTwoApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<input type="text" id="blargme" /><button focusinput="blargme">Focus</button>');
    element = $compile(element)($rootScope);
  }));
});
