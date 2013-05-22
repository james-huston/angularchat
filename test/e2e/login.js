'use strict';

describe('chat app', function () {
  function loginToChat() {
    input('user.username').enter('jhuston');
    input('user.password').enter('letmein');
    element(':button').click();
  }

  beforeEach(function () {
    browser().navigateTo('/app/#/login');
  });

  it('should be on the login page', function () {
    expect(browser().location().url()).toBe('/login');
  });

  it('should have the login form', function () {
    expect(element('#inputUserUsername').count()).toBe(1);
    expect(element('#inputUserPassword').count()).toBe(1);
    expect(element('#buttonLogin').count()).toBe(1);
  });

  describe('attempt to login with valid credentials', function () {
    it('should take us to the chat page', function () {
      loginToChat();
      expect(browser().location().url()).toBe('/chat');
    });
  });  
});
