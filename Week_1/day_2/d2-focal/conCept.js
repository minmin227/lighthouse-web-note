const array = process.argv.slice(2);
const joinList = function (){
  let newArr = [];
  for(let j = 0; j < array.length; j++){
    let word = array[j];
    let result = word.indexOf(',');
    let newWord = '';
    for(let i = 0; i < result; i++) {
      newWord += word[i];
    }
    console.log(newWord);
  }
}
joinList();
