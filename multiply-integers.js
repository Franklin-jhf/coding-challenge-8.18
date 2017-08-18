module.exports = {
  // a recursive function that multiplies two numbers without operators or loops
  multiplyInts: (x, y) => {
    // any number multiplied by 0 is equal to 0
    if (y === 0) { return 0; }

    // repeatedly add x for y iterations
    if (y > 0) { return (x + multiplyInts(x, y-1)); }

    // in case y is negative either int is negative, product will be negative
    // if both x and y are negative, the product will be positive
    if (y < 0) { return -multiplyInts(x, -y); }
  }
}