'use strict';

var utils = require('agentia-utilities');
var clone = require('clone');

function defaults(options) {
  if (utils.isObject(options)) {
    this.__options.defaults = clone(options);
  }

  return this;
}

module.exports = defaults;
