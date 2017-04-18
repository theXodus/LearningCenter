class Squares
  def initialize(num)
    @num = num
  end

  def square_of_sum
    sum = 0
    n = 0
    while n <= @num do
      sum += n
      n += 1
    end
    sum ** 2
  end

  def sum_of_squares
    sum = 0
    n = 1
    while n <= @num do
      sum += n ** 2
      n += 1
    end
    sum
  end

  def difference
    a = square_of_sum
    b = sum_of_squares
    a - b
  end
end

module BookKeeping
  VERSION = 3
end
