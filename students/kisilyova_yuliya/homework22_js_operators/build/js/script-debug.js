"use strict";

<<<<<<< HEAD
//1)   Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var question1 = +prompt("Введите свой возраст");
var answer1;

if (question1 >= 0 && question1 <= 12) {
  answer1 = "Ребенок";
} else if (question1 >= 13 && question1 <= 18) {
  answer1 = "Подросток";
} else if (question1 >= 19 && question1 <= 60) {
  answer1 = "Взрослый";
} else if (question1 >= 61) {
  answer1 = "Пенсионер";
} else {
  answer1 = "Введите только цифру";
}

console.log(answer1); //2)   Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var question2 = +prompt("Введите число");
var answer2;

switch (question2) {
  case 1:
    answer2 = "!";
    break;

  case 2:
    answer2 = "@";
    break;

  case 3:
    answer2 = "#";
    break;

  case 4:
    answer2 = "$";
    break;

  case 5:
    answer2 = "%";
    break;

  case 6:
    answer2 = "^";
    break;

  case 7:
    answer2 = "&";
    break;

  case 8:
    answer2 = "*";
    break;

  case 9:
    answer2 = "(";
    break;

  default:
    answer2 = "Неверное число";
}

console.log(answer2); //3)   Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var question3 = +prompt("Введите трехзначное число");
var answer3;
var num1 = parseInt(question3 / 100);
var num2 = parseInt(question3 / 10) % 10;
var num3 = parseInt(question3 % 10);

if (num1 === num2 || num2 === num3 || num1 === num3) {
  answer3 = "Найдено совпадение цифр";
} else if (Number.isNaN(question3)) {
  answer3 = "Можно ввести только число";
} else {
  answer3 = "Совпадений не найдено";
}

console.log(answer3); //4)   Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var question4 = +prompt("Введите год");
var answer4;

if (question4 % 400 === 0 || question4 % 4 === 0 && question4 / 100 !== 0) {
  answer4 = "Год высокосный";
} else if (Number.isNaN(question4)) {
  answer4 = "Можно ввести только год";
} else {
  answer4 = "Год невысокосный";
}

console.log(answer4); //5)   Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var question5 = +prompt("Введите пятиразрядное число");
var number1 = parseInt(question5 / 10000);
var number2 = parseInt(question5 / 1000) % 10;
var number3 = parseInt(question5 / 100) % 10;
var number4 = parseInt(question5 / 10) % 10;
var number5 = parseInt(question5 % 10);
var answer5;

if (number1 === number2 && number2 === number3 && number3 === number4 && number4 === number5) {
  answer5 = "Палиндром";
} else if (Number.isNaN(question5)) {
  answer5 = "Можно ввести только цифру";
} else {
  answer5 = "Не палиндром";
}

console.log(answer5); //6)   Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var usdAmount = +prompt("Введите сумму в USD");
var currency = prompt("Введите валюту для конвертации: EUR, UAH, AZN");
currency = currency.toUpperCase();
var rateEUR = 33.15;
var rateUSD = 27.25;
var rateAZN = 16.03;
var answerValue;

if (Number.isNaN(usdAmount)) {
  answerValue = "Можно ввести только сумму";
} else if (currency === 'EUR') {
  answerValue = (usdAmount * (rateUSD / rateEUR)).toFixed(2) + " EUR";
} else if (currency === 'UAH') {
  answerValue = (usdAmount * rateUSD).toFixed(2) + " UAH";
} else if (currency === 'AZN') {
  answerValue = (usdAmount * (rateUSD / rateAZN)).toFixed(2) + " AZN";
} else {
  alert("Можно ввести только - EUR, UAH, AZN");
}

console.log(answerValue); //7)   Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var amountPurchase = +prompt("Введите сумму покупки");
var discount3 = 3;
var discount5 = 5;
var discount7 = 7;
var resultPurchase;

if (amountPurchase <= 199 && amountPurchase >= 0) {
  resultPurchase = amountPurchase + " грн.";
} else if (amountPurchase >= 200 && amountPurchase <= 300) {
  resultPurchase = amountPurchase - amountPurchase * (discount3 / 100) + " грн. сумма к оплате включая скидку 3%";
} else if (amountPurchase >= 301 && amountPurchase <= 500) {
  resultPurchase = amountPurchase - amountPurchase * (discount5 / 100) + " грн. сумма к оплате включая скидку 5%";
} else if (amountPurchase >= 501) {
  resultPurchase = amountPurchase - amountPurchase * (discount7 / 100) + " грн. сумма к оплате включая скидку 7%";
} else if (Number.isNaN(amountPurchase) || amountPurchase < 0) {
  resultPurchase = "Введите корректную сумму";
}

console.log(resultPurchase); //8)   Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var cirle = +prompt("Введите длину окружности");
var square = +prompt("Введите периметр квадрата");
var resultSquareInCircle;
var diameter = cirle / Math.PI;
var side = square / 4;

if (side >= diameter) {
  resultSquareInCircle = "Окружность поместиться в квадрат";
} else if (side < diameter) {
  resultSquareInCircle = "Окружность не поместиться в квадрат";
} else if (Number.isNaN(cirle)) {
  resultSquareInCircle = "Введите корректное число";
} else if (Number.isNaN(square)) {
  resultSquareInCircle = "Введите корректное число";
}

console.log(resultSquareInCircle); //9)   Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var q1 = prompt("Выберете один из предложенных вариантов ответа. Что такое переменная? \n а) это «именованное хранилище» для данных; \n b) представляет собой математическую бесконечность; \n с) является «ссылкой на несуществующий объект».");
var q2 = prompt("Выберете один из предложенных вариантов ответа. Как обозначается оператор строгого равенства? \n a) != ; \n b) === ; \n c) !==");
var q3 = prompt("Выберете один из предложенных вариантов ответа. Каким оператором обозначается возведения в степень? \n a) * ; \n b) & ; \n c) **");
var testResult = 0;
var errorMsg;

if (q1 === "a") {
  testResult = testResult + 2;
} else if (q1 !== "a" || q1 !== "b" || q1 !== "c") {
  testResult = "Введите только предложенный вариант ответа";
  console.log(testResult);
}

if (q2 === "b") {
  testResult = testResult + 2;
} else if (q2 !== "a" || q2 !== "b" || q2 !== "c") {
  testResult = "Введите только предложенный вариант ответа";
  console.log(testResult);
}

if (q3 === "c") {
  testResult = testResult + 2;
} else if (q3 !== "a" || q3 !== "b" || q3 !== "c") {
  testResult = "Введите только предложенный вариант ответа";
  console.log(testResult);
}

console.log(testResult + " points");
/*
if (q3 === "c") {
    testResult = testResult + 2;
}
else if (q3 === "a"|| q3 === "b")
{
    testResult = 0;
}
else {
    testResult = 0;
}

console.log(testResult);*/
=======
//1)   Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var askAge = +prompt("Введите свой возраст");
var answerAge;

if (askAge >= 0 && askAge <= 12) {
  answerAge = "Ребенок";
} else if (askAge >= 13 && askAge <= 18) {
  answerAge = "Подросток";
} else if (askAge >= 19 && askAge <= 60) {
  answerAge = "Взрослый";
} else if (askAge >= 61) {
  answerAge = "Пенсионер";
} else if (Number.isNaN(askAge)) {
  answerAge = "Можно ввести только число";
}

console.log(answerAge); //2)   Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var askNum = +prompt("Введите число от 0 до 9");
var answerNum;

switch (askNum) {
  case 0:
    answerNum = ")";
    break;

  case 1:
    answerNum = "!";
    break;

  case 2:
    answerNum = "@";
    break;

  case 3:
    answerNum = "#";
    break;

  case 4:
    answerNum = "$";
    break;

  case 5:
    answerNum = "%";
    break;

  case 6:
    answerNum = "^";
    break;

  case 7:
    answerNum = "&";
    break;

  case 8:
    answerNum = "*";
    break;

  case 9:
    answerNum = "(";
    break;
}

if (Number.isNaN(askNum)) {
  answerNum = "Можно ввести только число";
}

console.log(answerNum); //3)   Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var askNumber3 = +prompt("Введите трехзначное число");
var answerNumber3;
var num1 = parseInt(askNumber3 / 100);
var num2 = parseInt(askNumber3 % 100 / 10);
var num3 = parseInt(askNumber3 % 10);

if (Number.isNaN(askNumber3)) {
  answerNumber3 = "Можно ввести только число";
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
  answerNumber3 = "Найдено совпадение!";
} else if (num1 !== num2 || num1 !== num3 || num2 !== num3) {
  answerNumber3 = "Совпадений не найдено!";
}

console.log(answerNumber3); //4)   Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var askYear = +prompt("Введите пожалуйста год");
var answerYear;

if (askYear % 400 === 0 || askYear % 4 === 0 && askYear % 100 !== 0) {
  answerYear = askYear + "  - год високосный";
} else if (Number.isNaN(askYear)) {
  answerYear = "Можно ввести только число";
} else if (askYear <= 0) {
  answerYear = "Введите корректное число";
} else {
  answerYear = askYear + "  - год невисокосный";
}

console.log(answerYear); //5)   Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var askNum5 = +prompt("Введите пожалуйста пятиразрядное число");
var askedNum1 = Math.floor(askNum5 / 10000);
var askedNum2 = Math.floor(askNum5 / 1000) % 10;
var askedNum3 = Math.floor(askNum5 / 100) % 10;
var askedNum4 = Math.floor(askNum5 / 10) % 10;
var askedNum5 = askNum5 % 10;
var answerNum5;

if (askedNum1 === askedNum5 && askedNum2 === askedNum4) {
  answerNum5 = "Число " + askNum5 + " палиндром";
} else if (Number.isNaN(askNum5)) {
  answerNum5 = "Можно ввести только число";
} else {
  answerNum5 = "Число " + askNum5 + " не палиндром";
}

console.log(answerNum5); //6)   Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var askAmountUsd = +prompt("Введите пожалуйста сумму в USD");
var askCurr = prompt("Введите пожалуйста валюту для конвертации - EUR, UAH, AZN");
var askCurrUp = askCurr.toUpperCase();
var USD = 27.09;
var EUR = USD / 33.02;
var AZN = USD / 15.94;
var answerAmounRez;

if (Number.isNaN(askAmountUsd)) {
  answerAmounRez = "Можно ввести только сумму";
} else if (askCurrUp === "EUR") {
  answerAmounRez = (askAmountUsd * EUR).toFixed(2) + " EUR";
} else if (askCurrUp === "UAH") {
  answerAmounRez = (askAmountUsd * USD).toFixed(2) + " UAH";
} else if (askCurrUp === "AZN") {
  answerAmounRez = (askAmountUsd * AZN).toFixed(2) + " AZN";
} else if (askCurrUp !== "EUR" || askCurrUp !== "UAH" || askCurrUp !== "AZN") {
  answerAmounRez = "Можно ввести только предложенные валюты";
}

console.log(answerAmounRez); //7)   Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var askAmountPurchase = +prompt("Введите пожалуйста сумму покупки");
var purchaseRez;

if (askAmountPurchase < 200) {
  purchaseRez = askAmountPurchase + " UAH";
} else if (askAmountPurchase >= 200 && askAmountPurchase <= 300) {
  purchaseRez = askAmountPurchase * 97 / 100 + " UAH";
} else if (askAmountPurchase >= 301 && askAmountPurchase <= 500) {
  purchaseRez = askAmountPurchase * 95 / 100 + " UAH";
} else if (askAmountPurchase >= 501) {
  purchaseRez = askAmountPurchase * 93 / 100 + " UAH";
} else if (Number.isNaN(askAmountPurchase)) {
  purchaseRez = "Можно ввести только сумму";
}

console.log(purchaseRez); //8)   Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var longCircle = +prompt("Введите длинну окружности");
var perSquare = +prompt("Введите периметр квадрата");
var diametr = longCircle / Math.PI;
var sideSquare = perSquare / 4;
var answerCircleSquare;

if (sideSquare >= diametr) {
  answerCircleSquare = "Окружность может поместиться в квадрат";
} else if (sideSquare < diametr) {
  answerCircleSquare = "Окружность НЕ может поместиться в квадрат";
} else if (Number.isNaN(longCircle)) {
  answerCircleSquare = "Можно ввести только числовое значение";
} else if (Number.isNaN(perSquare)) {
  answerCircleSquare = "Можно ввести только числовое значение";
}

console.log(answerCircleSquare); //9)   Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var firstQuestion = prompt("Введите букву только с одним правильным ответом. Столица Чехии? а) Прага; b) Барселона; c) Париж");
var secondQuestion = prompt("Введите букву только с одним правильным ответом.Столица Франции? а) Прага; b) Париж; c) Барселона");
var thirdQuestion = prompt("Введите букву только с одним правильным ответом.Столица Испании? а) Прага; b) Барселона; c) Мадрид");
var answerRez = 0;

if (firstQuestion === "a") {
  answerRez = answerRez + 2;
}

if (secondQuestion === "b") {
  answerRez = answerRez + 2;
}

if (thirdQuestion === "c") {
  answerRez = answerRez + 2;
} else if (firstQuestion !== "a" && firstQuestion !== "b" && firstQuestion !== "c" && secondQuestion !== "a" && secondQuestion !== "b" && secondQuestion !== "c" && thirdQuestion !== "a" && thirdQuestion !== "b" && thirdQuestion !== "c") {
  alert("Введите только один предложенный вариант");
}

var testRez = answerRez + " points";
console.log(testRez); //10)   Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var dayQuestion = +prompt("Введите день");
var monthQuestion = +prompt("Введите месяц");
var yearQuestion = +prompt("Введите год");
var dayRez = 0;
var monthRez = 0;
var yearRez = 0;
var dateResult;

if (dayQuestion < 0 || dayQuestion > 31) {
  dateResult = "Введите правильную дату";
} else if (monthQuestion < 0 || monthQuestion > 12) {
  dateResult = "Введите правильный месяц";
} else if (Number.isNaN(dayQuestion)) {
  dateResult = "Можно ввести только числовое значение";
} else if (Number.isNaN(monthQuestion)) {
  dateResult = "Можно ввести только числовое значение";
} else if (Number.isNaN(yearQuestion)) {
  dateResult = "Можно ввести только числовое значение";
}

if (dayQuestion === 31 && (monthQuestion == 1 || monthQuestion == 3 || monthQuestion == 5 || monthQuestion == 7 || monthQuestion == 8 || monthQuestion == 10)) {
  dayRez = 1;
  monthRez = monthQuestion + 1;
  yearRez = yearQuestion;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
} else if (dayQuestion === 30 && (monthQuestion == 4 || monthQuestion == 6 || monthQuestion == 9)) {
  dayRez = 1;
  monthRez = monthQuestion + 1;
  yearRez = yearQuestion;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
} else {
  dayRez = dayQuestion + 1;
  monthRez = monthQuestion;
  yearRez = yearQuestion;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}

if (dayQuestion === 29 && monthQuestion === 2 && (yearQuestion % 400 === 0 || yearQuestion % 4 === 0 && yearQuestion % 100 !== 0)) {
  dayRez = 1;
  monthRez = monthQuestion + 1;
  yearRez = yearQuestion;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
} else if (dayQuestion === 28 && monthQuestion === 2 && (yearQuestion % 400 !== 0 || yearQuestion % 4 !== 0 && yearQuestion % 100 === 0)) {
  dayRez = 1;
  monthRez = monthQuestion + 1;
  yearRez = yearQuestion;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}

if (dayQuestion === 31 && monthQuestion === 12) {
  dayRez = 1;
  monthRez = 1;
  yearRez = yearQuestion + 1;
  dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}

console.log(dateResult);
>>>>>>> kisilyova_hw22_js_operators
