// Учитывая два целых aчисла и b, которые могут быть положительными или отрицательными,
// найдите сумму всех целых чисел между ними и включая их, и верните ее.
// Если два числа равны, верните aили b.

// Примечание: a и b не отсортированы!

function getSum(a, b) {
  return ((a + b) / 2) * (Math.abs(a - b) + 1);
}

console.log(getSum(1, 1));