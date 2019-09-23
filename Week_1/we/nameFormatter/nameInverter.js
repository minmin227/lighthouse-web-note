const nameInverter = function(name) {
  return name.split(' ').reverse().join(', ');
}
console.log(nameInverter("Khurram Virani" ));

module.exports =  nameInverter;
