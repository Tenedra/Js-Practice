// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even"для четных или "Odd"нечетных чисел.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(7));
