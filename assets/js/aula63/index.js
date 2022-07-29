const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//Push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');
// console.log(nomes);

//Unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);

//nomes.splice(índice, delete, elem1, elm2, elem3);
// //pop
// const removidos = nomes.splice(-1, 1);//Number.Max_Value; usador para remover o valor máximo

//shift
// const removidos = nomes.splice(0, 1);