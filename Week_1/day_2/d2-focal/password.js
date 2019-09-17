const string = process.argv.slice(2);
const obfuscate = function(){
  let passWord = string[0];
  let newPass = [];
  for (let i = 0; i < passWord.length; i++) {
    if (passWord[i] === 'a') {
      newPass +='4';
    } else if (passWord[i] === 'e') {
      newPass += '3';
    } else if (passWord[i] === 'o') {
      newPass += '0';
    } else if (passWord[i] === 'l') {
      newPass += '1';
    } else {
      newPass += passWord[i];
    }
  }
  console.log(newPass);
};

obfuscate();