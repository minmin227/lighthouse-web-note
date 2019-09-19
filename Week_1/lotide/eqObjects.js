
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
  } return true;
};


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (key of key1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        console.log(array2);
        return false;
      } 
    } 
    else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const ab = { a: 'eh', b: 'bee'}
const ba = { b: 'bee', a: 'not'}
// console.log("test: ", eqObjects(ab, ba)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false



