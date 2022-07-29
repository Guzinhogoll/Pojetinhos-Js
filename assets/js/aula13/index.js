let umaString = "Um texto"; // para duas aspas duplas basta colocar a palavra entre \\,ex:"Um \"texto\"";

console.log(umaString);
/*Para saber um índice de algo: 
Basta colocar dentro()depois da palavra[] e digitar um número exemplo console.log(umaString[3]); outra maneira é console.log(umaString.charAt(7));

* usado para concatenar:
console.log(umaString.concat(' em' , ' um' ,'')); ou console.log(umaString + ' em um lindo dia.'); ou console.log(`${umaString} em um lindo dia.`);

*Para saber um índice de uma palavra: console.log(umaString.indexOf('paralvra usada')); ou console.log(umaString.lastOf('palavra usada'));

*Expressão regular:
console.log(umaString.match(/[a-z]/g));

retornar o índice:
console.log(umaString.search(/[a-z]/g));ou console.log(umaString.match(/x/));

*substituir a palavra
console.log(umaString.replace('Um', 'Outra'));

console.log(umaString.replace(/Um/, 'Outra'));

*Para substituir todas aquelasletras em específico usa-se a flag g:

console.log(umaString.replace(/U/g, '#'));

*Ver o tamanho de uma string:

console.log(umaString.length);

*Para fatiar uma palavra:

console.log(umaString.slice(2, 5));

console.log(umaString.slice(-5, umaString.length -1));

console.log(umaString.substring(umaString.length -5, umaString.length - 1));

*Dividir uma string:
console.log(umaString.split(' '));

*Dividir uma string com quantidade de vezes:
console.log(umaString.split(' ', 3));

*Tudo maúsculo:
console.log(umaString.toUpperCase());

*Tudo minúsculo:
console.log(umaString.toLowerCase());

*/