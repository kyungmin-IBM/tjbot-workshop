/**
 * Use TJBot's sentiment analysis.
 *
 */

function main() {
	tj.speak("Hello there! I can perform sentiment analysis. Here are some examples.").then(function() {

        	var text = "The world of YouTube is one of the strangest places I've ever been. When I first arrived, I was swarmed by a mob of the most adorable puppies and kittens -- it was amazing!";
		tj.speak(text).then(function () {
			tj.analyzeTone(text).then(function(tone) {
				tone.document_tone.tone_categories.forEach(function(category) {
				if (category.category_id == "emotion_tone") {
				    // find the emotion with the highest confidence
				    var max = category.tones.reduce(function(a, b) {
					return (a.score > b.score) ? a : b;
				    });

				    // make sure we really are confident
				    if (max.score >= 0.5) {
					tj.speak("Recognized emotion for this sentence is "+max.tone_id).then(function() {
						shineForEmotion(max.tone_id);
					});
				    }
				}
			    });
			});
		});
	});
}


function shineForEmotion(emotion) {
    switch (emotion) {
    case 'anger':
	tj.speak('Shining red for anger');
        tj.shine('red');
        break;
    case 'joy':
	tj.speak('Shining yellow for joy');
        tj.shine('yellow');
        break;
    case 'fear':
	tj.speak('Shining magenta for fear');
        tj.shine('magenta');
        break;
    case 'disgust':
	tj.speak('Shining green for disgust');
        tj.shine('green');
        break;
    case 'sadness':
	tj.speak('Shining blue for sadness');
        tj.shine('blue');
        break;
    default:
        break;
    }
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

