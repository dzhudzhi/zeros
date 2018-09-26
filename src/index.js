module.exports = function getZerosCount(number) {
  let fives = 5, sum = 0;

  while (fives <= number) {
      sum += Math.floor(number / fives);
      fives *= 5;
  }
  return sum;
}
