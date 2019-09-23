function sumtoOne (n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sumtoOne(n-1);
  }
}
console.log(sumtoOne(4));