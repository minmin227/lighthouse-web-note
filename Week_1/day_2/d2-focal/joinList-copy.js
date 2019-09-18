const joinArray = function(array) {
  let intro = ``;
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      intro += array[i] + '';
    } else {
      intro += array[i] + ', ';
    }
  }
  console.log(intro);
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
joinArray(conceptList);
