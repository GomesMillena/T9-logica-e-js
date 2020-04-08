//**1.** Faça uma mensagem de "Olá Mundo!";

alert('Hello World');

//**1.5** Peça um valor do usuário e exiba o mesmo valor;
const inputUsuario = prompt('Dê o seu valor?');
alert('Oseu valor é: '+ inputUsuario + '!!');

//**2.** Faça uma saída de soma de 2 números;

const numero1 = prompt('Dê o seu valor?');
const numero2 = prompt('De o seu outro valor?');

alert(parseInt(numero1) + parseInt(numero2)); 

//**3.** Crie um algoritmo que receba nome, endereço e telefone, e depois mostre-os;

const name = prompt('Digite seu nome');
const end = prompt('Digite seu endereço');
const phone = prompt('Digite seu telefone');

alert('O seu nome é ' + name);
alert('O seu endereço é ' + end);
alert('O seu telefone é ' + phone);

//**4.** Solicite o ano de nascimento do usuário, calcule sua idade e mostre-a;

const anodenascimento = prompt('Digite seu ano de nascimento');
const idade = 2020 - anodenascimento

alert ('Sua idade é '+ idade);

//**5.** Receba do usuários 3 números e calcule a média entre eles.

let numeros1 = prompt('Qual seu número?');
let numeros2 = prompt('Qual seu número?');
let numeros3 = prompt('Qual seu número?');

numeros1 = parseInt(numeros1);
numeros2 = parseInt(numeros2);
numeros3 = parseInt(numeros3);

const media = (numeros1 + numeros2 + numeros3) / 3;

alert ('A média é ' + media);