var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.

  // test if number
  if (Number.isInteger(who)) {
    return "Please enter a name."
  }

  let name = "you"

  if (who) {
    name = who
  }
  
  return "One for " + name + ", one for me.";
};

module.exports = TwoFer;
