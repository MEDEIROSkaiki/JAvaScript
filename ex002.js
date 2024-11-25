//Para soicitar entradas do usuario usando o comando no ambiente, é necessario 
//1- Instalar a biblioteca com o comando npm install prompt-sync
//2- Criar um objeto prompt no seu codigo como comando var prompt = require("prompt-sync")()
//3- Utilizar normalmente, exemplo: var nome = prompt("digite seu nome") 

//importando a bibliotaca prmpt
let prompt = require("prompt-sync")();

//1- coletar as informações do usuario
let nome = prompt("Digite seu nome: ");
let horario = prompt("E manha, tarde ou noite? ");

//2- use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"
if(horario == "manha"){
    console.log("Bom dia, " + nome);
} else if(horario == "tarde"){
    console.log("Boa tarde, " + nome);
}else if(horario == "noite"){
    console.log("Boa noite, " + nome);
}else{
    console.log("Opção invalida");
}

let nomealuno = prompt("Digite seu nome: ");
let nota1 = prompt("Digite sua nota: ");
let nota2 = prompt("Digite sua nota: ");
let nota3 = prompt("Digite sua nota: ");
let faltas = prompt("Digite quantidaes de faltas: ");

