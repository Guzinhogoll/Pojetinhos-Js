//Declaração de função(Function Hoisting)
falaOi();

function falaOi(){
  console.log('oie'); 
}
//First objects(Objetos de 1 classe)
//Function expression

const souUmdado = function (){
    console.log('sou um dado');
};
souUmdado();

// Arrow function
const funcaoArrow = () =>{
    console.log('Sou um arrow function');
};
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();