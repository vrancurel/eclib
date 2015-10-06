// launch multiple encodes/decodes in parallel, to test for race conditions

'use strict';

var ECLib = require('../../node-eclib.js');
var enums = require('../../eclib-enum.js');
var ECLibUtil = require('../../eclib-util.js');
var buffertools = require("buffertools");
var crypto = require('crypto');
var hexdump = require('hexdump-nodejs');
var assert = require('assert');

// Number of tests that are done at any given time.
var _done = 0;

function test_one() {
  eclib.encode(ref_buf,
    function(status, encoded_data, encoded_parity, encoded_fragment_length) {
      var k = eclib.opt.k;
      var m = eclib.opt.m;

      var x = k - 1; // available data fragments
      var y = m; // available parity fragments

      var fragments = [];
      var i, j;
      j = 0;
      for (i = 0; i < x; i++) {
        fragments[j++] = encoded_data[i];
      }
      for (i = 0; i < y; i++) {
        fragments[j++] = encoded_parity[i];
      }

      eclib.decode(fragments, x + y, encoded_fragment_length, 0,
        function(status, out_data, out_data_length) {
          // If buffers differ, something bad happened.
          assert.equal(buffertools.compare(out_data, ref_buf), 0);

          // Node is single threaded so this is safe.
          _done += 1;
        }
      );
    }
  );
}

var numTests = 4;
var ref_buf = new Buffer(500000000);
buffertools.fill(ref_buf, 'z');

var eclib = new ECLib({
  "bc_id": enums.BackendId["EC_BACKEND_JERASURE_RS_VAND"],
  "k": 3,
  "m": 3,
  "hd": 3
});
eclib.init();

describe('threaded', function(done) {

    this.timeout(300000);
    it('there shall not be races', function(done) {

	function monitorState() {
	    if (_done < numTests) {
		setImmediate(monitorState);
	    } else {
		done();
	    }
	}
	
	monitorState();

	var numTests = 4;
	for (var i = 0; i < numTests; i++) {
	    test_one();
	}
    });
});

//eclib.destroy();