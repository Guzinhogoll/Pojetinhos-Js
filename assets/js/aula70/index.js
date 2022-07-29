//Objeto literal é feipto pelas chaves
//"" '' sting,123456 [] = literal

// const pessoa ={
//     nome: 'rick',
//     sobrenome:'miranda'
// };

// const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);

//new Array(); []
// const pessoa1 = new Object();
// pessoa1.nome = 'rick';
// pessoa1.sobrenome = 'Miranda';

// const pessoa2 = {
//     nome:'Rick',
//     sobrenome:'Miranda'
// };

// console.log(pessoa1, pessoa2);

// const pessoa1 = new Object();
// pessoa1.nome = 'rick';
// pessoa1.sobrenome = 'Miranda';
// pessoa1.idade = 30;
// pessoa1.falarNome = function(){
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// delete pessoa1.nome;
// console.log(pessoa1);

//factory fucntions / Constructor functions  / Classes

//Factory
// function criaPessoa(nome, sobrenome){
//     return{
//         nome,
//         sobrenome,
//           nomeCompleto(){
//              return `${this.nome} ${this.sobrenome}`;
//          }
//     };
// }

// const p1 = criaPessoa('Rick', 'Miranda');
// console.log(p1.nomeCompleto());

// Constructor
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);

    //return this; // {nome:'Rick', sobrenome 'Miranda'};= isso que o this faz
}

//como funciona o new, ele cria um objeto vazio,pega a this e atrela dentro desse obj 
const p1 = new Pessoa('Rick', 'Miranda');
// Object.freeze(p1); congela o p1
p1.nome =  'Outra coisa';//substituiu a váriavel
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1);
console.log(p2);