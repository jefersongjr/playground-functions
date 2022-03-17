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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
