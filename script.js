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
// Задание 9
// Задание 10
// Задание 11
// Задание 12
// Задание 13