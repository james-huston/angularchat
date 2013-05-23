'use strict';

describe('Service: socket', function () {

  // load the service's module
  beforeEach(module('angularTwoApp'));

  // instantiate service
  var socketer;
  beforeEach(inject(function (socket) {
    socketer = socket;
  }));

  describe('When a simple listener is registered', function () {
    describe('and the event is emitted', function () {
      it('should trigger and get caught by the server', function () {
        var honk = false;

        socketer.on('blarg', function () {
          honk = true;
        });

        socketer.emit('blarg', {message: 'honk'}, function () {
          expect(honk).toBe(true);
        });

      });
    });
  });
});
