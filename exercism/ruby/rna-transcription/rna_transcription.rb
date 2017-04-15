class Complement
  def self.of_dna(a)
    if (a.split("") - ["G", "C", "T", "A"]).length > 0
      ""
    else
      a = a.gsub(/[GCTA]/, 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U')
    end
  end
end

module BookKeeping
  VERSION = 4
end
