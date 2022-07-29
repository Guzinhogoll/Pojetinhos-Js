//GLobal
function retornaFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Rick');
const funcao2 = retornaFuncao('Bia');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
// clouser habilidade de acessar seu escopo lexico=escopo lexico tem haver com o pai ...