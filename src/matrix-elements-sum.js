const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let nextRow = matrix[i + 1];

    if (nextRow !== undefined) {
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 0) {
          nextRow[j] = 0;
        }
      }
    }
  }
  matrix.forEach((element) => {
    newArr.push(...element);
  });

  return newArr.reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
