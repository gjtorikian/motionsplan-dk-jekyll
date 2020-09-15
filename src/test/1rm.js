const motionsplan = require('../js/1rm.js');
var assert = require('assert');

describe('Estimate1RM', function() {
  describe('getBrycki', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getBrzycki(), 112.5);
      assert.equal(rm.getBrzycki(2).toFixed(1), 109.4);
    });
  });
  describe('getMayhew', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getMayhew(), 119.01068045151959);
      assert.equal(rm.getMayhew(5), 100);
    });
  });
  describe('getLander', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getLander(), 113.70891767872341);
      assert.equal(rm.getLander(5), 100);
    });
  });
  describe('getWathan', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getWathan(), 116.58250529118924);
      assert.equal(rm.getWathan(5), 100);
    });
  });
  describe('getLombardi', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getLombardi(), 117.4618943088019);
      assert.equal(rm.getLombardi(5), 100);
    });
  });
  describe('getOconnor', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getOconnor(), 112.5);
      assert.equal(rm.getOconnor(5), 100);
    });
  });
  describe('getWendler', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getWendler(), 116.65);
      assert.equal(rm.getWendler(5), 100);
    });
  });
  describe('getReynolds', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm;
      rm = motionsplan.Estimate1RM(100, 5);
      
      // Lower body Reynolds seems to overestimate lower body 1RM
      assert.equal(rm.getReynolds5RM("lower"), 123.95759999999999);
      assert.equal(rm.getReynolds5RM("upper"), 113.7698);

      assert.equal(rm.getReynoldsPercent("upper"), 100.10827621965932);
      assert.equal(rm.getReynoldsPercent("lower"), 100.25630266342827);

      assert.equal(rm.getReynoldsPercent("upper", 5), 87.13996438815076);
      assert.equal(rm.getReynoldsPercent("lower", 5), 85.22435408662034);

      assert.equal(rm.getReynolds(), 117.33735159595578);
      assert.equal(rm.getReynolds("lower"), 117.33735159595578);
      assert.equal(rm.getReynolds("upper"), 114.7579078120417);

      // Gives Percentage of 1RM.
      assert.equal(rm.getReynolds("lower", 5), 100.00000000000001);
      assert.equal(rm.getReynolds("upper", 5), 100.00000000000001);
    });
  });
  /*
  describe('getAbadie', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getAbadie(), 112.5);
    });
  });
  */
  describe('getMol', function() {
    it('should return the correct number', function() {  
      var rm = motionsplan.Estimate1RM(100, 5);
      // trained, gender
      assert.equal(rm.getMOL(1, 1), 108.68442932523273);
      assert.equal(rm.getMOL(1, 0), 109.94750006871719);
      assert.equal(rm.getMOL(0, 1), 111.90564116337104);
      assert.equal(rm.getMOL(0, 0), 112.76118309033298);
    });
  });
  describe('getMOL', function() {
    it('should work with rm requests', function() {
      // weigt, reps
      var rm = motionsplan.Estimate1RM(100, 5);
      // man and trained
      assert.equal(rm.getMOL(1, 1), 108.68442932523273);
      assert.equal(rm.getMOL(1, 1, 2), 106.85396616653716);
      assert.equal(rm.getMOL(1, 1, 3), 104.56931077769143);
      assert.equal(rm.getMOL(1, 1, 4), 102.2846553888457);
      assert.equal(rm.getMOL(1, 1, 5), 100.00000000000001);
      assert.equal(rm.getMOL(1, 1, 6), 97.7153446111543);
      assert.equal(rm.getMOL(1, 1, 8), 93.14603383346284);
      assert.equal(rm.getMOL(1, 1, 10), 88.57672305577142);
      assert.equal(rm.getMOL(1, 1, 12), 84.00741227807997);
      assert.equal(rm.getMOL(1, 1, 15), 77.15344611154282);
    });
  });    
});
