function Gigasecond(time) {
  this.time = time
};

Gigasecond.prototype.date = function() {
  let date = this.time
  let value = (date.valueOf() / 1000) + 1E9
  return new Date(value * 1000)
}

module.exports = Gigasecond;
