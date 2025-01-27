// задание 6
let userText = prompt("Введите текст").trim();
let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

if (indexOfWord === -1) {
  alert("Результат: Слово не найдено в тексте.");
} else {
  let slicedText = userText.substring(0, indexOfWord);
  alert("Результат: " + slicedText);
}
