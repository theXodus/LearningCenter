function Hamming() {};

Hamming.prototype.compute = function(a,b) {
  // make sure strands are same length
  if (a.length != b.length) { throw "DNA strands must be of equal length." }
  // counter for missing matches
  var count = 0;

  for (var i = 0; i < a.length; i++) {
    a[i] != b[i] ? count++ : count
  }

  return count
}

module.exports = Hamming;
