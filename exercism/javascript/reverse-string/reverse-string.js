// var ReverseString = function () {};

var ReverseString = function(str) {
  if (!str) { return "" }

  var len = str.length
  var reversed = ""

  for (var i = 0; i < len; i++) {
    reversed += str.charAt(len - i)
  }

  return reversed += str.charAt(0)

};

module.exports = ReverseString;
