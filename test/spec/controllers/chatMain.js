'use strict';

describe('Controller: ChatCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTwoApp'));

  var ChatMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatMainCtrl = $controller('ChatCtrl', {
      $scope: scope
    });
  }));

  it('it should push new messages onto the stack', function () {
    expect(scope.chatMessages.length).toBe(0);

    scope.newMessage = 'blarg!';
    scope.sendChat();

    expect(scope.chatMessages.length).toBe(1);
  });
});
