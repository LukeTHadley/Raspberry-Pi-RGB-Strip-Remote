# Node.js Raspbery Pi Server
###### A Node.js website that carries out Python scripts on a Raspberry Pi on specific GET requests
###### Version 1.0
---

## About this Project

This project is a test of running a Python script using Node.js to trigger it.

The python files will turn on/off an LED connected to a Raspberry Pi on a breadboard (See the wiring diagram in 'Setting up the breadboard') when given the command to do so.


## How to use it

#### Installing Dependencys

Assuming you are installing this project from a fresh install of Raspberry Pi OS, the following will take you through installing all of the dependencys I used.
The version of Raspberry Pi OS i use is the `Lite` version which comes un-bloated, depending on what version you use, it might come with `node`/`node.js` installed already. Check what version of these dependencys you are using otherwise they may be out of date or conflict.

##### node.js

You can download and install the most recent version of `node.js` using:

`sudo apt-get install nodejs`

Assuming you have no errors, you should be able to check what version you have using:

`node -v`

##### npm

`npm` is a package manager for Node to easily install and use dependencys for JavaScript programs.

You can download and install the most recent version of `npm` using:

`curl -L https://npmjs.org/install.sh | sudo sh`

Assuming you have no errors, you should be able to check what version you have using:

`npm -v`

##### git

Clone this repository to your Pi so that you can use and play around with the code.

Install `git` using:

`sudo apt-get install git`

To download this repository use:

`git clone https://github.com/LukeTHadley/Remote-Pi-Control-Test`

#### Setting up the breadboard

The python script is set up to use `GPIO Pin 21` as its 'output' pin, however you can change this to whatever you want, and the cirtuit is going round and compleating in the `GPIO 3 Ground Pin`.

![Wiring Diagram](https://imgur.com/9fRgvvN.png "Wiring Diagram")

#### Starting the Service and Connecting to it

##### Getting your IP

You will need to know the IP of your Raspberry Pi so that you can connect to it via a browser, you can find this out by running the command:

`hostname -I`

##### Starting the Node.js Service

Navigate to where ever you downloaded the repository, and navigate to `/node-led/` and run the command:

`node index.js` to start the node service.

Once it has fully started, unless there are any errors, it should output:

`Starting Node.js server, listening on port '3000'!`

##### Connecting to the Service

In your navigate, connect to `YOURDEVICESIP:3000/`

The page you should see should be the following. A simple page with a checkbox input that can be clicked to turn on/off the led.

![Index Page](https://i.imgur.com/s737XPt.png "index page")

As well as an output on the console saying:

`'/' page requested.`

There are two other 'pages' that you can navigate to.

`YOURDEVICESIP:3000/ledOn` and `YOURDEVICESIP:3000/ledOff` which, oviously, turn your LED on/off.

When you press the switch to turn the LED on/off, the console of the Node service will also output what python script is running.


## To Do

* Set a function to run on startup of the node service to either check the current status of the GPIO pins or straight turn the LED off, to sanity check what the status of the LED, and what state the switch, should be in. (former would be better)
* Make a proper console (time/date and everything)
* Make the on/off pages respond with a 200 (ok) or 503 (unavailable) html service error that can be parsed and used if needed by the HTML.