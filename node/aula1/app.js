//ex1
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

//ex2
// const{nome, sobrenome, falanome} = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falanome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Pedro');
console.log(mod1);
console.log(p1);