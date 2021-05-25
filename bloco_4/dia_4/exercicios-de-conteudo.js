// 1- Crie um objeto player contendo as variáveis listadas abaixo.
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
} 

//2- Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//3- Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

player["bestInTheWorld"] = bestInTheWorld;

console.log(player.bestInTheWorld);

//4- Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + bestInTheWorld.length + " vezes.");

//5- Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")

//for in

//1- Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
}
for (let key in names) {
  console.log("Olá " + names[key]);
}

//2- Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}
for (let key in car) {
  console.log(key, car[key])
}