'use strict';

var loaderUtils = require('loader-utils');
var jsxTransform = require('jsx-transform');

module.exports = function(source) {

  this.cacheable && this.cacheable();
  
  var query = loaderUtils.parseQuery(this.query);
  
  return jsxTransform.transform(source, {   
    ignoreDocblock : true,
    jsx: query.jsx || 'h',
  });
  
};
