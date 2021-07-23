// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const employee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email:`${email}@trybe.com`}
}
const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employee));

// 2 
// const result = (numApostado, checkFunc) => {
//   if (numApostado === checkFunc) {
//     return "Parabéns! Você ganhou!";
//   } return "Tente novamente";
// }

// 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const teste = (RIGHTANSWERS, STUDENTANSWERS, func) => {


}
const teste2 = ()