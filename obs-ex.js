"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var data = new rxjs_1.Observable(function (observer) {
    setTimeout(function () {
        observer.next(42);
    }, 1000);
    setTimeout(function () {
        observer.next(43);
        // observer.error(new Error('Something bad happened!'));
    }, 2000);
    setTimeout(function () {
        observer.complete();
    }, 3000);
});
data.subscribe(function (val) {
    console.log(val);
}, function (err) {
    console.log(err);
}, function () {
    console.log('fineshed..');
});
// unsubscribe
var datastream = new rxjs_1.Observable(function (observer) {
    setTimeout(function () {
        observer.next('You will never see this message');
    }, 2000);
});
var subscription = datastream.subscribe(function (value) { return console.log(value); }, function (error) { return console.log(error); }, function () { return console.log('Finished'); });
setTimeout(function () {
    subscription.unsubscribe();
}, 1000);
