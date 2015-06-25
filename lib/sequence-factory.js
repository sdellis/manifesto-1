/*
 * sequence-factory
 * ient.github.io
 *
 * Copyright (c) 2015 Shaun Ellis
 * Licensed under the Apache 2.0 license.
 */

'use strict';

var _ = require('lodash');

// Constructor
var Sequence = function(id) {
  this.id = (id ? id : _.uniqueId());
};
// properties and methods
Sequence.prototype = {
  id: '123',
  type: 'sc:Sequence',
  label: 'current page order',
  canvases: [],
  getTotalCanvases: function() {
    return this.canvases.length;
  }
};
// node.js module export
module.exports = Sequence;
