"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var cold = rxjs_1.Observable.create(function (observer) {
    observer.next(Math.random());
});
cold.subscribe(function (a) { console.log(a); });
cold.subscribe(function (a) { console.log(a); });
