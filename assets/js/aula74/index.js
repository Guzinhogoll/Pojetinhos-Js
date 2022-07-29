//Construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  
  this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
  }

//   Pessoa.prototype === pessoa1._proto_

  Pessoa.prototype.nomeCompleto = function(){
      return this.nome + ' ' + this.sobrenome;
  }
  
  //Instância
  const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa = função construtora
  const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = função construtora
  const data = new Date(); // Date= função construtora
  
  console.dir(pessoa1);
  console.dir(pessoa2);