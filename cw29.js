// Герой находится на пути к замку, чтобы завершить свою миссию.Однако ему сказали,
// что замок окружен парой могущественных драконов!для победы над каждым драконом требуется 2 пули,
// наш герой понятия не имеет, сколько пуль он должен нести..Если предположить,
// что он возьмет определенное заданное количество пуль и двинется вперед, чтобы сразиться с другим определенным заданным количеством драконов, выживет ли он ?
// Верните True, если да, False в противном случае :)

// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(1500, 751));
