/*
 * manifest-factory
 * ient.github.io
 *
 * Copyright (c) 2015 Shaun Ellis
 * Licensed under the Apache 2.0 license.
 */

'use strict';

var _ = require('lodash');

// Constructor
var Manifest = function(id) {
  this.id = (id ? id : _.uniqueId());
};
// properties and methods
Manifest.prototype = {
  id: '123',
  type: 'sc:Manifest',
  label: 'untitled',
  sequences: [],
  getTotalSequences: function() {
    return this.sequences.length;
  }
};
// node.js module export
module.exports = Manifest;
