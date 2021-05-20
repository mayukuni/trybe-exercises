

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
 soma += numbers[index];
} 
console.log(soma);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
let mediaAritmetica = (soma / numbers.length);

console.log(mediaAritmetica);

//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
let mediaAritmetica = (soma / numbers.length);

if (mediaAritmetica > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor maior ou igual a 20");
}

//5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  } 
}
console.log(maiorValor)

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impares += 1;
  } 
}
if (impares > 0) {
  console.log(impares);
} else {
  console.log("nenhum valor ímpar encontrado");
}

//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  } 
}

let menorValor = maiorValor;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index]
  } 
}
console.log(menorValor);


//8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = 0;
for (let index; index < array.length; index +=1) {
  

}



