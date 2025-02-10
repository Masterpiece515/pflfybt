//задание 1

//const existedUserLogin = "the_best_student";
//const existedUserPassword = "12345678";

//let userLogin = prompt("Введите логин").trim();
//let userPassword = prompt("Введите пароль").trim();

//if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
//alert(`Добро пожаловать, ${userLogin}!`);
//} else {
//alert("Логин и (или) Пароль введены неверно!");
//}
//задание 3
//const questions = [
//  { question: "JavaScript появился в 1995 году?", answer: "Верно" , correct: true},
//  { question: "Спецификация JavaScript называется ECMAScript?", answer: "Верно", correct: true },
//  { question: "JavaScript был создан за 1 месяц?", answer: "Нет, разработка заняла больше времени.", correct: false }
//];

//for (let i = 0; i < questions.length; i++) {
//let userConfirmation = confirm(questions[i].question);
//if (userConfirmation === questions[i].correct) {
//  alert(questions[i].answer);
//} else {
//  alert(questions[i].answer);
// }
//}
// задание 4
//let i = 0;
//do {
 // let newStudent = prompt("Введите имя нового студента!");
  //newStudent = newStudent.trim();
  //if (newStudent) {
    //alert(`Добро пожаловать, ${newStudent}!`);
  //}
  //i++;
//} while (i < 3);
//задание 5
let sum = 0;
for (let i = 0; i <= 100; i++) {
sum += i;
}
alert("Сумма чисел от 0 до 100: " + sum);
