class Hamming
  def self.compute(a, b)
    raise ArgumentError, 'Must be same length' unless a.length == b.length

    diff = 0
    a.each_char.with_index { |v, i| v != b[i] ? diff += 1 : diff}
    diff
  end
end

module BookKeeping
  VERSION = 3
end
