'use strict'

let should = require('chai').should();
let ch = require('charlatan');
let request = require('superagent');
let url = require('url');
const baseUrl = "http://localhost:3000/api/v1/todos";


describe('routes todo testing', () => {
    let body = {
        details: ch.Name.name()
    };

    it('should be create a todo', (done) => {
        request
            .post(url.resolve(baseUrl, 'todos'))
            .send(body)
            .end(function (err, res) {
                console.log('RES')
                console.log(res)
                res.body.should.be.exist;
                done();
            })
    })
})