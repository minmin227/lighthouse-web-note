function encrypt (string, key) {
  let ascCodeArray = [];
  let newCode = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      ascCodeArray.push(' ');
    } else {
      ascCode = string.charCodeAt(i);
      ascCodeArray.push(ascCode);
    }
  }
  
  for (let j = 0; j < ascCodeArray.length; j++) {
    if (ascCodeArray[j] === ' ') {
      newCode.push(' ');

    } else if (ascCodeArray[j] >= 97 && ascCodeArray[j] <= 122) {
      if (key > 0 && (key + ascCodeArray[j]) > 122) {
        newCode.push(ascCodeArray[j] + (key - 26));
      } else if (key < 0 && (key + ascCodeArray[j]) < 97) {

        newCode.push(ascCodeArray[j] + (key + 26));
      } else {
        newCode.push(ascCodeArray[j] + key);
      }

    } else if (ascCodeArray[j] >= 65 && ascCodeArray[j] <= 90) {
      if (key > 0 && (key + ascCodeArray[j]) > 90) {
        newCode.push(ascCodeArray[j] + (key - 26));
      } else if (key < 0 && (key + ascCodeArray[j]) < 65) {

        newCode.push(ascCodeArray[j] + (key + 26));
      } else {
        newCode.push(ascCodeArray[j] + key);
      }     
    } 
  }
  
  let result = '';
  for (let code of newCode) {
    if (code === ' ') {
      result += ' ';
    } else {
      result += String.fromCharCode(code);
    }
  }
  return result;
} 


console.log(encrypt('hello world', 5));



module.exports = encrypt;

