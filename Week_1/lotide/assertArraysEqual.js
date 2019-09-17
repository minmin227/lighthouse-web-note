const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};


const eqArrays = function (array1, array2) {
  let x = false; 
  if (array1.length !== array2.length) return false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      x = false;
      break; 
    }
    else{
      x = true; 
    }
  } 

  if(x){
    console.log(`Assertion Passed: ${[array1]} === ${[array2]}`)
  } else {
    console.log(`Assertion Failed: ${[array1]} !== ${[array2]}`)
  }
};

eqArrays([1, 2, 3], [1, 2, '3']);