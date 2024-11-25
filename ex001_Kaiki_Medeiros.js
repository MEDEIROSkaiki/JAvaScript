let prompt = require("prompt-sync")();


const [funcao] = process.argv.slice(2);
 
if (funcao === 'ex001') {
  ex001();
} else if (funcao === 'ex002') {
  ex002(); 
} else if (funcao === 'ex003') {
 ex003();
} else if (funcao === 'ex004') {
  ex004(); 
} else if (funcao === 'ex005') {
    ex005(); 
} else if (funcao === 'ex006') {
    ex006();
} else if (funcao === 'ex007') {
    ex007(); 
} else if (funcao === 'ex008') {
    ex008();
} else if (funcao === 'ex009') {
    ex009();
} else if (funcao === 'ex010') {
    ex010();
} else if (funcao === 'ex011') {
    ex011();           
} else {
  console.log('Função não encontrada!');
}

//Exercicio 1
function ex001() {
let num1 = parseFloat(prompt("Digite um numero "));
let num2 = parseFloat(prompt("Digite outro numero "));
let soma = num1 + num2;
console.log("A soma dos dois números é: " + soma);
}

//exercicio 2
function ex002(){
let anonas = parseInt(prompt("Digite seu ano de nascimento"));
let anoatu = new Date().getFullYear();
let idade = anoatu - anonas;
console.log("Voce tem" + idade + "anos.");
}

//EXERCICIO 3
function ex003(){
    let num1 = parseFloat(prompt("Digite um número: "));
    let num2 = parseFloat(prompt("Digite outro número: "));
    let diferença = Math.abs(num1 - num2);
    console.log("A diferença entre um número e outro é: " + diferença);
}

//exercicio 4
function ex004(){
    let tempc = parseFloat(prompt("Digite a temperatura em Celsius: "));
    let tempfa = (tempc * 9 / 5 + 32);
    console.log(tempc + "C equivale a " + tempfa + "F");
}

//exercicio 5
function ex005() {
    let nomepro = prompt("Digite o nome do produto: ");
    let preçou = parseFloat(prompt("Digite o valor unitario do produto: "));
    let quan = parseFloat(prompt("Digite a quntidade comprada: "));
    let valorsim = preçou * quan;
    let impo = valorsim * 0.18;
    let valorcim = valorsim + impo;
    console.log("Produto: " + nomepro);
    console.log("Preço unitario: R$ " + preçou.toFixed(2));
    console.log("Quantidade" + quan);    
    console.log("Imposto: R$ " + impo.toFixed(2));
    console.log("Valor total com imposto: R$ " + valorcim.toFixed(2));
}

//exercicio 6
function ex006() {
    let nomepro = prompt("Digite o nome do produto: ");
    let preçoori = parseFloat(prompt("Digite o valor original do produto: "));
    let porc = parseFloat(prompt("Digite a porcentagem de desconto: "));
    let preçodes = (preçoori * porc) / 100;
    let preçofin = preçoori - preçodes;

    console.log("Produto:", nomepro);
    console.log("Preço original: R$", preçoori.toFixed(2));
    console.log("Desconto (" + porc + "%): R$", preçodes.toFixed(2));
    console.log("Preço final: R$", preçofin.toFixed(2));
}

//exercicio 7
function ex007(){
let valorto = parseFloat(prompt("Digite o valor total do produto: "));
let numpar = parseFloat(prompt("Digite o número de parcelas"));
let valorpar = valorto / numpar;
console.log("Valor total: R$ " + valorto);
console.log("Número de parcelas: " + numpar);
console.log("Valor de cada parcela: R$ " + valorpar);
}

//Exercicio 8
function ex008(){
let horastra = parseInt(prompt("Digite o numero de horas trabalahadas por semana: "));
let valorh = parseFloat(prompt("Digite valor da hora trabalhada: "));
let salariosema = horastra * valorh;
let salariomen = salariosema *4;

console.log("Salario semanal: R$ " + salariosema.toFixed(2));
console.log("Salario mensal: R$ " + salariomen.toFixed(2));
}

//Exercicio 9 
function ex009(){
let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let numParcelas = parseInt(prompt("Digite o número de parcelas:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
let valorTotalComJuros = valorCompra * Math.pow((1 + taxaJuros), numParcelas);
let valorParcela = valorTotalComJuros / numParcelas;

console.log("Valor total da compra: R$ " + valorCompra.toFixed(2));
console.log("Número de parcelas: " + numParcelas);
console.log("Taxa de juros mensal: " + (taxaJuros * 100).toFixed(2) + "%");
console.log("Valor de cada parcela: R$ " + valorParcela.toFixed(2));
}

//Exercicio 10
function ex010(){
let num = parseInt(prompt("Digite um numero: "));

if (num % 2 == 0){
    console.log("O numero " + num + "é par.");
}else {
  console.log("O numero " + num + "é impar");
}
}

//Desafio media + faltas
function ex011(){
let nome = prompt("Digite seu nome: ");
let num1 = Number(prompt("Digite a nota 1: "));
let num2 = Number(prompt("Digite a nota 2: "));
let num3 = Number(prompt("Digite a nota 3: "));
let faltas = parseFloat(prompt("Digite a porcentagem de faltas: "));
let media = (num1 + num2 + num3) / 3;
let resultado;

if (media>= 7 && faltas < 25) {
    resultado = "Aprovado";
} else if (media >= 5 && media < 7 && faltas <25) {
    resultado = "Recuperação";
} else {
  resultado = "Reprovado";
}

console.log(`${nome} - Média: ${media.toFixed(2)} - Faltas: ${faltas}% - Resultado: ${resultado}`);
}