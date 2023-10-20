/*let anyValue: any = "Hello"; //con el any es para ignorar el tipado de typescript, va mucho más allá de que sea cualquier tipo, más bien que lo ignore.
let unknowValue: unknown = "Hello"; //con el unknow no sabemos que valor viene.

const sayHiFunction = (fn: (name: string) => void) => {
  fn("Andres");
};
const sayHi = (name: string) => {
  console.log(`hola ${name}`);
};

sayHiFunction(sayHi);

//TIPAR ARROW FUNCTIONS
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar = (a: number, b: number): number => a - b;
*/
/*

enum estadoDelContrato {
    Permanente ,
    Temporal,
    Medio
}

const empleado : estadoDelContrato = estadoDelContrato.Medio
console.log(empleado) */

/*

//any es declarar una variable o whatever que recibe o se le asigna cualquier tipo de dato.
let anyValue: any = 10
anyValue.toString(anyValue)
console.log(typeof anyValue)

anyValue = true
console.log(anyValue)
if (anyValue != false) {
    console.log(anyValue)
}else{
    console.log(anyValue)
}

let hola: string = 'hola'
console.log(hola.concat(' sacowea'))

let anyValue:any = 'Este es un String'
console.log(anyValue.toUpperCase()) // al ser any si deja asignarle funciones como el toUpperCase aunque se produciría un error si la variable no llega de tipo string.

let hola : unknown = 'Hola no sé quién soy'
console.log(hola.toUpperCase()) // no deja aplicar asignaciones ya que es de tipo unknow, esa es la diferencia con los any types.
 
let hola : unknown = 'Hola no sé quién soy'
console.log((hola as string).toUpperCase()) // al indicarle la (variable + as string) ó decirle (<string> + la variable) le estamos 
//indicando al compilador que sabemos que llegará como string, por eso nos permite ejecutar el codigo (es preferible usar el as)

//además de todo esto, podemos realizar un ciclo if preguntando el tipo de la variable x evaluar y si la condicionamos al que queremos, no caería nunca en errores.
console.log((<string>hola).toUpperCase()) 
if(typeof hola === 'string') {
    console.log((hola as string).toUpperCase())
}else{
    console.log("Error - Un String era esperado acá."); 
}

Tipo	    Predicate
string	    typeof s === "string"
number	    typeof n === "number"
boolean	    typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	    Array.isArray(a)


//union types

let dobleOrMultipleType : number | boolean
dobleOrMultipleType = 12 //✔✔ bcs we typed the variable as a number o boolean
dobleOrMultipleType = false //✔✔ bcs we typed the variable as a number o boolean
dobleOrMultipleType = 'hola' //❌ bcs we typed the variable as a number o boolean and its a string 

// aplicado en funciones para restringir tipos.
function add(x : number | string , y: number | string) {
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y)
    } 
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y
    }
    throw new Error('parámetros deben del mismo tipo')
}
console.log(add(1,2)) //✔
console.log(add('Hola ','Mundo'))//✔
console.log(add(1,'hola'))//❌

//intersection types

interface empleado {
  empleadoId: number;
  nombre: string;
  apellido: string;
}

interface seguro {
  seguro: string;
}

type EmpleadoEmpresa = empleado & seguro;

let nuevoEmpleado: EmpleadoEmpresa = {
  nombre: "Andres",
  apellido: "Adriazola",
  empleadoId: 1,
  seguro: "Seguro de vida",
};

console.log(nuevoEmpleado);
*/
/*
let fraseAlReves = (frase) => {
  return frase.split("").reverse().join("");
};

console.log(fraseAlReves("Hola mundo"));
*/

let letraQueSeRepite = (frase: string, letra: string) => {
  return frase.split("").filter((letraActual) => letraActual === letra).length;
};

letraQueSeRepite("Hola sacoweas", "a");
