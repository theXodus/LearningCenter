function pangram(text) {
  this.text = text;
};

pangram.prototype.isPangram = function() {
  let text = this.text;
  if (text === "") { return false }

  text = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let pangramArr = [];

  for (var i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i]) && !pangramArr.includes(text[i])) {
      pangramArr.push(text[i]);
    }
  }

  return pangramArr.length == 26 ? true: false;
}

module.exports = pangram;
