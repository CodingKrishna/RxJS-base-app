"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var jsonString = '{"id":1,"name":"hari"}';
var apiCallRes = rxjs_1.Observable.of(jsonString);
apiCallRes
    .map(function (jsonString) { return JSON.parse(jsonString); })
    .subscribe(function (obj) {
    console.log(obj.id, obj.name);
});
var usersString = '[{"id":1,"name":"hari"},{"id":2,"name":"krishna"}]';
var apiUsersRes = rxjs_1.Observable.of(usersString);
apiUsersRes
    .map(function (jsonString) { return JSON.parse(usersString); })
    .subscribe(function (users) {
    users.forEach(function (element) {
        console.log(element);
    });
});
var names = rxjs_1.Observable.of('Coding', 'Krishna');
names["do"](function (name) { return console.log(name); })
    .map(function (name) { return name.toUpperCase(); })["do"](function (name) { return console.log(name); })
    .subscribe(function (name) { return console.log(name); });
var numbers = rxjs_1.Observable.from([-1, -6, 10, 50]);
numbers.filter(function (n) { return n > 0; }).subscribe(function (n) { return console.log(n); });
