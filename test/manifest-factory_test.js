'use strict';

var Manifest = require('../lib/manifest-factory');
var assert = require('should');

describe('Manifest Factory', function () {

  it('should set an id from param', function () {
    var m = new Manifest('456');
    m.id.should.equal('456');
  });

  it('should set a unique id if no id is specified', function () {
    var m = new Manifest();
  });

});
