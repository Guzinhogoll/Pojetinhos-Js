var numeros = ["1","2","3","4","5","6","7","8","9","10"];
numeros.unshift("0");
numeros.push("11");

numeros.splice(5, 1);
numeros.splice(7, 1);
numeros.splice(7, 1,"20","21","22","9");

console.log(numeros);