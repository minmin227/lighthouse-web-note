function loopyLighthouse (range, multiples, words) {
  let print;
  let combo = `${words[0]}${words[1]}`;
  for (let i = range[0]; i < range[1]; i++) {
    print ='';
    if (i%multiples[0] === 0 && i%multiples[1] === 0) {
      print += combo;
    } else if (i%multiples[0]) {
      print += words[0];
    } else if (i%multiples[1]) {
      print += words[1];
    } else if (print ===''){
      print += i;
    }
    console.log(print);
  }
}

console.log(loopyLighthouse([80, 90], [10, 3], ["Batty", "Beacon"]));
