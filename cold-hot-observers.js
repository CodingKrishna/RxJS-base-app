"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
/* const coldobsv = new Observable(observer => {

    setTimeout(() => {
      observer.next(1);
    }, 1000);
  
    setTimeout(() => {
      observer.next(2);
    }, 2000);
  
    setTimeout(() => {
      observer.next(3);
    }, 3000);
  
    setTimeout(() => {
      observer.next(4);
    }, 4000);
  
  });

  // Subscription A
setTimeout(() => {
    coldobsv.subscribe(value => console.log('Cold Subscription A ',value));
  }, 0);
  
  // Subscription B
  setTimeout(() => {
    coldobsv.subscribe(value => console.log('Cold Subscription B ', value));
  }, 2500);
*/
var hotobsv = new rxjs_1.Observable(function (observer) {
    setTimeout(function () {
        observer.next(1);
    }, 1000);
    setTimeout(function () {
        observer.next(2);
    }, 2000);
    setTimeout(function () {
        observer.next(3);
    }, 3000);
    setTimeout(function () {
        observer.next(4);
    }, 4000);
}).publish();
hotobsv.connect();
// Subscription A
setTimeout(function () {
    hotobsv.subscribe(function (value) { return console.log('Hot Subscription A ', value); });
}, 0);
// Subscription B
setTimeout(function () {
    hotobsv.subscribe(function (value) { return console.log(" Hot Subscription B  " + value); });
}, 2500);
