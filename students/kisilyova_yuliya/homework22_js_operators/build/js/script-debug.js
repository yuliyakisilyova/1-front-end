"use strict";

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