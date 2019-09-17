const args = process.argv.slice(2);
const pig = function () {
  let latinWord = '';
  for (let i = 0; i < args.length; i++) {
  let word = args[i];
  let translate = '';
  translate = `${word.slice(1)}${word[0]}ay `;
  latinWord +=translate;
  }
  return latinWord;
};

console.log(pig());
