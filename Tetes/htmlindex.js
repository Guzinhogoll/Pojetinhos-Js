pessoas = [
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
]


const procurar = pessoas.map(pessoas =>`Id: ${pessoas.id}, Nome: ${pessoas.nome}, Idade: ${pessoas.idade}`);
console.log(procurar);