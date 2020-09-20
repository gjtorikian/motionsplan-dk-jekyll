const motionsplan = require('../js/beeptest.js');
var assert = require('assert');

describe('BeepTest', function() {
  describe('getBeepTest()', function() {
    it('should return the correct number', function() {

      var hr = motionsplan.BeepTest(9, 4);
      assert.equal(hr.getDistance(), 1460);
      assert.equal(hr.getTotalShuttles(), 73);
      assert.equal(hr.getFitnessLevel(), 41.673231329827196);
    });
  });
});
