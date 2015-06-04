/*
 * manifesto-factory
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
}
// properties and methods
Manifest.prototype = {
  id: "123",
  label: "untitled",
  canvases: [],
  getTotalCanvases: function() {
    return this.canvases.length;
  }
};
// node.js module export
module.exports = Manifest;
