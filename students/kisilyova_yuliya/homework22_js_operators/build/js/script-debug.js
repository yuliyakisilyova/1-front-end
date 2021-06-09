"use strict";

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
var a = parseInt(askNumber3 / 10000);
var b = parseInt(askNumber3 / 1000 % 10);
var c = parseInt(askNumber3 / 100 % 10);
var d = parseInt(askNumber3 / 10 % 10);
var e = parseInt(askNumber3 % 10);