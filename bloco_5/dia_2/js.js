console.log(document.querySelector('#primeiroFilho').nextElementSibling);
let second = document.querySelector('#elementoOndeVoceEsta').parentNode;
second.style.color = 'blue';
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = 'opa';
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
// console.log(document.querySelector('#elementoOndeVoceEsta').parentNode);
// console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.firstChild.nextSibling.nextSibling);
// console.log(document.querySelector('#pai').firstChild.nextSibling.nextSibling);