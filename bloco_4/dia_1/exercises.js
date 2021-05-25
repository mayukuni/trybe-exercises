//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let num1; 
let num2;
console.log(num1 + num2);

let num1; 
let num2;
console.log(num1 - num2);

let num1; 
let num2;
console.log(num1 * num2);

let num1; 
let num2;
console.log(num1 / num2);

let num1; 
let num2;
console.log(num1 % num2);

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let num1 = 4; 
let num2 = 2;
if (num1 > num2) {
  console.log(num1);
}  else {
  console.log(num2);
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num1 = 3; 
let num2 = 5;
let num3 = 7;
if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

//4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let num = 4;
if (num > 0) {
console.log("positive");
}  else if ( num < 0) {
console.log("negative");
}  else {
console.log("zero");
}

//5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let num1 = 20;
let num2 = -4;
let num3 = 2;
if (num1 + num2 + num3 == 180) {
  console.log(true);
}  else if (num1 < 0) {
  console.log("error");
}  else if (num2 < 0) {
  console.log("error");
}  else if (num3 < 0) {
  console.log("error");
}  else {
  console.log(false);
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peça = "CAVALO";
switch (peça.toLowerCase()) {
  case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
    break;
  case "dama":
    console.log("Pode mover-se em qualquer direção, quantas casas quiser, desde que estejam livres");
    break;
  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser.");
    break;
  case "cavalo":
    console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
    break;
  case "peão":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;
  default:
    console.log('Erro');
    break;
}

//7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 101;
if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota <= 100) {
  console.log("B");
} else if (nota >= 70 && nota <= 100) {
  console.log("C");
} else if (nota >= 60 && nota <= 100) {
  console.log("D");
} else if (nota >= 50 && nota <= 100) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else {
  console.log("Erro")
}

//8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
let num1 = 2;
let num2 = 2;
let num3 = 2;
if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let num1 = 1;
let num2 = 2;
let num3 = 2;
if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

//10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
let custo = 4;
let valor = 4;
let custoTotal = custo * 1.2;
let lucro = valor - custoTotal;
if (valor >=0 && custoTotal >= 0) {
  console.log(lucro * 1000);
} else {
  console.log("erro");
}


