'use strict';

const redisCountService = require('../../../lib/redis-count-service.js');
const assert = require('chai').assert;

describe('redisCountService', function() {
    describe('add', function() {
        it('should return 1 when num is 0', function(done) {
            redisCountService.get((err, result)=>{                
                if(err)
                    return done(err);
                
                redisCountService.add((err)=>{
                    if(err)
                        return done(err);
                    redisCountService.get((err, result2)=>{
                        if(err)
                            return done(err);
                        assert.equal(result2, result + 1);
                            done();
                    });
                });
            });
        });
    });
});
