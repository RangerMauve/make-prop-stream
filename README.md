# make-prop-stream

Takes in values and outputs objects with that value under a given property.
This is useful for transforming a stream of events into objects that might be
useful for a consumer down the pipe.

## Installing

``` bash
npm install --save make-prop-stream
```

## API

### `MakePropStream(prop)`

#### parameters

* `prop` (String): Which property to output the data under

#### returns

(Stream): Duplex objectMode stream with all the created objects

## Example
``` javascript
var StreamArray = require("stream-array");
var stdout = require("stdout")();
var MakePropStream = require("make-prop-stream");

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
```
