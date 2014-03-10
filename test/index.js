var flatten = require('../');
var lab = require('lab');
var describe = lab.experiment;
var it = lab.test;
var expect = lab.expect;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;


describe('flattening', function () {
  
  it('flattens any number of normal values passed into function', function (done) {
    function tester () {
      var args = flatten('arg1', 'arg2');
      expect(args).to.eql(['arg1', 'arg2']);
      done();
    }
    
    tester();
  });
  
  it('flattens a single array', function (done) {
    function tester () {
      var args = flatten(['arg1', 'arg2']);
      expect(args).to.eql(['arg1', 'arg2']);
      done();
    }
    
    tester();
  });
  
  it('flattens arrays of arrays', function (done) {
    function tester () {
      var args = flatten([['arg1', 'arg2'], 'arg3']);
      expect(args).to.eql(['arg1', 'arg2', 'arg3']);
      done();
    }
    
    tester();
  });
  
  it('flattens an arguments array to a flat array', function (done) {
    function tester () {
      var args = flatten(arguments);
      expect(args).to.eql(['arg1', 'arg2']);
      done();
    }
    
    tester('arg1', 'arg2');
  });
  
  it('flattens an arguments array of nested arrays', function (done) {
    function tester () {
      var args = flatten(arguments);
      expect(args).to.eql(['arg1', 'arg2', 'arg3']);
      done();
    }
    
    tester([['arg1', 'arg2'], 'arg3']);
  });
  
});