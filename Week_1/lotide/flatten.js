// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };


// const eqArrays = function (array1, array2) {
//   let x = false; 
//   if (array1.length !== array2.length){
//     x = false;
//   } else {
//     for (i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]){
//         x = false;
//         break; 
//       }
//       else{
//         x = true; 
//       }
//     }
//   };

//   if(x == 1){
//     console.log(`Assertion Passed: ${[array1]} === ${[array2]}`)
//   } else {
//     console.log(`Assertion Failed: ${[array1]} !== ${[array2]}`)
//   }
// };

// eqArrays([1, 2, 3], [1, 2, '3']);
// eqArrays([1, 2, 3], [1, 2, 3]);

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if(Array.isArray(value) !== true) {
      newArray.push(value);
    } else {
      for(let j = 0; j < value.length; j++) {
        let valueInArray = value[j];
        newArray.push(valueInArray);
      }
    }
  }
  console.log(newArray);
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
