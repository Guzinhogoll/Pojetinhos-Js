//IEEE 754-2098 PADRAO QUE O JS SEGUE

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

//num1 = ((num1 * 100)) + ((num2 * 100)) / 100; ou num1 = parseFloat(num1.toFixed(2));

//console.log(num1.toString() + num2);

//num1 = num1.toString(); transformar em letra

//console.log(num1.toString(2)); colocar binario

//console.log(num1.toFixed(2)); arredonda o número

//console.log(Number.isInteger(num1)); v ou f se o numero é inteiro ou n

//let temp = num1 * 'Ola';

//console.log(Number.isNan (temp)); vai falar se é ou nn um número

