'use strict';

var Sequence = require('../lib/sequence-factory');
var assert = require('should');

describe('Sequence Factory', function () {

  it('should set an id from param', function () {
    var s = new Sequence('456');
    s.id.should.equal('456');
  });

  it('should set a unique id if no id is specified', function () {
    var s = new Sequence();
  });

  /*
   * A sequence must have a type of sc:sequence that cannot be modified
   */

  /*
   * The identifier in @id must always be able to be dereferenced to retrieve
   * the JSON description of the sequence, and thus must use the http(s) URI
   * scheme.
   */

});
