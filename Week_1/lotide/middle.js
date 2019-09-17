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

const middle = function (array){
  let i = Math.ceil(array.length/2);
  let newArray = [];
  if (array.length > 2) {
    if (array.length%2 === 0) {
      newArray.push(array[i-1]);
      newArray.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}