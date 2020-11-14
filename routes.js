/**
 * routes.js
 * 
 * Handles URL routing of the node.js application
 * 
 * By Luke T. Hadley
 * Date - Friday 14, November 2020
 * Version 0.4
 */

const {spawn} = require('child_process'); //Needed to run Python scripts
const pythonLEDOnLocation = './public/scripts/python/led-on.py';
const pythonLEDOffLocation = './public/scripts/python/led-off.py';
const stylesheet = './public/stylesheets/styles.css';
const homepage = './public/html/index.html';

var url = require('url');
var fs = require('fs');

/**
 * Rooting function to setup and send requests to the user when needed.
 */
module.exports = {
    handleRequests: function(request, response) {
        var path = url.parse(request.url).pathname.toLowerCase(); //Get the path to switch
        switch (path) { //Lets start rooting page requests to the correct pages/elements
            case '/': //Root directory, show 'index.html'
                response.writeHead(200, {'Content-Type': 'text/html'});
                renderHTML(homepage, response);
                break;
            case '/stylesheets/styles.css': //Called when the browser requests the 'styles.css' file for HTML pages.
                response.writeHead(200, {'Content-Type': 'text/css'});
                renderHTML(stylesheet, response);
                break;
            case '/ledon': //When we get a 'ledOn' route
                console.log('Running Python script led-on.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [pythonLEDOnLocation]);
                response.write("LED ON");
                response.end();
                break;
            case '/ledoff': //When we get a 'ledoff' route
                console.log('Running Python script led-off.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [pythonLEDOffLocation]);
                response.write("LED OFF");
                response.end();
                break;
            default: //Some request we don't know? Send back a 404 error and a message.
                console.log('ERROR>>>' + path + ' was requested but not defined.');
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
}

/**
 * Function that actually serves the request to the user.
 */
function renderHTML(path, response){
    fs.readFile(path, null, function(error, data) {
        if (error) { //Something went wrong, we couldn't find the page, just 404
            response.writeHead(404);
            response.write('File not found!');
        }
        else { //We found the requested file, write it to the response.
            console.log(path + ' requested.');
            response.write(data);
        }
        response.end(); //End the response.
    });
}