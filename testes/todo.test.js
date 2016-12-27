'use strict'

var should = require('chai').should();
var Todo = require('../models/todo');


describe('models test todo', () => {
    let body = {
        details: 'Hello todo'
    }

    let todo = new Todo(body);

    it('should be todo a object', () => {
        todo.should.be.a('object');
    })

    it('should be have in Todo, descricao, initialDate e isDone ', () => {
        todo.should.have.property('details');
        todo.should.have.property('initialDate');
        todo.should.have.property('isDone');

    })

    it('should be details  isDone is false', () => {
        todo.details.should.be.not.null;
        todo.isDone.should.be.false;
    })
})