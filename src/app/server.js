// create the http object - the protocol language we are going to talk with
var http = require('http');
// create the server object - the server that will talk through the http protocol language
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"content-type" : "plane-text"});
    res.end('The Server is working and well connected');
});

server.listen(9900, function(){ console.log('Server Started Successfully...')});