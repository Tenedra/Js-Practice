// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на "0",
// а любую цифру 5 и выше на "1".Верните результирующую строку.

// Примечание: ввод никогда не будет пустой строкой

function fakeBin(x) {
  let c = x.replace(/[1-4]/g, 0);
  return c.replace(/[5-9]/g, 1);
  //return x.replace(/\d/g, d => d < 5 ? 0 : 1)
}

console.log(fakeBin("45385593107843568"));
