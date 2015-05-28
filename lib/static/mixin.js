'use strict';

var merge = require('merge-descriptors');
var utils = require('agentia-utilities');

var helpers = require('../helpers');
var errors = require('../errors');

var core = require('../core');
var init = require('./init');

function mixin(instance, defaults, validators) {
  helpers.checkMinArgs(arguments, 1);

  if (!utils.isObject(instance)) {
    throw new errors.MustBeObject('instance');
  }

  merge(instance, core);
  init.call(instance, defaults, validators);

  return instance;
}

module.exports = mixin;
