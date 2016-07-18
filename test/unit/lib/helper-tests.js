'use strict';

const helper = require('../../../lib/helper');
const assert = require('chai').assert;

describe('helper', function() {
    describe('addOne', function() {
        it('should return 1 when num is 0', function() {
            assert.equal(helper.addOne(0), 1);
        });
        it('should return 2 when num is 1', function() {
            assert.equal(helper.addOne(1), 2);
        });
    });
});
