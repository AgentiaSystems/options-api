'use strict';

var utils = require('agentia-utilities');
var errors = require('../errors');
var helpers = require('../helpers');

function enable(key) {
  helpers.checkMinArgs(arguments, 1);

  if (!utils.isString(key)) {
    throw new errors.MustBeString('key');
  }

  this.set(key, true);

  return this;
}

module.exports = enable;
