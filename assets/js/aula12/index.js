let varA = 'A'; //B
let varB = 'B'; //C
let varC= 'C';  //

/*const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp; maneira antiga*/

[varA, varB, varC] = [varB, varC, varA] //maneira nova

console.log(varA, varB, varC);