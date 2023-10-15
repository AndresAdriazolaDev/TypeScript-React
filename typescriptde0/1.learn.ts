let anyValue: any = "Hello"; //con el any es para ignorar el tipado de typescript, va mucho más allá de que sea cualquier tipo, más bien que lo ignore.
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
