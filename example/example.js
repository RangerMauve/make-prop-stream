var StreamArray = require("stream-array");
var stdout = require("stdout")();
var MakePropStream = require("../");

var names = ["bob", "joel", "anne", "meadow"];

StreamArray(names)
	.pipe(MakePropStream("name"))
	.pipe(stdout);

/* Should output
{ name: 'bob' }
{ name: 'joel' }
{ name: 'anne' }
{ name: 'meadow' }
*/
