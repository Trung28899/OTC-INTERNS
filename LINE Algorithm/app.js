/*

  GETTING AN ARRAY OF SUBSTRING FROM A STRING
  EACH SUBSTRING SHOULDN'T HAVE A REPEATED CHARACTER

  INPUT: A STRING
  OUTPUT: THE LENGTH OF AN ARRAY

*/

// Given a string and a character, function will return an array with the
// indexes of a character in that string
function findIndexArray(str, character) {
  var indexArray = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === character) indexArray.push(i);
  }

  return indexArray;
}

// Given a string, this function will return an object with the keys and an array for each key
// the key value will be distinct characters in the string
// the array value will be the array with the indexes of a character in that string
function getCharOccurences(str) {
  let charOccurances = {};
  for (let i = 0; i < str.length; i++) {
    const indexArray = findIndexArray(str, str[i]);
    if (indexArray.length > 0) {
      charOccurances[`${str[i]}`] = indexArray;
    }
  }
  return charOccurances;
}

// Solution function
function solution(str) {
  let charOccurances = getCharOccurences(str);
  let startPointIndex = 0;
  const subStringArray = [];

  // Loop to get a substring array with distinctive characters from a string
  while (true) {
    let endPointIndex = 99999;
    let startPointHolder = startPointIndex;

    for (let i = startPointIndex; i < str.length; i++) {
      const arrayIndex = charOccurances[str[i]];

      if (arrayIndex.length > 1) {
        for (let z = 1; z < arrayIndex.length; z++) {
          if (arrayIndex[z] < endPointIndex && arrayIndex[z] > i) {
            endPointIndex = arrayIndex[z];
          }
        }
      }

      if (i === endPointIndex) {
        startPointHolder = i;
        break;
      }
    }

    if (endPointIndex > str.length) endPointIndex = str.length;

    subStringArray.push(str.substring(startPointIndex, endPointIndex));
    startPointIndex = startPointHolder;

    if (endPointIndex === str.length) break;
  }

  return subStringArray.length;
}

solution("helloworld");
