class Pangram
  def self.pangram?(phrase)
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    phrase.downcase.split("").each { |chr| alphabet.include?(chr) ? alphabet.delete(chr) : chr}
    alphabet.length == 0 ? true : false
  end
end

module BookKeeping
  VERSION = 4
end
