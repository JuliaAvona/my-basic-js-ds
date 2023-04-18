const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(arr) {
//     let count = 0;
//     let first = arr.flat(Infinity);
//     let second = arr.flat(count);

//     while (JSON.stringify(first) !== JSON.stringify(second)) {
//       count++;
//       second = arr.flat(count);
//     }
//     return count + 1;
//   }
// }

class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        1 +
        arr.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0)
      );
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator,
};
