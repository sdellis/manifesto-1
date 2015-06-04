'use strict';

var manifestoClient = require('../lib/manifesto-client');
var assert = require('should');

describe('manifestoClient', function () {

  it('should be awesome', function () {
    manifestoClient().should.equal('awesome');
  });

});
