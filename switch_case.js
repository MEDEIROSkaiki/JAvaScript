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
} else {
  console.log('Função não encontrada!');
}

//Exercicio 1
function ex001(){
//Opeçoes de bebidas
console.log("Escolha sua bebida:");
console.log("1 - Agua");
console.log("2 - Suco");
console.log("3 - Rerigerante");
console.log("4 - Cafe");

//escolha do usuario
let escolha = parseInt(prompt("Digite o Numero da bebida desejada: "));

//processando escolha
switch (escolha) {
    case 1:
        console.log("Aqui esta sua agua");
        break;
    case 2:
        console.log("Aqui esta seu suco");
        break;
    case 3:
        console.log("Aqui esta seu refrigerante");
        break;
    case 4:
        console.log("Aqui esta seu cafe");
        break;
    default:
        console.log("Opção invalida");
        break;                   
}
}

//exercicio 2
function ex002(){
//Exibe as opetaçoes
console.log("Escolha aoperação matematica: ");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

//escolha do usuario
let escolha = parseInt(prompt("Digite o numero da operação desejda: "));

//escolha dos dois numeros
let num1 = parseFloat(prompt("Escolha o primeiro numero: "));
let num2 = parseFloat(prompt("Escolha o segundo numero: "));

let resultado;

//processando
switch(escolha){
case 1:
    resultado = num1 + num2;
    console.log(`Resultado da soma: ${resultado}`);
break;
case 2:
    resultado = num1 - num2;
    console.log(`Resultado da subtração: ${resultado}`);
break;
case 3:
    resultado = num1 * num2;
    console.log(`Resultado da multiplicação: ${resultado}`);
break;
case 4:
   if(num2 === 0) {
    console.log("Erro:Não é possivel dividir por zero");
   }else {
    resultado = num1 / num2;
    console.log(`Resultado da divisão ${resultado}`);
   }
break;
default:
    console.log("Opção invalida");
break;
}
}

//exercicio 3
function ex003(){
//cor ingles
let ingles = prompt("Digite uma cor em ingles (red, blue, greem): ");

//cor tradução
switch(ingles.toLowerCase()) {
case "red":
    console.log("Vermelho");
break;
case "blue":
    console.log("Azul");
break;
case "greem":
    console.log("Verde");
break;
default:
    console.log("Opção invalida");
break;
}
}

//desafio
function ex004(){
//opçoes
console.log("Escolha o tipo de evento:");
console.log("1 - Workshop");
console.log("2 - Palestra");
console.log("3 - Hackathon");

//escolha
let escolha = parseInt(prompt("Digite o numero de eventos desejados: "));
let custo = 0;
let evento = "";

//processo
switch(escolha) {
    case 1:
        evento = "Workshop";
        let participantes = parseInt(prompt("Difgite o numero de participantes: "));
        custo = participantes * 50;
break;
case 2:
    evento = "Palestra";
    let duracao = parseInt(prompt("Digite a duração da palestra (em horas): "));
    custo = duracao * 100;
break;
case 3 :
    evento = "Hackathon";
    let dias = parseInt(prompt("Digite o numero de dias do Hackathon: "));
    let equipes = parseInt(prompt("Digite o numero de equipes: "));
    custo = dias * equipes * 500;
default:
    console.log("Opção invalida!");
break;
}

//resumo
if (evento !== "") {
    console.log("Tipo de evento: " + evento);
    console.log("Custo total: R$ " + custo);
}
}