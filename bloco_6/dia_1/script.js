let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
let estado = document.getElementById('estado')
for (let index = 0; index < estados.length; index += 1) {
    let options = document.createElement('option');
    estado.appendChild(options).innerText = estados[index];
}
