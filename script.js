//Задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people1.sort((a, b) => a.age - b.age);
console.log(people1);

//Задание 2
function map(arr, transformFunction) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var transformedItem = transformFunction(arr[i]);
    result.push(transformedItem);
  }
  return result;
}

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  return map(arr, function(item) {
    if (ruleFunction(item)) {
      return item;
    }
  }).filter(Boolean); // убираем все falsy значения из результирующего массива
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3
function printCurrentDate() {
  const currentDate = new Date();
  console.log(currentDate);
}

function executeEvery3Seconds() {
  return setInterval(printCurrentDate, 3000);
}

const intervalId = executeEvery3Seconds();

setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);

//Задание 4
function delayForSecond(callback) {
  setTimeout (function() {
  callback();
  }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'))
