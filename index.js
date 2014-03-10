var asArray = require('as-array');
var flatten = require('flatten');
var isArgs = require('is-args');

var flattenArguments = function () {
  var args = arguments;
  
  if (isArgs(arguments[0])) args = arguments[0];
    
  return flatten(asArray(args));
};

module.exports = flattenArguments;