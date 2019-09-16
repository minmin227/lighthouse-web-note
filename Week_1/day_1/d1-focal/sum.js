const args = process.argv.slice(2);
let sum = function() {
  let num = 0;
  for (let i = 0; i < args.length; i++) {
    num = num + Number(args[i]);
  }
  console.log(num);
};
sum();