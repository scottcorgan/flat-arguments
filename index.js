var asArray = require('as-array');
var flatten = require('flatten');
var isArguments = require('lodash.isarguments');

var flattenArguments = function () {
  var args = arguments;
  
  if (isArguments(arguments[0])) args = arguments[0];
  
  args = asArray(args).map(function (arg) {
    if (!isArguments(arg)) return arg;
    return asArray(arg);
  });
    
  return flatten(args);
};

module.exports = flattenArguments;