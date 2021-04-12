/**
 * Given a sorted arr, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {arr} arr
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let pos = -1;
  let result = false;
  let middle;

  while (result === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      result = true;
      pos = middle;
    } else if (array[middle] > value) { // in first half
      last = middle - 1;
    } else { // in second half
      first = middle + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
