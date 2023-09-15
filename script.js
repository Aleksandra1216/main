//Задание 1
console.log("js".toUpperCase()); // 'JS'

//Задание 2
 function filterWords(array, keyword) {
   const filteredArray = array.filter(word => word.toLowerCase().startsWith(keyword.toLowerCase()));
   return filteredArray;
   }
   
   const words = ['apple', 'banana', 'orange', 'grapefruit'];
   const keyword = 'ap';
   
   console.log(filterWords(words, keyword)); //  ['apple']

//Задание 3
//До меньшего целого:
console.log(Math.floor(32.58884)); // 32
//До большего целого:
console.log(Math.ceil(32.58884)); // 33
//До ближайшего целого:
console.log(Math.round(32.58884)); // 33

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);

//Задание 5
function getRandomNumber() {
    // Генерируем рандомное число от 1 до 10
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber); // Выводим число в консоль
    }
    getRandomNumber();  // Вызываем функцию

  
//Задание 6
function getRandomArray(num) {
   const arr = [];
   const length = num / 2;
   
   for (let i = 0; i < length; i++) {
   arr.push(Math.floor(Math.random() * num));
   }
   return arr;
   }
   console.log(getRandomArray(8));

//Задание 7
function getRandomInt (num1, num2) {
   return Math.round (Math.random() * (num1 - num2)) + num2;
}
console.log(getRandomInt(3, 9));
   

//Задание 8
let currentDat= new Date();
console.log(currentDat);


//Задание 9
let currentDate= new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function formatDate(date) {
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = date.toLocaleDateString('ru-RU', options);
   const formattedTime = date.toLocaleTimeString('ru-RU');
   return `Дата: ${formattedDate} - это ${formattedDate.split(', ')[1]}'.
Время: ${formattedTime}`;
}
const date = new Date();
console.log(formatDate(date));


//
//

document.getQuerySelector('#game__btn').addEventListener('click',playFunc);
let fruits =['Яблоко','Дыня','Виноград','Персик','Апельсин','Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert (fruits);
let first= prompt('Чему равнялся первый элемент массива?');
let last= prompt('Чему равнялся последний элемент массива?');
   if (first === fruits[0] && last === fruits[fruits.length-1]) {
      alert("Поздравляем, вы угадали оба слова!");
   } else if(first === fruits[0] || last === fruits[fruits.length-1]){
      alert("Вы были близки к победе!");
   } else {
      alert("Вы ответили неверно.");
   }











