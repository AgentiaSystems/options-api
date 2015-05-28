'use strict';

function init(defaults, validators) {
  this.__options = {
    defaults: {},
    validators: {},
    current: {}
  };

  this.defaults(defaults);
  this.validators(validators);
  this.reset();
}

module.exports = init;
