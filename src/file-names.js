const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newFileNames = [];
  names.forEach((file) => {
    if (newFileNames.indexOf(file) === -1) {
      newFileNames.push(file);
    } else if (newFileNames.indexOf(file) !== -1) {
      let count = 0;
      let num = newFileNames[newFileNames.indexOf(file)];
      for (let i = 0; i < newFileNames.length; i++) {
        if (num === names[i]) {
          count++;
        }
      }
      if (count === 0) {
        newFileNames.push(`${file}(1)`);
      } else {
        newFileNames.push(`${file}(${count})`);
      }
    }
  });
  return newFileNames;
}

module.exports = {
  renameFiles
};
