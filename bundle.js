"use strict";

var _containerIoc = require("container-ioc");

let container = new _containerIoc.Container();

let A = class A {};
;

container.register(A);

console.log(container.resolve("Sd"));
