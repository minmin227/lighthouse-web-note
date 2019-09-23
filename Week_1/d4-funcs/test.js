function camel (string) {
  string = string.toLowerCase();
  const array = string.split(' ');
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newWord = (array[i][0]).toUpperCase() + array[i].slice(1);
    newArray.push(newWord);
  }
  let newString = array[0] + newArray.join(``);
  return newString;
};

function pascal (string) {
  string = string.toLowerCase();
  const array = string.split(' ');
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newWord = (array[i][0]).toUpperCase() + array[i].slice(1);
    newArray.push(newWord);
  }
  let newString = newArray.join('');
  return newString;
};


function snake (string) {
  string = string.toLowerCase();
  const newString = string.replace(/ /g, '_');
  return newString;
}

function kebab (string) {
  string = string.toLowerCase();
  const newString = string.split(' ').join('-');
  return newString;
}

function title (string) {
  string = string.toLowerCase();
  const array = string.split(' ');
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newWord = (array[i][0]).toUpperCase() + array[i].slice(1);
    newArray.push(newWord);
  }
  let newString = newArray.join(' ');
  return newString;
}

function vowel (string) {
  string = string.toLowerCase();
  const array = string.split('');
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'i' && array[i] !== 'a' && array[i] !== 'o' && array[i] !== 'e' && array[i] !== 'u' && array[i] !== 'y') {
      newArray.push(array[i]);
    } else {
      newArray.push(array[i].toUpperCase());
    }
  }
  let newString = newArray.join('');
  return newString;
}

function consonant (string) {
  string = string.toLowerCase();
  const array = string.split('');
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'i' || array[i] === 'a' || array[i] === 'o' || array[i] === 'e' || array[i] === 'u' || array[i] === 'y') {
      newArray.push(array[i].toLowerCase());
    } else {
      newArray.push(array[i].toUpperCase());
    }
  }
  let newString = newArray.join('');
  return newString;
}

function upperSnake (string) {
  string = string.toUpperCase();
  const newString = string.replace(/ /g, '_');
  return newString;
}


function makeCase (input, caseRequired) {
  const newInput = (caseRequired === 'camel') ? camel(input) : (caseRequired === 'pascal') ? pascal(input) : (caseRequired === 'snake') ? snake(input) : (caseRequired === 'kebab') ? kebab(input) : (caseRequired === 'title') ? title(input) : (caseRequired === 'vowel') ? vowel(input) : (caseRequired === 'consonant') ? consonant(input) : upperSnake(input);
  return newInput;
} 


console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




