//D7
//Crie uma automação que remova todas as propriedades do objeto abaixo que não comecem com a letra "j"

const  nms = [
    
    "Jason",
    "Thaís",
       "Liz",
   "Jennei",
      "Jennyfer",
       "João",
      "Bola",
    "Gato",
     "Jaguar"
      
];

const filtrado = nms.filter(nms => nms.toLowerCase("J").indexOf("J".toLowerCase())>-1)
console.log(filtrado);