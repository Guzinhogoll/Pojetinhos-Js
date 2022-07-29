/*
... (spread) espalha
// Já vimos
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {
//     ...produto,
//     material: 'porcelana'
// };

// caneca.nome = 'Outro nome'
// caneca.preco =2.5;
// console.log(produto);
// console.log(caneca);

// Object.assign(des, any)
// const produto = {nome: 'Produto', preco: 1.8};
// const caneca =  Object.assign({}, produto, {material: 'porcelana'});

// caneca.nome = 'Outro nome'
// caneca.preco =2.5;
// console.log(produto);
// console.log(caneca);

// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {nome:produto.nome, preco:produto.preco};

// caneca.nome = 'Outro nome'
// caneca.preco =2.5;
// console.log(produto);
// console.log(caneca);

// Object.keys (retorna as chaves) //Object.freeze (congela o objeto)
// Object.freeze(produto);
// produto.nome = 'Outro nome'
// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {nome:produto.nome, preco:produto.preco};
// console.log(Object.keys(produto));

//Object.getOwnPropertyDescriptor(o, 'prop')

// const produto = {nome: 'Produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

//Object.values, Object.entries
const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let[chave, valor] of Object.entries(produto)){
console.log(chave, valor);
}