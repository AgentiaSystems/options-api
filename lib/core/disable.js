'use strict';

var utils = require('agentia-utilities');
var errors = require('../errors');
var helpers = require('../helpers');

function disable(key) {
  helpers.checkMinArgs(arguments, 1);

  if (!utils.isString(key)) {
    throw new errors.MustBeString('key');
  }

  this.set(key, false);

  return this;
}

module.exports = disable;
