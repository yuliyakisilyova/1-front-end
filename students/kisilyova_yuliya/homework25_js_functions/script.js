1.//  Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function check(a, b) {
    if (a < b)
    console.log("-1");
    if (a > b)
    console.log("1");
    if (a === b)
    console.log("0");
}
check(6,5);


2.//  Написать функцию, которая вычисляет факториал переданного ей числа.
let rez = 1;
let i = 1;
let rezFactorial;
function factorial(n) {
    while (n > i) {
        rez = rez * n--;}
        return rez;
}
console.log(factorial(5))


3.//  Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function numbers(a, b, c) {
    a = a * 100;
    b = b * 10;
    c = c;
    result = a + b + c
    console.log(result);
}
numbers (7,5,5);


4.//  Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function perimetr(a, b) {
    if (a !==0 && b !==0) {
        squareRectangle = a * b;
        console.log(squareRectangle);
    }
    if (a === 0) {
        square = Math.pow(b, 2);
        console.log(square);
    }
    if (b === 0) {
        square = Math.pow(a, 2);
        console.log(square);
    }
}
perimetr (7,9);


5.//  Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function numberFind(a) {
    let sum = 0;
    for (i = 1 ; i < a; i++) {
        if (a % i === 0) sum += i;}
        if (sum === a) return true;
        else return false;
    }
console.log(numberFind(28));


6.//  Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
function numbersPerfect(min, max) {
    let i = min;
    let resultPerf = 0;
    while (i < max) {
        i++
        if (numberFind(i)) return i;
    }}
console.log(numbersPerfect(27,29));


7.//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(hours, min, sec) {
    let h = 0;
    let m = 0;
    let s = 0;
    if (hours < 24) {
        h = hours;
    }  else {
        return false;
    }
    if (hours < 10) {
        h = 0 + String(h);
    }

    if (min < 60) {
        m = min;
    } else {
        return false;
    }
    if (min < 10) {
        m = 0 + String(m);
    } 
    if (sec < 60) {
        s = sec;
    } else {
        return false;
    }
    if (sec < 10) {
        s = 0 + String(s);
    }
    return rez = `${h}:${m}:${s}`;
}
let resultClock = time(6,59,59);
console.log(resultClock);


8.//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function timeSec(hours, min, sec) {
    let rezSum = 0;
    return rezSum = hours * 3600 + min * 60 + sec;
}
let resultClockSec = timeSec(6,59,59);
console.log(resultClockSec);


9.//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function returnSecIntoTime(secAmount) {
    const hourRez = Math.floor(secAmount / 3600);
    const minRez = Math.floor(secAmount / 60) - hourRez * 60;
    const secRez = secAmount - hourRez * 3600 - minRez * 60;
    return rez = `${hourRez}:${minRez}:${secRez}`;
}
let resultNewTime = returnSecIntoTime(27077);
console.log(resultNewTime);


10.// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function differenceDates(hour1, min1, sec1, hour2, min2, sec2) {
    if (hour1 > 23 || hour2 > 23 || min1 > 59 || min2 > 59 || sec1 > 59 || sec2> 59) {
        return false;
    }
    const amountSec1 = timeSec(hour1, min1, sec1);
    const amountSec2 = timeSec(hour2, min2, sec2);
    let secDiff = 0;
    if (amountSec1 > amountSec2) {
        let secDiff = amountSec1 - amountSec2;
        return returnSecIntoTime(secDiff);
    } else if (amountSec1 < amountSec2) {
        let secDiff = amountSec2 - amountSec1
        return returnSecIntoTime(secDiff);
    } 
}
console.log(differenceDates(23,59, 59, 23, 24, 24));
