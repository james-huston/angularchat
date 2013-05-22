
describe('When the chat page loads', function () {
  function loginToChat() {
    browser().navigateTo('/app/#/login');
    input('user.username').enter('jhuston');
    input('user.password').enter('letmein');
    element(':button').click();
  }

  beforeEach(function () {
    loginToChat();
  });

  it('should have the chat elements', function () {
    expect(element('#chatWindow').count()).toBe(1);
    expect(element('#inputNewMessage').count()).toBe(1);
    expect(element('#buttonSend').count()).toBe(1);
  });

  describe('When a new message is sent', function () {
    it('should appear in the chat window', function () {
      expect(repeater('#chatWindow div', 'chat messages').count()).toBe(0);

      input('newMessage').enter('What is your name?');
      element('#buttonSend').click();

      expect(element('#chatWindow', 'chat messages').html()).toMatch(/What is your name\?/);
      expect(repeater('#chatWindow div', 'chat messages').count()).toBe(1);
    });

    describe('When a second message is sent', function () {
      it('should also appear in the chat window', function () {
//        expect(repeater('#chatWindow div', 'chat messages').count()).toBe(1);

        input('newMessage').enter('What is your name?');
        element('#buttonSend').click();
        expect(input('newMessage').val()).toBe('');

        input('newMessage').enter('Bob');
        element('#buttonSend').click();
        expect(input('newMessage').val()).toBe('');

        expect(element('#chatWindow', 'chat messages').html()).toMatch(/Bob/);
        expect(repeater('#chatWindow div', 'chat messages').count()).toBe(2);
      });
    })
  });
});
