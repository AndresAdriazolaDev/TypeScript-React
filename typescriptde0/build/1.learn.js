"use strict";
let anyValue = "Hello"; //con el any es para ignorar el tipado de typescript, va mucho más allá de que sea cualquier tipo, más bien que lo ignore.
let unknowValue = "Hello"; //con el unknow no sabemos que valor viene.
const sayHiFunction = (fn) => {
    fn("Andres");
};
const sayHi = (name) => {
    console.log(`hola ${name}`);
};
sayHiFunction(sayHi);
//TIPAR ARROW FUNCTIONS
const sumar = (a, b) => {
    return a + b;
};
const restar = (a, b) => a - b;
