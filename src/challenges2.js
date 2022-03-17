// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(line1, line2, line3) {
  let trianglePossible = false;
  if (line1 + line2 < line3 || Math.abs(line1 - line2) > line3) {
    trianglePossible = false;
  } else if (line1 + line3 < line2 || Math.abs(line1 - line3) > line2) {
    trianglePossible = false;
  } else if (line3 + line2 < line1 || Math.abs(line3 - line2) > line1) {
    trianglePossible = false;
  } else {
    trianglePossible = true;
  }
  return trianglePossible;
}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let number = /\d+/g;
  let numbers = string.match(number);
  let cont = 0;
  let answer = '';
  for (let i = 0; i < numbers.length; i += 1) {
    cont += parseInt(numbers[i]);
    if (cont === 1) {
      answer = `${cont} copo de água`;
    } else {
      answer = `${cont} copos de água`;
    }
  }
  return answer;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
