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

const fading = './public/scripts/python/fading.py';
const red = './public/scripts/python/red.py';
const blue = './public/scripts/python/blue.py';
const green = './public/scripts/python/green.py';
const yellow = './public/scripts/python/yellow.py';
const cyan = './public/scripts/python/cyan.py';
const magenta = './public/scripts/python/magenta.py';
const allOff = './public/scripts/python/allOff.py';

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
            case '/fading': //When we get a 'fading' route
                console.log('Running Python script fading.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [fading]);
                response.write("Start RGB Strip Fadeing");
                response.end();
                break;
            case '/red': //When we get a 'red' route
                console.log('Running Python script red.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [red]);
                response.write("Start solid red colour");
                response.end();
                break;
            case '/blue': //When we get a 'blue' route
                console.log('Running Python script blue.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [blue]);
                response.write("Start solid blue colour");
                response.end();
                break;
            case '/green': //When we get a 'green' route
                console.log('Running Python script green.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [green]);
                response.write("Start solid green colour");
                response.end();
                break;
            case '/yellow': //When we get a 'yellow' route
                console.log('Running Python script yellow.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [yellow]);
                response.write("Start solid yellow colour");
                response.end();
                break;
            case '/cyan': //When we get a 'cyan' route
                console.log('Running Python script cyan.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [cyan]);
                response.write("Start solid cyan colour");
                response.end();
                break;
            case '/magenta': //When we get a 'magenta' route
                console.log('Running Python script magenta.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [magenta]);
                response.write("Start solid magenta colour");
                response.end();
                break;
            case '/aloff': //When we get a 'allOff' route
                console.log('Running Python script allOff.py');
                response.writeHead(200, {'Content-Type': 'text/html'});
                spawn('python', [allOff]);
                response.write("Turn off all colours");
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
