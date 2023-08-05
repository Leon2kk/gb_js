// dz 4 

// -- Zadanie 1 --
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль 1 – нечетное число 2 – четное число 3 – нечетное число ... 10 – четное число

for (let i = 0; i <= 10; i++) {
	
	if (i === 0) {
		console.log('0 - это ноль');
		continue;
	}

	console.log(`${i} - ${(i % 2 === 0?'четное число':'нечетное число')}`);

  }
// ---------------

// -- Zadanie 2 --
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const mas  = [1, 2, 3, 4, 5, 6, 7];
console.log(`${mas} -> ${mas.splice(3,2)} -> ${mas}`);

// -- Zadanie 3 --
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const masNum = [];
let n = 5;
let fined = 3;

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSumInteger(massum) {
	return massum.reduce((a, b) => a + b, 0);	
}

function getMinInteger(masmin) {
	return Math.min.apply(masmin[0], masmin);
}

function getFindInteger(masfind, fined) {
	return masfind.indexOf(fined);
}

for (let i = 0; i < n; i++)
	masNum.push(getRndInteger(0, 9));

console.log(`Числа ${masNum}`);
console.log(`Сумма чисел ${masNum} = ${getSumInteger(masNum)}`);
console.log(`Мин число из ${masNum} = ${getMinInteger(masNum)}`);
console.log(`${fined} - ${(getFindInteger(masNum)?'содержится':'не содержится')} в ${masNum}`);


let piromid = '';
for (let i = 0; i < 20; i++)
{
	piromid += '*';
	console.log(piromid);
}
	
