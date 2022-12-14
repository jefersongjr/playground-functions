// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// ReferĂȘncia de pesquisa:
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
// ReferĂȘncia de pesquisa:
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
      bigestNumber += 0;
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (bigestNumber === numbers[index2]) {
      howMany += 1;
    } else {
      howMany += 0;
    }
  }
  return howMany;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let phrase = ' ';
  if (distanceCat1 > distanceCat2) {
    phrase = 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    phrase = 'cat1';
  } else {
    phrase = 'os gatos trombam e o rato foge';
  }
  return phrase;
}

// Desafio 8
function fizzBuzz(numbers1) {
  let code1 = [];
  for (let index = 0; index < numbers1.length; index += 1) {
    let division3 = numbers1[index] % 3 === 0;
    let division5 = numbers1[index] % 5 === 0;
    if (division3 && !division5) {
      code1.push('fizz');
    } else if (!division3 && division5) {
      code1.push('buzz');
    } else if (division3 && division5) {
      code1.push('fizzBuzz');
    } else {
      code1.push('bug!');
    }
  }
  return code1;
}

// Desafio 9
function encode(phrase) {
  let code = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      code += '1';
    } else if (phrase[index] === 'e') {
      code += '2';
    } else if (phrase[index] === 'i') {
      code += '3';
    } else if (phrase[index] === 'o') {
      code += '4';
    } else if (phrase[index] === 'u') {
      code += '5';
    } else {
      code += phrase[index];
    }
  }
  return code;
}

encode('O tempero dela tem pimenta');
function decode(phrase) {
  let code = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === '1') {
      code += 'a';
    } else if (phrase[index] === '2') {
      code += 'e';
    } else if (phrase[index] === '3') {
      code += 'i';
    } else if (phrase[index] === '4') {
      code += 'o';
    } else if (phrase[index] === '5') {
      code += 'u';
    } else {
      code += phrase[index];
    }
  }
  return code;
}

// Desafio 10
function techList(tech, name) {
  let listTechAndName = [];
  tech = tech.sort();
  for (let index = 0; index < 5; index += 1) {
    if (tech.length === 0) {
      listTechAndName = 'Vazio!';
    } else {
      listTechAndName.push({ tech: tech[index], name: name});
    }
  }
  return listTechAndName;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
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
