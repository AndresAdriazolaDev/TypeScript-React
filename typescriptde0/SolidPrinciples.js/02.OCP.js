//codigo debe estar abierto a nuevas características pero sin modificar el código o la estructura
// aplica para modulos, funciones y clases

/*
function processPayment(price, cardDetails) {
  //logica para pagar con credito
  console.log(`${price} pagado con tarjeta ${cardDetails}`);
}
este codigo solo debería admitir pagos con credito, pero si queremos
 agregar un nuevo metodo de pago no deberíamos odificar el codigo original, más bien hacer esto:
*/
function processPayment(price, cardDetails) {
  //logica para pagar con credito
  console.log(`${price} pagado con tarjeta ${cardDetails}`);
}
function debitProcessPayment(price, cardDetails) {
  //logica para pagar con debito
  console.log(`${price} pagado con debito ${cardDetails}`);
}
