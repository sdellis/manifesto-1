/*
 * manifesto-client
 * ient.github.io
 *
 * Copyright (c) 2015 Drew Winget
 * Licensed under the Apache 2.0 license.
 */

'use strict';

var Manifest = require('../lib/manifest-factory.js');

var m = new Manifest();
m.sequences.push("Sequence 1");

console.log(m.getTotalSequences()); // "1"
