
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function (array1, array2) {
  let x = false; 
  if (array1.length !== array2.length){
    x = false;
  } else {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]){
        x = false;
        break; 
      }
      else{
        x = true; 
      }
    }
  };

  if(x == 1){
    console.log(`Assertion Passed: ${[array1]} === ${[array2]}`)
  } else {
    console.log(`Assertion Failed: ${[array1]} !== ${[array2]}`)
  }
};

eqArrays([1, 2, 3], ['a', 'b']);
eqArrays([1, 2, 3], [1, 2, 3]);


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//case 1: Update numbers
const oldID = ['D23', 'F56', 'E32', 'G99', 'b01', 's77'];
eqArrays(oldID, map(oldID,id => Number(id[1] + id[2])));

//case 2: Add user well-strutured

const nums = [2, 3, 65, 74, 6, 8, 5];
const newID = map(nums, id => `user${i++}`);
console.log(newID);

//case 3: add 'User' at beginning
const nums2 = [2, 3, 65, 74, 6, 8, 5];
const newID2 = map(nums2, id2 => `USERNUM: ${id2}`);
console.log(newID2);