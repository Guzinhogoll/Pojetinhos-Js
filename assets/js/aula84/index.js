function teste(){
    console.log(this);
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }
  //método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //Metodo estático n tem acesso aos métodos da instância
    static soma(x, y){
        console.log(this);

    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();