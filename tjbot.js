/**
 * TJ Bot init js file
 *
 */

// write your codes in main() method
function main() {
   console.log("Begin of main..");
}

// IMPORTANT: DO NOT CHANGE THE CODE BELOW 
const TJBot = require('tjbot');
const config = require('./config');

// obtain our hardware configuration from config.js
var hardware = config.hardware;

// obtain our tjbot config from config.js
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

var tj = new TJBot(hardware, tjConfig, credentials);

main();

console.log("TJBot has finished running. Goodbye!");
