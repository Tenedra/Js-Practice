// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел,
// учитывая массив из минимум 4 положительных целых чисел.
// Никакие числа с плавающей запятой или неположительные целые числа передаваться не будут.

// Например, когда массив передается как[19, 5, 42, 2, 77], результат должен быть7.

function sumTwoSmallestNumbers(numbers) {
    // numbers.sort((a, b) => {
    //     return a > b ? 1 : a === b ? 0 : -1;
    // });
    numbers.sort((a, b) => a-b) //если число отрицательное, то сортируется, если ноль/положительное, то остается как есть
    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));