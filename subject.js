"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject = new rxjs_1.Subject();
subject.subscribe(function (val) { return console.log('Subject a', val); });
subject.subscribe(function (val) { return console.log('Subject B', val); });
subject.next('hellow');
setTimeout(function () {
    subject.next('world');
}, 1000);
