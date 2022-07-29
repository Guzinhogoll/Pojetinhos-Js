// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrneome){
    //Atributos ou métodos privados
const ID = 123456;

const metodoInterno = function(){
   
};

 //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrneome = sobrneome;

  this.metodo = function() {
  console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Rick', 'Miranda'); //New cria um objeto fazia aponta por this e retorna para nós essa váriavel
const p2 = new Pessoa('Maria', 'Silva');
p1.metodo();