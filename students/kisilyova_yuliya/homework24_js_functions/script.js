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
console.log(numbersPerfect(0,7));


