'use strict'

const url = "api/v1/todos";
let ctrl = require('../controllers/todo');


module.exports = require('koa-router')()
    .post(url, crtl.create)
    .routes();