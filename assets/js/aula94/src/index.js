// import { nome2, sobrenome, idade, soma, Pessoa  } from './modulo1';

// const p1 = new Pessoa('Rick', 'Miranda');
// console.log(p1);

// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

// import o, {nome as n, sobrenome, idade, soma}from './modulo1';
// console.log(o(5, 40));
// console.log(n, sobrenome, idade, soma(4, 4));

import Pessoa, {nome, sobrenome} from "./modulo1";
const p1 = new Pessoa(nome, sobrenome);
console.log(p1);