// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Referência de pesquisa:
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
// Referência de pesquisa:
// https://pt.stackoverflow.com/questions/363976/uso-de-variavel-em-javascript
function concatName(array1) {
  let firstElement = array1[0];
  let lastElement = array1[array1.length - 1];
  let frase = `${lastElement}, ${firstElement}`;
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let bigestNumber = numbers[0];
  let howMany = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (bigestNumber <= numbers[index]) {
      bigestNumber = numbers[index];
    } else {
      bigestNumber = bigestNumber;
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (bigestNumber === numbers[index2]) {
      howMany += 1;
    } else {
      howMany = howMany;
    }
  }
  return howMany;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
