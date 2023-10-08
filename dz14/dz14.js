//Объектно-ориентированное программирование в Javascript

// Задание 1.
class Employee {
  name;
  constructor(name) {
            this.name = name;
  }
  displayInfo(){
    console.log(`Name: "${this.name}"`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();


class Manager extends Employee {
  department;
  constructor(name, department) {
            super(name);
            this.name = name;
            this.department = department;
  }
  displayInfo(){
    console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
  }
}

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Задание 2.

class Product{
  name;
  price = 0;
  constructor(name, price) {
            this.name = name;
            this.price = price;
  }
  displayInfo(){
    console.log(`Name: "${this.name}" - ${this.price}`);
  }
}

class Order{
  orderNumber;
  products = [];
  constructor(orderNumber) {
            this.orderNumber = orderNumber;
  }
  addProduct(product){
    this.products.push(product);
  }
  getTotalPrice(){
    let totalPrice = 0;
    this.products.forEach((value) => {totalPrice += value.price});
    return totalPrice;
  }
}


const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600