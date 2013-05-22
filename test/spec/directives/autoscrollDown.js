'use strict';

describe('Directive: autoscrollDown', function () {
  beforeEach(module('angularTwoApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    // element = angular.element('<autoscroll-down></autoscroll-down>');
    // element = $compile(element)($rootScope);
    // expect(element.text()).toBe('this is the autoscrollDown directive');
    
    element = angular.element('<div style="height: 20px; overflow: scroll;" autoscroll-down></div>');
    element = $compile(element)($rootScope);

    angular.element('<div>blarg!</div>').appendTo(element);
    angular.element('<div>blarg!</div>').appendTo(element);
    angular.element('<div>blarg!</div>').appendTo(element);

    expect(element.prop('scrollHeight')).toBe(0);
  }));
});
