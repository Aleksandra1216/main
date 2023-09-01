// Задание 1
let a;    // объявляем переменную
a = 10;    // записываем в нее значение 1
alert(a); // выведет 10
a = 20;    // записываем теперь значение 20, затирая значение 10
alert(a); // выведет 20

//Задание 2
let years = " 2007";
alert(years);


//Задание 3
let name = "Брендан Айк";
alert(name);


//Задание 4
let b = 10;
let c = 2;
alert(`сумма: ${b + c} `);
alert(`разность: ${b - c} `);
alert(`произведение: ${b * c} `);
alert(`частное: ${b / c} `);

//Задание 5
let d = 2;
let result = d ** 5;
alert(result);


//Задание 6
let e = 9;
let f = 2;
alert(e % f);


//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);


//Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);


//Задание 9.0
let user = {
    name: "Kirill",
    age: "18",
    isAdmin: "true",
}

//Задание 9.1
user['city of residence']= "Moscow",


//Задание 9.2
user.age = 34;


//Задание 9.3
delete user["city of residence"];

//Задание 9.4
let info= prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);