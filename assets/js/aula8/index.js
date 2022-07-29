const nome = 'Richard Miranda';
const sobrenome = 'Miranda';
const idade = 20;
const peso = 81;
const tamanho = 1.70;
let imc; //peso / (altura * altura)
let anoNascimento = 2001;

imc = peso / (tamanho * tamanho)

console.log(`${nome}  ${sobrenome} tem  ${idade}  anos, pesa ${peso} kg`);
console.log(`tem ${tamanho} de altura  e seu IMC é de ${imc} `);
console.log(`nasceu em ${anoNascimento}.`);

//template stings pode colocar variáveis dentro dela ${}
