//D2
//Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos.
 
const palavras = ['arara', 'amor', 'asa', 'longo', 'ele',  'dinossáuro', 'esse', 'peppa', 'mamam', 'tartaruga',	'bandolin',	 'matam',	'desodorante', 'mundo',	'metem', 'terra', 'água', 'mirim', 'fogo', 'sopapos' ];

const tirarespaço = y => y.split(' ').join('');
const épalindromo = y => tirarespaço(y) === tirarespaço(y.split('').reverse().join(''));
const resultados = palavras.map(épalindromo);
const filtrado  = palavras.filter(épalindromo);
console.log(filtrado);