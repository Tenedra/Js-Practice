// По городу движется автобус, и он забирает и высаживает несколько человек на каждой автобусной остановке.

// Вам будет предоставлен список(или массив) пар целых чисел.Элементы каждой пары представляют количество людей, вошедших в автобус(первый элемент), и количество людей,
// вышедших из автобуса(второй элемент) на автобусной остановке.

// Ваша задача - вернуть количество людей, которые все еще находятся в автобусе после последней автобусной станции(после последнего массива).
// Несмотря на то, что это последняя автобусная остановка, автобус не пустой, и некоторые люди все еще в автобусе, и они, вероятно, спят там: D

// Взгляните на тестовые примеры.

// Пожалуйста, имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда > = 0.
// Таким образом, возвращаемое целое число не может быть отрицательным.

// Второе значение в первом целочисленном массиве равно 0, поскольку автобус пуст на первой автобусной остановке.
function number(busStops) {
  //    let count = 0;
  //    for (let i = 0; i < busStops.length; i++) {
  //        count = count + busStops[i][0] - busStops[i][1];
  //    }
  //    return count;
  return busStops.reduce((item, index) => item + index[0] - index[1], 0);
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
