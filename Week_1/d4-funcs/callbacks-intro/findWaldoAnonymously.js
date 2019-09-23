// //callback
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(name);   // execute callback
    }
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(name) {console.log(`Found ${name}`)});

//forEach
const findWaldoForEach = function(names, found) {
  names.forEach(function(name, indexNumber) {
    if (name === 'Waldo') {
      found(name, indexNumber);
    }
  })
}

findWaldoForEach(["Alice", "Bob", "Waldo", "Winston"], function(name, indexNumber) {
  console.log(`Found ${name} in ${indexNumber}!`);
});
