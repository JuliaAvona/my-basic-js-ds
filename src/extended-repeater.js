const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError("Not implemented");
  let result = "";
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = String(options.additionSeparator || "|");
  addition = addition === 'undefined' ? '' : addition;

  for (let i = 0; i < repeatTimes; i++) {
    let extra = "";

    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j === additionRepeatTimes - 1) {
        extra += addition;
      } else {
        extra += addition + additionSeparator;
      }
    }

    if (i === repeatTimes - 1) {
      result += str + extra;
    } else {
      result += str + extra + separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
