const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.notStrictEqual(expected, 3, 'Nove dividido por três é igual a três');
