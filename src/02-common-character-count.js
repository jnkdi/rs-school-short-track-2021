/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// 1.Пройтись по первой строке
// 2.С помощью includes добавить в массив если совпадает
// 3.Удалить символ из второй строки с помощью replace
// 4.Вывести длину массива

function getCommonCharacterCount(s1, s2) {
  const result = [];
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return result.length;
}

module.exports = getCommonCharacterCount;
