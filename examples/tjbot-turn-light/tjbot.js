/**
 * Control TJBot's LED with your voice
 *
 */

function main() {
	var colors = ['red', 'blue','green', 'yellow', 'white', 'purple'];
	tj.speak("Hello there! You can change my color by speaking to me").then(function() {
        	var sentence = "Right now, I can understand the commands ";
		return tj.speak(sentence)
	}).then(function () {
		var sentence = "";
		for (var i=0; i < colors.length; i++) {
			sentence = sentence + " turn "+ colors[i]+", ";
		}	
		return tj.speak(sentence);
	}).then(function () {
		return tj.speak("Now try yourself!");
	}).then(function () {
		return tj.listen(function(response) {
			console.log("Recognized text: "+response);
			if (response.startsWith("turn") || 
			    response.startsWith("turned")) {  
				var words = response.split(" ");
				for(var i=0; i < words.length; i++) {
					if (colors.indexOf(words[i]) > -1) {
						tj.shine(words[i]);
						break;
					}
				}
			} else {
				tj.speak("I am sorry. I am having hard time understanding you");
			}
		});
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

