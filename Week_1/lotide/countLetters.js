const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  let sentenceJoin = sentence.split(' ').join('');
  for(letter of sentenceJoin) {
    if(!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    } 
  }
  console.log(result);
};

countLetters("lighthouse in the house")