'use strict';

var Manifest = require('../lib/manifest-factory');
var Sequence = require('../lib/sequence-factory');
var assert = require('should');

describe('Manifest Factory', function () {

  it('should set an id from param', function () {
    var m = new Manifest('456');
    m.id.should.equal('456');
  });

  it('should set a unique id if no id is specified', function () {
    var m = new Manifest();
  });

  /*
   * A manifest must have a type of sc:manifest that cannot be modified
   */

  /*
   * The identifier in @id must always be able to be dereferenced to retrieve
   * the JSON description of the manifest, and thus must use the http(s) URI
   * scheme.
   */

   /*
    * A manifest must contain one or more sequences
    */
    it('should contain one or more sequences', function () {
      var m = new Manifest("http://123");
      var s1 = new Sequence("http://456");
      var s2 = new Sequence("http://789");
      m.sequences.push(s1, s2);
      m.getTotalSequences().should.equal(2);
    });

  /*
   * Only one sequence may be embedded.  Any additional sequences must be
   * referred to from the manifest, not embedded within it,
   * and thus these additional sequences must have an HTTP URI.
   */

});
