'use strict';

describe('Service: user', function () {
  var scope, userSvc, mockBackend;

  beforeEach(module('angularTwoApp'));

  beforeEach(
    inject(function(_$httpBackend_, $rootScope, User) {
      mockBackend = _$httpBackend_;
      scope = $rootScope.$new();
      userSvc = User;
    })
  );

  it('fetch a user', function() {
    var dataYo = {userId: 'jhuston', username: 'jhuston', firstName: 'James', lastName: 'Huston'};
    
    mockBackend.expectGET('/api/user/jhuston').
      respond(dataYo);

    userSvc.get({userId: 'jhuston'}, function (user) {
      expect(user.userId).toBe(dataYo.userId);
    });

    mockBackend.flush();
  });
});
