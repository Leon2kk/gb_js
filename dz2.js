// dz 2

// -- Zadanie 1 --
let num1 = prompt('Введите num1');
if (num1 <= 1) {
console.log('введенное значение меньше или равно <= 1');
} else {
console.log('введенное значение больше >= 1');
}
let num2 = prompt('Введите num2');
if (num2 >= 3) {
console.log('введенное значение больше или равно >= 3-м');
} else {
console.log('введенное значение меньше <= 3');
}

// -- Zadanie 2 --
let test = true;
console.log((test === true?'+++':'---'));

// -- Zadanie 3 --
let day = 21;
if (day <= 10){
 console.log('1-ая декада');
} else if (day <= 20){
	console.log('2-ая декада');
}
else {
	console.log('3-ая декада');
}

// -- Zadanie 4 --
let num = 678;
console.log(`В числе ${num} количество сотен: ${((num%1000)-(num%100))/100}, десятков: ${((num%100)-(num%10))/10}, единиц: ${num%10}`);