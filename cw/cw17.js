// Реализуйте функцию, которая складывает два числа вместе и возвращает их сумму в двоичном формате.
// Преобразование может быть выполнено до или после добавления.

// Возвращаемое двоичное число должно быть строкой.

// Примеры:(Ввод1, Ввод2 --> Вывод (объяснение)))

function addBinary(a, b) {
  //   let dec = a + b;
  return (a + b).toString(2);
}

console.log(addBinary(5, 9));