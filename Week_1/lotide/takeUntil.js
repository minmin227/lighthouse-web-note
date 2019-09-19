const takeUntil = function(array, callback) {
  const data = [];
  for (value of array) {
    if (!callback(value)) {
      data.push(value);
    } else {
      return data;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log(takeUntil(data2, x => x === ','));
console.log(takeUntil(data1, x => x < 0));
