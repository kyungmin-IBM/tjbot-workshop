/**
 * TJBot speaking Korean
 *
 */

function main() {
	tj.speak("annyeonghaseyo. Na Neun Tee Jae Bot ibnida").then(function () {
		tj.wave();
		return;
	});
}

// IMPORTANT: DO NOT CHANGE THE CODE BELOW 
const TJBot = require('tjbot');
const config = require('../../config');

// obtain our hardware configuration from config.js
var hardware = config.hardware;

// obtain our tjbot config from config.js
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

var tj = new TJBot(hardware, tjConfig, credentials);

main();
