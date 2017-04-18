class Raindrops

  def self.convert(a)
    str = ""
    str += divisible_by_3(a).to_s
    str += divisible_by_5(a).to_s
    str += divisible_by_7(a).to_s
    str.empty? ? a.to_s : str
  end

  private

  def self.divisible_by_3(i)
    if i % 3 == 0
       "Pling"
     end
  end
  def self.divisible_by_5(i)
    if i % 5 == 0
       "Plang"
     end
  end
  def self.divisible_by_7(i)
    if i % 7 == 0
       "Plong"
     end
  end
end

module BookKeeping
  VERSION = 3
end
