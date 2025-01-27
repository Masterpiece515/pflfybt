const myName = "чебупеля";
const programmingLanguage = "JavaScript";
const courseCreatorName = "3";
const reasonText = "это интересно и перспективно";
const numberOfMonth = 3;

const finalText =
  "Всем привет! Меня зовут, " +
  myName +
  ". Сейчас я изучаю язык программирования " +
  programmingLanguage +
  " на курсе " +
  courseCreatorName +
  ". Я хочу стать веб-разработчиком, потому что " +
  reasonText +
  ". До этого я изучал " +
  programmingLanguage +
  " " +
  numberOfMonth +
  " месяцев. Я уверен, что пройду данный курс до конца!";

console.log(finalText);

//2 ЗАДАНИЕ
let myInfoText = `Всем привет! Меня зовут, чебупеля . Сейчас я изучаю язык программирования JavaScript на курсе 3. Я хочу стать веб-разработчиком, потому что это интересно и перспективно. До этого я изучал JavaScript 3 месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");

console.log(myInfoText);

console.log(myInfoText.length);

console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);
//3 ЗАДАНИЕ
const userName = prompt("Как вас зовут?");

let formattedName = userName;
if (formattedName !== null) {
  formattedName = formattedName.toLowerCase().trim();
}

if (formattedName !== null) {
  alert("Вас зовут " + formattedName);
} else {
  alert("Вы отменили ввод имени.");
}
//4 ЗАДАНИЕ
const pono = prompt("Как вас зовут?");
let forName = pono;
if (forName !== null) {
  formattedName = formattedName.toLowerCase().trim();
}

const userAge = prompt("Сколько вам лет?");
let formattedAge = userAge;

if (formattedAge !== null) {
  formattedAge = formattedAge.trim();
  formattedAge = parseInt(formattedAge, 10);

  if (isNaN(formattedAge)) {
    formattedAge = 0;
    alert("Некорректный ввод возраста.  Возраст установлен в 0.");
  }
}

if (forName !== null && formattedAge !== null) {
  alert("Вас зовут " + formattedName + " и вам " + formattedAge + " лет");
} else if (formattedName === null) {
  alert("Вы отменили ввод имени.");
} else {
  alert("Вы отменили ввод возраста.");
}

//задание 5
let userString = prompt("Введите текст для обрезки").trim();
let startSlicelndex = parseInt(
  prompt("Введите индекс, с которого нужно начать обрезку строки")
);
let endSlicelndex = parseInt(
  prompt("Введите индекс, которым нужно закончить обрезку строки")
);

if (
  isNaN(startSlicelndex) ||
  isNaN(endSlicelndex) ||
  startSlicelndex < 0 ||
  endSlicelndex > userString.length ||
  startSlicelndex > endSlicelndex
) {
  alert(
    "Некорректные данные. Пожалуйста, введите целые числа, и начало обрезки должно быть меньше или равно концу обрезки, и не выходить за пределы длины строки."
  );
} else {
  let slicedString = userString.slice(startSlicelndex, endSlicelndex);
  alert("Результат: " + slicedString);
}


