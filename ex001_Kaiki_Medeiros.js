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
}else if (funcao === 'ex007') {
    ex007();     
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