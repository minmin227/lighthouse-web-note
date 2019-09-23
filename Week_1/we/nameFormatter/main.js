const sayHelloTo = require('./moduleCheck');


sayHelloTo('Bernie');



const animals = [
  {
      "name": "cat",
      "size": "small",
      "weight": 5
  },
  {
      "name": "dog",
      "size": "small",
      "weight": 10
  },
  {
      "name": "lion",
      "size": "medium",
      "weight": 150
  },
  {
      "name": "elephant",
      "size": "big",
      "weight": 5000
  }
]

let b = animals.forEach(e => {
  e.weight = 12;
  console.log(e);
})
console.log(b);


let animals_weight = animals.map((a, index, animals) => {
  return a.weight;
})
console.log(animals_weight);

let animal_name = animals.filter((animal) =>{
  if (animal.weight < 5000) {
    console.log(`${animal.name}`);
  }
})
console.log(animal_name)

let animals_total_weight = animals.reduce((weight, animal, index, animals) => {
  return weight += animal.weight;
}, 0)

console.log(animals_total_weight);

array1 = [1,2,3,7,5,6]
let check = Math.max(...array1);
console.log(check);