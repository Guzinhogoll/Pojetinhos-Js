/*function criaPessoa (nome, sobrenome, idade){
    return{
        nome,sobrenome,idade
    };
}

const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa ('Rick', 'Silva', 25);
const pessoa3 = criaPessoa ('Luiza', 'Costa', 25);
const pessoa4 = criaPessoa ('Lola', 'Siles', 25);
const pessoa5 = criaPessoa ('Helo', 'Miranda', 25);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome); factory*/

const pessoa1 = {
  nome:'Luiz',
  sobrenome:'Miranda',
  idade:25,

  fala(){
      console.log(`a minha idade atual é ${this.idade}`)
  },

  incrementaidade() {
      this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaidade();
pessoa1.fala();
pessoa1.incrementaidade();
pessoa1.fala();
pessoa1.incrementaidade();
pessoa1.fala();