//Основы ООП (объектно-ориентированного программирования)

class Book {
  title;
  author;
  pages;
  constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
  }
  displayInfo(){
    console.log(`Name: "${this.title}", Author: "${this.author}", Pages: ${this.pages}`);
  }
}

const book = new Book("451 по Фаренгейту", "Рэй Брэдбери", 240);

book.displayInfo();


class Student {
  title;
  age;
  grade;
  constructor(title, age, grade) {
            this.title = title;
            this.age = age;
            this.grade = grade;
  }
  displayInfo(){
    console.log(`Name: ${this.title}\nAge: ${this.age}\nGrade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


