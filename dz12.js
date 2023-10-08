// dz 5 



// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
console.log('1) Результат: ' + Math.min(...[1, 5, 7, 9]));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
	let count = 0;
   	return {
		increment : function(){
			return ++count;
		},
		decrement : function(){
			return --count;
		},
	};
  }
  
  const crt = createCounter();
  console.log('2) Результат: ');
  console.log(crt.increment()); //1
  console.log(crt.increment()); //2
  console.log(crt.increment()); //3
  console.log(crt.decrement()); //2
  console.log(crt.decrement()); //1
  console.log(crt.decrement()); //0


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(elements, findclass){
	console.log(elements +' '+ findclass);
	
		let item = elements;
			if (!item.classList.contains(findclass))
			{   
				console.log('true');
				return item;
				
			}
		else 
			{
			if	(!item.childNodes) 
				console.log('false');
				findElementByClass(item.childNodes, findclass);
			}
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


