function Bob() {}

Bob.prototype.hey = function(input) {
  let lastChar = input.slice(-1);
  const re = /[a-z]/i;

  if (input == input.toUpperCase() && re.test(input)) {
    return "Whoa, chill out!"
  } else if (lastChar == "?") {
    return "Sure."
  } else if (input.trim() == "") {
    return "Fine. Be that way!"
  } else {
    return 'Whatever.'
  }
}

module.exports = Bob;
