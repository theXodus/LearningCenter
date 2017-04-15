function DnaTranscriber() {};

DnaTranscriber.prototype.toRna = function(input) {
  let RNA = {"C": "G", "G": "C", "T": "A", "A": "U"};
  let transcribed = []

  for (var i = 0; i < input.length; i++) {
    if (RNA[input[i]] == undefined) { throw "Invalid input"}
    let t = RNA[input[i]];
    transcribed.push(t);
  }

  return transcribed.join('');
}

module.exports = DnaTranscriber;
