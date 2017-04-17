class Raindrops

  def self.convert(a)
    str = ""
    if a % 3 == 0
      str += "Pling"
    end
    if a % 5 == 0
      str += "Plang"
    end
    if a % 7 == 0
      str += "Plong"
    end
    if str == ""
      str = a.to_s
    end
    str
  end

end

module BookKeeping
  VERSION = 3
end
