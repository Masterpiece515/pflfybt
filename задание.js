// задание 1
// let celsius = 10;
// let fahrenheit = 32;
// console.log(`${celsius} по Цельсию равно ${(celsius * 9/5) + 32} по Фаренгейту`);
// console.log(`${fahrenheit} по Фаренгейту равно ${(fahrenheit - 32) * 5/9} по Цельсию`);

// // Задача №2: Прямоугольник (проверка треугольника)
// let a = 3, b = 4, c = 2;
// if (a + b > c && a + c > b && b + c > a) {
//     console.log("треугольник существует");
//     let p = (a + b + c) / 2;
//     let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     console.log(`пириметр = ${a + b + c}`);
//     console.log(`Площадь = ${area}`);
//     console.log(`Соотношение = ${(a + b + c) / area}`);
// } else {
//     console.log("треугольника нету");
// }
// //задание 3
// let num = 100;
// let a = "fizz";
// let b = "buzz";
// let s = "fizz buzz";
// for (let i = 0; i <= num; i++) {
//   if (i % 5 === 0) {
//     console.log(s);
//   } else if (i % 2 === 0) {
//     console.log(b);
//   } else {
//     console.log(a);
//   }
// }

// // Задача №4: Елка
// let height = 12;
// let tree = "";
// for (let i = 1; i <= height; i++) {
//     tree += (i % 2 === 0 ? "#" : "*").repeat(i) + "\n";
// }
// tree += "||";
// console.log(tree);

// // Задача №5: Деление
// let n = 12, x = 2, y = 6;
// console.log(n % x === 0 && n % y === 0);

// // Задача №6: Кварталы
// let month = 11;
// console.log(`месяц ${month} => ${Math.ceil(month / 3)} квартал`);

// // Задача №7: Два в степени
// let power = 10;
// let result = [];
// for (let i = 0; i <= power; i++) {
//   result.push(2 ** i);
// }
// console.log(result.join(", "));
