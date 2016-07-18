'use strict';

const request = require('supertest');
const assert = require('chai').assert;

const services = require('../../lib/services.js');
let app = require('../../app.js');
app.locals.services = services;

app = 'http://127.0.0.1:3000';

describe('/', function() {
    it('should return 1 on first request', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200, {
                helloWorld: 1
            }, done);
    });
    it('should return 1 on first request', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200, {
                helloWorld: 2
            }, done);
    });
});
