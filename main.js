import { Injectable, Container } from 'container-ioc';

let container = new Container();

class A {};

container.register(A);

console.log(container.resolve("Sd"));