/**
 * index.js
 * 
 * Simple Node.js site that executes a Python script
 * on GET request of page. 
 * 
 * By Luke T. Hadley
 * Date - Friday 13, November 2020
 * Version 0.3
 */

const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000 // <-- Sets the port that the node.js site will be listening on

/**
 * Sets up the '/' (index.html, root page of the site) 'page' on the site.
 */
app.get('/', (req, res) => {
    res.send('HOME')
    console.log("'/' page requested.")
   })


/**
 * Sets up what happens on '/led-on' 'page' on the site.
 * Executes 'led-on.py' python script on page load.
 */
app.get('/led-on', (req, res) => {
 var dataToSend;
 const python = spawn('python', ['./scripts/python/led-on.py']);
 python.stdout.on('data', function (data) {
  dataToSend = data.toString();
 });
 python.on('close', (code) => {
 res.send(dataToSend)
 console.log("'/led-on' page requested.")
 });
})


/**
 * Sets up what happens on '/led-off' 'page' on the site.
 * Executes 'led-off.py' python script on page load.
 */
app.get('/led-off', (req, res) => {
    var dataToSend;
    const python = spawn('python', ['./scripts/python/led-off.py']);
    python.stdout.on('data', function (data) {
     dataToSend = data.toString();
    });
    python.on('close', (code) => {
    res.send(dataToSend)
    console.log("'/led-off' page requested.")
    });
   })


//Starts the server
app.listen(port, () => console.log(`Starting Node.js server, listening on port '${port}'!`))
