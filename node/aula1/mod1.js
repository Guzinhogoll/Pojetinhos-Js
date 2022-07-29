//exemplo 1
// const nome = 'Rick';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' +  sobrenome ;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quioser exportar';

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

// module.exports.nome = 'Rick';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qlwr coisa'

const nome = 'Rick';
const sobrenome = 'Miranda';

// module.exports = {
//     nome, sobrenome, Pessoa
// };

exports.nome = nome
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa'