// Задание 1
const numbs = [1,5,4,0,3];
for (let i =0; i < numbs.length; i++){
    if (numbs [i]==10);
    console.log(numbs[i]);
}

// Задание 2
let tasktwo= [1,5,4,10,0,3];
let res = tasktwo.indexOf(4);

console.log(res); //Выводит 2

// Задание 3
let taskthree= ['1','3','5','10','20'];
result= taskthree.join(' ');
console.log(result); //1 3 5 10 20

// Задание 4
var array = [];

for (var i = 0; i < 3; i++) {
var innerArray = [];
for (var j = 0; j < 3; j++) {
innerArray.push(1);
}
array.push(innerArray);
}

console.log(array);


// Задание 5
var array = [1, 1, 1];
array.push(2, 2, 2);

console.log(array);


// Задание 6
let taskfive = [9, 8, 7,'a', 6, 5];
// Удаление буквы 'a'
taskfive = taskfive.filter(element => typeof element === 'number');
// Сортировка массива
taskfive.sort();
// Вывод отсортированного массива
console.log(taskfive);


// Задание 7
let b = [9,8,7,6,5]
let a = Number(prompt('Угадайте число'));
if (b.includes(Number(a))) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}

// Задание 8
const num = ['a','b','c','d','e','f'];
num.reverse();
console.log(num);


// Задание 9
let task=[
    [1, 2, 3,],
    [, 4, 5, 6],
];
task= task.join('');
console.log(task);

// Задание 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];

for(let i = 0; i < arr.length - 1; i++) {
let sum = arr[i] + arr[i + 1];
console.log(sum);
}

// Задание 11
function getWord(arr) {
    return arr.map(word => (word ** 2));
  }
const salary = [2, 5, 7, 3, 1];
console.log (getWord(salary));

// Задание 12
function getWordLengths(arr) {
    return arr.map(word => word.length);
  }
  
const sal = ['слово', 'цифра', 'слог', 'длинное предложение', 'буква'];
console.log(getWordLengths(sal)); //5,5,4,18,5

// Задание 13
function filterPositive(array) {
    return array.filter(num => num < 0);
  }

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]
