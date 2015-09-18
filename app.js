var http = require('http');

// Port number server will be listening to
var port = 3000;
var server= http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello! greetings from edit-my-README team\n");
});

server.listen(port,function(){
	console.log('Our app is running at localhost: %d',port);
});