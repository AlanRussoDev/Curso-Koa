'use strict'

let model = require('../models/todo');

module.exports.create = function *create(){
    this.body = {details : "ola"}
}