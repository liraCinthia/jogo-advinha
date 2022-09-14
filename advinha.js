var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById('resultado');
var tentativa = 1;
//console.log(numeroSecreto);

function atualizaTentativa(valor) {
  tentativa = valor;
}

//function updateDisplay(val) {
//document.getElementById("counter-label").innerHTML = val;
//

function Chutar() {
  if (tentativa > 3) {
    elementoResultado.innerHTML = 'LOSER';
    return;
  }

  var chute = parseInt(document.getElementById('valor').value);
  console.log(numeroSecreto, 'secreto');
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Acertou na ' + tentativa + 'ª tentativa';
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      'Errou na ' +
      tentativa +
      'ª tentativa. Você tem mais ' +
      (3 - tentativa) +
      ' chances.' +
      ' Pega essa dica: o n° chutado é menor que o n° secreto ein';
  } else {
    elementoResultado.innerHTML =
      'Errou na ' +
      tentativa +
      'ª tentativa. Você tem mais ' +
      (3 - tentativa) +
      ' chances.' +
      ' Pega essa dica: o n° chutado é maior que o n° secreto ein';
  }
  atualizaTentativa(++tentativa);
}
