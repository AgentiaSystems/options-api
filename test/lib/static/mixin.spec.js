'use strict';

var chai = require('chai');
var expect = chai.expect;

var optionsApi = require('../../../');
var errors = require('../../../lib/errors');

describe('optionsApi.mixin()', function() {

  describe('with no arguments', function() {

    before(function() {
      this.instance = {
        name: 'test'
      };
      optionsApi.mixin(this.instance);
    });

    it('should return mixed-in object', function() {
      expect(this.instance).to.be.an('object');
      expect(this.instance.name).to.equal('test');
    });

    it('should return object with optionsApi properties', function () {
      var options = {
        defaults: {},
        validators: {},
        current: {}
      };

      expect(this.instance).to.have.property('__options').that.is.an('object');
      expect(this.instance.__options).to.deep.equal(options);
    });

    it('should return object with optionsApi core methods', function () {
      expect(this.instance).itself.to.respondTo('reset');
      expect(this.instance).itself.to.respondTo('defaults');
      expect(this.instance).itself.to.respondTo('validators');
      expect(this.instance).itself.to.respondTo('set');
      expect(this.instance).itself.to.respondTo('get');
    });

  });

  describe('with defaults', function() {

    before(function() {
      this.instance = {
        name: 'test'
      };
      this.defaults = {
        str: 'test',
        num: 0,
        bool: false
      };
      optionsApi.mixin(this.instance, this.defaults);
    });

    it('should return mixed-in object', function() {
      expect(this.instance).to.be.an('object');
      expect(this.instance.name).to.equal('test');
    });

    it('should return object with optionsApi properties', function () {
      var options = {
        defaults: this.defaults,
        validators: {},
        current: this.defaults
      };

      expect(this.instance).to.have.property('__options').that.is.an('object');
      expect(this.instance.__options).to.deep.equal(options);
    });

    it('should return object with optionsApi core methods', function () {
      expect(this.instance).itself.to.respondTo('reset');
      expect(this.instance).itself.to.respondTo('defaults');
      expect(this.instance).itself.to.respondTo('validators');
      expect(this.instance).itself.to.respondTo('set');
      expect(this.instance).itself.to.respondTo('get');
    });


    it('should initialize with defaults', function() {
      expect(this.instance.get('str')).to.equal('test');
      expect(this.instance.get('num')).to.equal(0);
      expect(this.instance.get('bool')).to.be.false;
    });
  });

  describe('with defaults and validators', function() {

    before(function() {
      this.instance = {
        name: 'test'
      };
      this.defaults = {
        str: 'test',
        num: 0,
        bool: false
      };
      this.validators = {
        str: function(value) {
          return typeof value === 'string';
        }
      };
      optionsApi.mixin(this.instance, this.defaults, this.validators);
    });

    it('should return mixed-in object', function() {
      expect(this.instance).to.be.an('object');
      expect(this.instance.name).to.equal('test');
    });

    it('should return object with optionsApi properties', function () {
      var options = {
        defaults: this.defaults,
        validators: this.validators,
        current: this.defaults
      };

      expect(this.instance).to.have.property('__options').that.is.an('object');
      expect(this.instance.__options).to.deep.equal(options);
    });

    it('should return object with optionsApi core methods', function () {
      expect(this.instance).itself.to.respondTo('reset');
      expect(this.instance).itself.to.respondTo('defaults');
      expect(this.instance).itself.to.respondTo('validators');
      expect(this.instance).itself.to.respondTo('set');
      expect(this.instance).itself.to.respondTo('get');
    });

    it('should initialize with defaults', function() {
      expect(this.instance.get('str')).to.equal('test');
      expect(this.instance.get('num')).to.equal(0);
      expect(this.instance.get('bool')).to.be.false;
    });

    it('should save validators', function() {
      expect(this.instance.__options.validators).to.deep.equal(this.validators);
    });

  });

  describe('with invalid arguments', function() {

    it('should throw error, when called with no arguments', function() {
      expect(optionsApi.mixin).to.throw(errors.InvalidArguments);
    });

    it('should throw error, when instance not object', function() {
      expect(optionsApi.mixin.bind(null, 'test')).to.throw(errors.MustBeObject);
    });

  });

});
