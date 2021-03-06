/*global describe, it*/
'use strict';
var assert = require('assert');

describe('famous generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');
    var view = require('../view');
    var opinionated = require('../opinionated');
    var tutorial = require('../tutorial');
    
    assert(app !== undefined);
    assert(view !== undefined);
    assert(opinionated !== undefined);
    assert(app !== undefined);
    assert(tutorial !== undefined);
  });
});
