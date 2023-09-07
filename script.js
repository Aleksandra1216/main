// Задание 1
let q = Number(prompt('Введите число'));
let w = Number(prompt('Введите число'));
   if (q < w) {
    console.log(q);
   } else {
    console.log(w);
   }

// Задание 2
let d = Number(prompt('Введите число'));
 if (d % 2 === 0) {
  console.log("Число четное");
  } else {
     console.log("Число нечетное");
  }
 
// Задание 3
let n = (prompt('Введите число'));
console.log(`${n*n}`);
console.log(n);

// Задание 4
let age = parseInt(prompt("Сколько вам лет?"));
if (age < 0) {
  console.log("Вы ввели неправильное значение");
} else if (age <= 12) {
 console.log("Привет, друг!");
} else {
 console.log("Добро пожаловать!");
}

// Задание 5
let num1=Number(prompt('Введите число'));
let num2=Number(prompt('Введите число'));
  // Проверяем, являются ли параметры числами
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Одно или оба значения не являются числом");
  } else{
    console.log (`${num1*num2}`);
  }

 
// Задание 6
  let number = prompt("Введите число:");
  if (isNaN(number)){
    console.log("Переданный параметр не является числом");
  } else {
    let cube = parseInt(number) ** 3;
    console.log(`${number} в кубе равняется ${cube}`);
  }

  
// Задание 7
// Создание объекта circle1
let circle1 = {
  radius: 5, // установка свойства radius
  
  // Метод, возвращающий площадь круга
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  
  // Метод, возвращающий периметр окружности
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

// Создание объекта circle2
let circle2 = {
  radius: 10, // установка свойства radius
  
  // Метод, возвращающий площадь круга
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  
  // Метод, возвращающий периметр окружности
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

// Вызов методов объекта circle1 для получения площади и периметра
console.log(circle1.getArea()); // Вывод: 78.53981633974483
console.log(circle1.getPerimeter()); // Вывод: 31.41592653589793

// Вызов методов объекта circle2 для получения площади и периметра
console.log(circle2.getArea()); // Вывод: 314.1592653589793
console.log(circle2.getPerimeter()); // Вывод: 62.8318530717958


// Задание 8
let month= (prompt('Введите число месяца'));
  if (month === 12 && month >=1 && month <= 2) {
  console.log("Зима"); 
  } else if (month >= 3  && month <= 5) {
  console.log("Весна") ;
  } else if (month >= 6 &&  month <= 8) {
  console.log("Лето"); 
  } else if (month >=9 && month <= 11) {
  console.log("Осень"); 
  } else  {
  console.log("Неправильный параметр!"); 
 }