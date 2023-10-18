/*
Usando JS, implementar una función que dado número entero retorne otro numero entero formado por sus mismos
dígitos ordenados descendentemente.
*/
const assert = require("assert");

function descdentOrder(num) {
  const numStr = num.toString();
  const numArr = numStr.split("").sort((a, b) => b - a);
  return parseInt(numArr.join(""), 10);
}

function test() {
  assert(descdentOrder(52134) === 54321);
  assert(descdentOrder(1) === 1);
  assert(descdentOrder(0) === 0);
  console.log("All tests passed");
}

test();
