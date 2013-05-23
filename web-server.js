var express = require("express"),
app = express(),
port = parseInt(process.env.PORT, 10) || 8080;

var server = require('http').createServer(app);
// Hook Socket.io into Express
var io = require('socket.io').listen(server);

app.configure(function (){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/'));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
  });
  app.use(app.router);
});

var UserController = {
  get: function (req, res, next) {
    res.send(req.params.username)
  }
};

app.get('/api/user/:username', UserController.get);

server.listen(port, function () {
  console.log('Now serving the app at http://localhost:' + port + '/app');
});

