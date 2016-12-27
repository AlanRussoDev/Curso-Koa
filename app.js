'use strict'
let koa = require('koa');
let routes = require('koa-route');
let app = koa();

// app.use(function *(){
//     this.body = "Hello KOA JS and Node 4";
// })

app.use(require('./routes/todos'))

app.listen(3000);