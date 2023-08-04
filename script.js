// dz 3 (functions)

// -- Zadanie 1 --
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

numCube(prompt("Задание 1. Введите число для возведения в куб"));

function numCube(num) {
	console.log(`Число ${num}³ =  ${num * num * num}`);
}
// ---------------


// -- Zadanie 2 --
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let zp = prompt("Задание 2. Введите заработную плату");

if (Number.isInteger(Number(zp)))
	console.log(`Размер заработной платы за вычетом налогов равен ${ZP(zp)}`);
else
	console.log("Значение задано неверно");

function ZP(num){
	return num *= 0.87;
}
// ---------------

// -- Zadanie 3 --
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
alert("Задание 3. Введите три числа")
let num1 = prompt("Введите 1-ое число");
let num2 = prompt("Введите 2-ое число");
let num3 = prompt("Введите 3-ое число");

let maxNum = (n1, n2, n3) => { return Math.max(n1, n2, n3) };

console.log(`Максимальное значение среди ${num1}, ${num2}, ${num3} = ` + maxNum(num1, num2, num3));
// ---------------

// -- Zadanie 4 --
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение 2. Разность 3. Умножение 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
alert("Задание 4. Введите два числа");
num1 = prompt("Введите 1-ое число");
num2 = prompt("Введите 2-ое число");

let sum = (n1, n2) => Number(n1) + Number(n2);
let diff = (n1, n2) => Math.abs(n1 - n2);
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => (n1 / n2).toFixed(2);

console.log(`${num1} + ${num2} = ` + sum(num1, num2));
console.log(`${num1} - ${num2} = ` + diff(num1, num2));
console.log(`${num1} * ${num2} = ` + multiply(num1, num2));
console.log(`${num1} / ${num2} = ` + divide(num1, num2));
// ---------------
