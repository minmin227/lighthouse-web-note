function printItems(array) {
  array.forEach((item )=> {
    if(Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

printItems(["😎", ["💩", [[[["🤗"]]]]], "😼", "😂"])


