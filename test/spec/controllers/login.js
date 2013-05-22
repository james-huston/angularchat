'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTwoApp'));

  var LoginCtrl,
    location,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  it('it should login my bogus user', function () {
    scope.user = {};
    scope.user.username = 'jhuston';
    scope.user.password = 'letmein';

    scope.login();

    expect(location.path()).toBe('/chat');
  });
});
