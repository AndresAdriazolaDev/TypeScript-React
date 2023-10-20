/* 

let counter = 1;
function factorial(num) {
  for (let i = 1; i <= num; i++) {
    counter = counter * i;
  }
  return counter;
}

console.log(factorial(0));

console.log(5 ** 5);

//jumbled a number is jumbled
let array = []
function isJumbled(num) {
    parseInt(num)
}
*/

/*

function isJumbled(num) {
  var arr = num.toString().split("");
  for (i = 0; i < arr.length-1; i++) {
    console.log("evaluando la posición " + i + " y el valor " + arr[i]);
    console.log(arr[i] - arr[i + 1] )
    if (
      arr[i] - arr[i + 1] != -1 &&
      arr[i] - arr[i + 1] != 1 &&
      arr[i] - arr[i + 1] != 0
    ) {
      return false;
    }
  }
  return true;
}

console.log(isJumbled(9878));


// otro ejercicio equifax 2
function plusPerfectNumber(num) {
  var arr = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = parseInt(arr[i]);
    let elevated = current ** arr.length;
    sum = sum + elevated;
    console.log(sum);
  }
  if (sum != num) {
    return false;
  } else {
    return true;
  }
}

console.log(plusPerfectNumber(9798));
*/

//Given a number N. Check if it is perfect or not.
//A number is perfect if sum of factorial of its digit is equal to the given number.

