/*
implementar un método que permita acceder de forma segura a propiedades de un objeto incluso cuando dichas
propiedades no existen.

La funcion debe admitir tres parámetros: el objeto que se va a acceder;
el valor x defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto;
un string indicando el path de la propiedad a consultar

el path delimitará el camino en el cual se encuentra la propiedad a consultar
los distintos límites de profundidad se delimitarán con puntos
además éste ultimo parámetro es opcional en caso de no proveerse
la función devolverá otra función que esperará ser invocada con el path de la propiedad como argumento
*/
const assert = require("assert");
const { get } = require("http");

function safeGet(obj, defaultValue, path) {
  if (typeof path === "undefined") {
    return (p) => safeGet(obj, defaultValue, p);
  }

  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return defaultValue;
    }
  }
  return current;
}

function testSafeGet() {
  const obj = { a: { b: { c: 10, d: null, e: false } }, f: 0 };

  assert(safeGet(obj, "default", "a.b.c") === 10, "Test 1 Failed");
  assert(safeGet(obj, "default", "a.b.e") === false, "Test 2 Failed");
  assert(safeGet(obj, "default", "f") === 0, "Test 3 Failed");

  assert(safeGet(obj, "default", "a.b.x") === "default", "Test 4 Failed");
  assert(safeGet(obj, "default", "x.y.z") === "default", "Test 5 Failed");

  assert(safeGet(obj, "default", "a.b.d") === null, "Test 6 Failed");
  assert(safeGet(obj, "default", "a.b.e") === false, "Test 7 Failed");

  const getFromObj = safeGet(obj, "default");
  assert(getFromObj("a.b.c") === 10, "test8failed");
  assert(getFromObj("x.y.z") === "default", "test9failed");

  console.log("All tests passed");
}

testSafeGet();
