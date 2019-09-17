const args = process.argv.slice(2);
const print = function() {
  let result = '';
  for (let i = 0; i < args.length; i++) {
    let str = args[i];
    for (let j = (args[i].length - 1); j >= 0; j--) {
      result += str[j];
    }
    result = result + '\n';
  }
  console.log(result);
};

print();
