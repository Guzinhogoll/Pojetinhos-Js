//For in -> lê os indices ou chaves do objeto

const pessoa = {
    nome:'Richard',
    sobrenome:'Miranda',
    idade: 20
};


for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


// for(let index in frutas){
//   console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }