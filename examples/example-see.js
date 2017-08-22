/**
 * Use TJBot's see ability
 *
 */

function main() {
	tj.speak("Hello there! Let me tell you what I can see").then(function() {
        	var sentence = "Please speak the command. What do you see";
		return tj.speak(sentence)
	}).then(function () {
		return tj.listen(function(response) {
			if (response.startsWith("what do you see") || 
			    response.startsWith("what you see") || 
			    response.startsWith("what do you think") || 
			    response.startsWith("what do you if the")) {
				tj.speak("Let me look around").then(function() {
					tj.see().then(function(objects) {
						var msg = "I'm looking at ";
						for (var i = 0; i < objects.length; i++) {
							msg = msg + " a " + objects[i]["class"] + ", ";
						}
						return tj.speak(msg);
					});	
				});
			
			}
			else {
				tj.speak("I am sorry. I am having hard time understanding you. The command is what do you see");
			}
		});
	});
}

// IMPORTANT: DO NOT CHANGE THE CODE BELOW 
const TJBot = require('tjbot');
const config = require('../config');

// obtain our hardware configuration from config.js
var hardware = config.hardware;

// obtain our tjbot config from config.js
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

var tj = new TJBot(hardware, tjConfig, credentials);

main();

