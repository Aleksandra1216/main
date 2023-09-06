// Задание 1
  function Number(num1, num2) {
    if (num1 <= num2) {
    return num1;
    } else {
    return num2;
    }
    }
    
    console.log(Number(8, 4)); // 4
    console.log(Number(6, 6)); // 6

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
function squareNumber(num) {
  var square = num * num;
  console.log(square);
}


function squareNumber(num) {
  var square = num * num;
  return square;
}

console.log(squareNumber(7));

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

function multiplyNumbers(num1, num2) {
let num1 =prompt("Введите первое число");
let num2 =prompt("Введите второе число");
  // Проверяем, являются ли параметры числами
 /if (isNaN(num1) || isNaN(num2)) {
/ return "Одно или оба значения не являются числом";
  }
  // Если оба параметра - числа, возвращаем их произведение
  return num1 * num2;
  }

// Задание 6

function cubeNumber() {
  let number = prompt("Введите число:");
  if (isNaN(number)) {
  return "Переданный параметр не является числом";
  } else {
  let cube = parseInt(number) ** 3;
  return `${number} в кубе равняется ${cube}`;
  }
  }

// Задание 7
// Задание 8