//Задание 1
console.log("js".toUpperCase()); // 'JS'

//Задание 2
//const products = [
   //['Кошка', 'Кит', 'Комар', 'Носорог'],
   //['яблоко', 'груша', 'гриб', 'огурец'],
   //['Дом', 'Банк', 'Больница', 'Театр'],
//]
//const search1 = 'ко';
//const search2 =  'гру';
//const search3 = 'Кино';
//products.forEach((product) => {
  //  if (product.toLowerCase().startsWith(search1.toLowerCase())) {
 //       console.log(product);
   // }
//});

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


//Задание 7

   

//Задание 8
let currentDat= new Date();
console.log(currentDat);


//Задание 9
let currentDate= new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10


