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
// independent execution
var observable = rxjs_1.Observable.create(function (source) {
    source.next(Math.random());
});
observable.subscribe(function (v) { return console.log('consumer A: ' + v); });
observable.subscribe(function (v) { return console.log('consumer B: ' + v); });
/* Prints DIFFERENT values for both consumers */
// consumer A: 0.25707833297857885
// consumer B: 0.8304769607422662
var observable = rxjs_1.Observable.create(function (source) {
    source.next(Math.random());
});
var subject1 = new rxjs_1.Subject();
subject1.subscribe(function (v) { return console.log('consumer A: ' + v); });
subject1.subscribe(function (v) { return console.log('consumer B: ' + v); });
observable.subscribe(subject1);
/* Prints SAME values for both consumers */
// consumer A: 0.8495447073368834
// consumer B: 0.8495447073368834
