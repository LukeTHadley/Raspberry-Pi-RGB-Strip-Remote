/**
 * server.js
 * 
 * Main node.js file, sets up the server and request handler.
 * 
 * By Luke T. Hadley
 * Date - Friday 14, November 2020
 * Version 0.4
 */

const port = 3000; //Set the port number

var http = require('http');
var routes = require('./routes');

http.createServer(routes.handleRequests).listen(port);
console.log('Starting Node.js server, listening on port ' + port + '!');
