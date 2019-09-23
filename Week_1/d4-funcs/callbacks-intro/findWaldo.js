// //callback
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(name);   // execute callback
    }
  }
}

const actionWhenFound = function(name) {
  console.log(`Found ${name}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//forEach
const findWaldo = function(names, found) {
  names.forEach(function(name, indexNumber) {
    if (name === 'Waldo') {
      found(name, indexNumber);
    }
  })
}

const actionWhenFound = function(name, indexNumber) {
  console.log(`Found ${name} in ${indexNumber}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
