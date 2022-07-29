//Factory function (função fábrica)
function criaPeossa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
       return `${this.nome} ${this.sobrenome}` 
        },

        //Setter
        set nomeCompleto(valor){
             valor = valor.split(' ');
             this.nome = valor.shift();
             this.sobrenome = valor.join(' ');
             console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPeossa('Rick', 'Silva', 1.8, 80);

//this vai ser sempre quem está chamando o objeto