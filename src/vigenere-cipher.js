const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key, direct = true) {
    if (!key || !message) throw new Error(`Incorrect arguments!`);

    const sizeAlphabet = 26;
    const firstLetterUnicode = 65;
    const lastLetterUnicode = 90;

    function code(word) {
      const wordForArr = word.toUpperCase().split("");
      return wordForArr.map((symb) => symb.charCodeAt(0) >= firstLetterUnicode && symb.charCodeAt(0) <= lastLetterUnicode ? symb.charCodeAt(0) : symb);
    }

    const messageForCode = code(message);
    let keyCode = code(key);

    const result = [];
    let count = 0;

    for (let char of messageForCode) {
      if (typeof char !== "number") {
        result.push(char);
      } else {
        const keyCodeChar = keyCode[count++ % keyCode.length];
        let shift;
        if (direct) {
          shift = (char + keyCodeChar) % sizeAlphabet;
        } else {
          char - keyCodeChar >= 0 ? (shift = char - keyCodeChar) : (shift = sizeAlphabet + (char - keyCodeChar));
        }
        result.push(String.fromCharCode(firstLetterUnicode + shift));
      }
    }

    return (this.direction ? result : result.reverse()).join("");
  }

  decrypt(message, key) {
    return this.encrypt(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
