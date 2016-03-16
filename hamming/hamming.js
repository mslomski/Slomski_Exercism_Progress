function Hamming(){

}
Hamming.prototype.compute = function(stringOne, stringTwo) {

  var count = 0;

  if (stringOne.length != stringTwo.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for (i=0; i < stringOne.length; i++) {
    if (stringOne[i] != stringTwo[i]) {
      count++;
    }
  };

  return count;
};

module.exports = Hamming;
