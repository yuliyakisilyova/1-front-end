1.//  Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let rangeStart = +prompt("Введите начало диапазона");
let rangeEnd = +prompt("Введите конец диапазона");
let rangeSum = 0;
if (Number.isNaN(rangeStart)) {
    rangeSum = "Можно ввести только число";
}
else if (Number.isNaN(rangeEnd)) {
    rangeSum = "Можно ввести только число";
}

while(rangeStart <= rangeEnd){       
    rangeSum += rangeStart;  
    rangeStart++;
    }
console.log(rangeSum)


2.//  Запросить 2 числа и найти только наибольший общий делитель.
/*let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let rezDel;
i = 0;
if (a === b) {
    rezDel = "Наибольший общий делитель - " + firstNum;
}
if (firstNum > secondNum) {
    while (i < secondNum) {
        i++
        if ({

        }
    }
}*/
str1 = prompt("Введите первое число",'');
var num1 = parseInt(str1);
str2 = prompt("Введите второе число",'');
var num2 = parseInt(str2);
var delitel = 0, p, r;
    if (num1 < num2){p=num2; num2=num1; num1=p;} 
    do { 
        if (num1%num2==0){
            delitel=num2;
            } 
        else {
            r=num2;
            num2=num1%num2;   
            num1=r;    
            delitel = num2; 
           }
        } 
        while (num1%num2!=0);
        if (delitel!=1) { 
            document.write("Наибольшим общим делителем чисел" + str1 + " и " + str2 + " является число..." + delitel);
            }
        else {
          document.write("Общего делителя нет");
            }
console.log("document.write")
