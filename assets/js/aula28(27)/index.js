// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUSuario = 999;
const  nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const corUsuario = null ;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

/*const pontuacaoUSuario = 999;

if (pontuacaoUSuario >= 1000){
    console.log('Usuário Vip');
}else{
    console.log('Usuário normal');
}*/