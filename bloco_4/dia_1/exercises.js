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
  console.log(num1)
}
  else {
  console.log(num2)
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num1 = 3; 
let num2 = 5;
let num3 = 7;
  if (num1 > num2 && num1 > num3) {
  console.log(num1)
} else if (num2 > num1 && num2 > num3) {
  console.log(num2)
} else {
  console.log(num3)
}

//4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let num = 4;
if (num > 0) {
console.log("positive")
}  else if ( num < 0) {
console.log("negative")
}  else {
console.log("zero")
}

//5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let num1 = 20;
let num2 = -4;
let num3 = 2;
  if (num1 + num2 + num3 == 180) {
  console.log(true)
}  else if (num1 < 0) {
  console.log("error")
}  else if (num2 < 0) {
  console.log("error")
}  else if (num3 < 0) {
  console.log("error")
}  else {
  console.log(false)
}