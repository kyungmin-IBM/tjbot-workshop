/**
 * TJ Bot arm movement example
 *
 */

// write your codes in main() method
function main() {
	console.log("TJBot raising arm");
	tj.raiseArm();
	tj.sleep(1000);
	console.log("TJBot lowering arm");
	tj.lowerArm();
	tj.sleep(1000); 
	console.log("TJBot arm back");
	tj.armBack();
	tj.sleep(1000); 
	console.log("TJBot waving");
	tj.wave();
}

// IMPORTANT: DO NOT CHANGE THE CODE BELOW 
const TJBot = require('tjbot');
const config = require('/home/pi/Desktop/tjbot-workshop/config');

// obtain our hardware configuration from config.js
var hardware = config.hardware;

// obtain our tjbot config from config.js
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

var tj = new TJBot(hardware, tjConfig, credentials);

main();

console.log("TJBot has finished running. Goodbye!");
