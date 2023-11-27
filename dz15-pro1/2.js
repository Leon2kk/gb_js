"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const povar = new Map();
povar.set('Пицца', 'Олег');
povar.set('Суши', 'Андрей');
povar.set('Десерт', 'Анна');

const proposedDish = new Set();
proposedDish.add('Маргарита')
            .add('Пепперони')
            .add('Три сыра')
            .add('Филадельфия')
            .add('Калифорния')
            .add('Чизмаки')
            .add('Сеякемаки')
            .add('Тирамису')
            .add('Чизкейк');


function dishValidate(itemDish) {
  let flag = true;
  itemDish.forEach((n) => {
      if (!proposedDish.has(n.name)) {
          flag = false;
      }
  });
  return flag;
}

function checkOrder(orders, client) {
  if (!dishValidate(orders)) {
      console.log('нет такой позиции');
  } else {
      console.log(`Клиент ${client.firstname} заказал:`);
      orders.forEach(order => {
          console.log(`${order.type} "${order.name}"- ${order.quantity}; Готовит повар ${povar.get(order.type)};`);
      });
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  newOrder(client, ...args) {
    client = new Client(client.firstname, client.lastname);
    let arr = [];
    for (const arg of args) {
      const order = {};
      order.name = arg.name;
      order.type = arg.type;
      order.quantity = arg.quantity;
      arr.push(order);
    }
    checkOrder(arr, client);
    return arr;
  };
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.