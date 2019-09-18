const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};


const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
  } return true;
};


const letterPositions = function(sentence) {
  const result = {};
  const sentenceJ = sentence.split(' ').join('');

  for (let i = 0; i < sentenceJ.length; i++) {

    if (result[sentenceJ[i]]) {
      result[sentenceJ[i]].push(i);
    } else {
      result[sentenceJ[i]] = [i];
    }
  }
  console.log(result);
}

letterPositions('lighthouse in the house');
