const arg = process.argv.slice(2);
function ranDom(max) {
return Math.floor(Math.random() * Math.floor(max));
};

const rollTime = function () {
  let display = ``;
  for( i = 1; i < arg; i++) {
    display += ranDom(7) + ', ';
  }
  if (i=arg) {
    display += ranDom(7);
  }
  console.log(display);
}
rollTime();