var makeProp = require("make-prop");
var Transform = require("stream").Transform;

module.exports = MakePropStream;

/**
 * Takes in values and outputs objects with that value under a given property
 * @param   {String} prop Which property to output the data under
 * @returns {Stream}      Duplex objectMode stream
 */
function MakePropStream(prop) {
	// Create the function for making the objects
	var maker = makeProp(prop);

	// Construct the stream
	var stream = new Transform({
		objectMode: true
	});

	stream._transform = function (data, encoding, callback) {
		// When data comes in, pass it through the maker and pipe it along
		callback(null, maker(data));
	}

	// TODO: Remove this, maybe?
	stream._flush = function (callback) {
		callback();
	}

	return stream
}
