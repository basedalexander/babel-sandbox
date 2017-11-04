var _dec, _class, _dec2, _class2;

import { Injectable, Container } from 'container-ioc';

let container = new Container();

let A = (_dec = Injectable(), _dec(_class = class A {}) || _class);
let B = (_dec2 = Injectable(['IA']), _dec2(_class2 = class B {
    constructor(a) {
        this.a = a;
    }
}) || _class2);


container.register([{ token: 'IA', useClass: A }, { token: 'IB', useClass: B }]);

const instance = container.resolve('IB');

console.log(instance.a);
