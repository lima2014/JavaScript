/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.92...
 * Luis Otávio nasceu em 1980
 */
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; //peso / (altura*altura);
let nascimento;

imc = peso / (altura*altura);



// console.log( nome + ' '+ sobrenome + ' '+ 'tem ' + idade + ' pesa ' + peso + ' kg' + ' tem ' + altura + ' seu IMC é ' + imc + ' '+ nome + ' nasceu em ' + '1980' );
console.log(`tem ${altura} de a  altura de seu IMC é de ${imc}`)