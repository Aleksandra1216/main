function dellMessage() {
  let del= confirm ('Вы правда хотите начать игру?');
  if (del) {
    alert('Начинаем!');
  }  else {
    alert('В следующий раз');
}
}

// Задание 1
function getMinNumber(a, b) {
  if (a <= b) {
  return a;
  } else {
  return b;
  }
  }
  
  console.log(getMinNumber(8, 4)); // 4
  console.log(getMinNumber(6, 6)); // 6 


// Задание 2
function checkEvenOdd(number) {
  if (number % 2 === 0) {
  return 'Число четное';
  } else {
  return 'Число нечетное';
  }
  }
  
  // Примеры использования:
  console.log(checkEvenOdd(4)); // Число четное
  console.log(checkEvenOdd(7)); // Число нечетное
 
// Задание 3
function squareNumber(n) {
  var square = n * n;
  console.log(square);
}

function squareNumber(n) {
  return n;
}
console.log(squareNumber(2));


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
function multiplyNumbers(d, c) {
  // Проверяем, являются ли параметры числами
  if (isNaN(d) || isNaN(c)) {
  return 'Одно или оба значения не являются числом';
  }
  
  // Если оба параметра - числа, возвращаем их произведение
  return d * c;
  }
  console.log(multiplyNumbers(1));
  console.log(multiplyNumbers(1));
 

 
// Задание 6
function cubeNumber() {
  let num = prompt("Введите число:");
  if (isNaN(num)) {
  return "Переданный параметр не является числом";
  } else {
  let cube = parseInt(num) ** 3;
  return (`${num} в кубе равняется ${cube}`);
  }
  }
  
  console.log(cubeNumber(5));
  

  
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
function getSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
  return "Зима";
  } else if (month === 3 || month === 4 || month === 5) {
  return "Весна";
  } else if (month === 6 || month === 7 || month === 8) {
  return "Лето";
  } else if (month === 9 || month === 10 || month === 11) {
  return "Осень";
  } else {
  return "Неправильный параметр!";
  }
  }
  
  console.log(getSeason(9)); // Вывод: Осень