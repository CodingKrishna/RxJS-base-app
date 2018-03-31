"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var myObs = rxjs_1.Observable.create(function (observer) {
    observer.next('hellow');
    observer.next('World');
});
myObs.subscribe(function (val) { console.log(val); });
// From one or multiple values
var multiValuesObj = rxjs_1.Observable.of('foo', 'bar', [1, 2, 3], 24, true, { name: 'codingkrishna' });
multiValuesObj.subscribe(function (val) {
    console.log(val);
});
// async values generation.
var myObservable = rxjs_1.Observable.create(function (observer) {
    observer.next('foo');
    setTimeout(function () { return observer.next('bar'); }, 1000);
});
myObservable.subscribe(function (value) { return console.log(value); });
// From array of values
var arrayOfValues = rxjs_1.Observable.from([1, 2, 3]);
arrayOfValues.subscribe(function (val) {
    console.log(val);
});
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('promise resolved!');
    }, 1000);
});
/* promise.then(function(val){
    console.log(val);
}) */
var obsProm = rxjs_1.Observable.fromPromise(promise);
obsProm.subscribe(function (val) {
    console.log(val);
});
var timerObs = rxjs_1.Observable.timer(1000);
timerObs.subscribe(function (done) {
    console.log('timer is done');
});
var intervalObs = rxjs_1.Observable.interval(1000);
intervalObs.subscribe(function (interval) {
    console.log('interval cycle');
});
