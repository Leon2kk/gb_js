// dz 5 

// -- Zadanie 1 --
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,
}
console.log("Все значения больше или равные 3");
for (var key in numbers) {
	if(numbers[key] >= 3)
	console.log(numbers[key]);
  }
console.log("------------------------------");
// ---------------

// -- Zadanie 2 --
//Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
const post = {
	author: "John", // вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2, // вывести это число
			},
		},
		{
		userId: 5, // вывести это число
		userName: "Jane",
		text: "lorem ipsum 2", // вывести этот текст
			rating: {
			likes: 3,
			dislikes: 1,
		},
		},
	],
	};
console.log("Данные из объекта");
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
console.log("------------------------------");

// -- Zadanie 3 --
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];
console.log("Уменьшенная цена");
products.forEach((element) => element.price *= 0.85);
console.log(products);
console.log("------------------------------");

// -- Zadanie 4 --
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products2 = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		],
	},
	{
		id: 5,
		price: 499,
		photos: [],
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg",
			],
	},
	{
		id: 8,
		price: 78,
	},
];

console.log("Все продукты");
console.log(products2);
console.log("Продукты с фото");
console.log(products2.filter((item) => (item.photos && item.photos[0])));
console.log("Отсортированные по цене");
console.log(products2.sort(( a, b ) => (a.price - b.price)));

// -- Zadanie 4 --
// Дано 2 массива 
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const enru = en.map((key, value) => ({ [key]: ru[value]}));
console.log("Объединение 2-х массивов");
console.log(enru);



