// задание 1
let password = String( prompt('Какой пароль'));
if (password >= 8) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно')
}

// задание 2
let c = String(prompt('введите число'));
(c >= 0 && c <= 10) ? console.log('Верно') : console.log('неверно');


// задание 3
let d =String(prompt('Введите какое то число'));
let e =String(prompt('Введите какое то число'));
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}


// задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert( +a + +b ); // 5


// задание 5
let monthNamber =String(prompt('Введите месяц'));
switch(monthNamber) {
    case '1':
        console.log('зима');
        break;
    case '2':
        console.log('зима');
        break;
    case '3':
        console.log('весна');
        break;
    case '4':
        console.log('весна');
        break;
    case '5':
        console.log('весна');
        break;
    case '6':
        console.log('лето');
        break;
    case '7':
        console.log('лето');
        break;
    case '8':
        console.log('лето');
        break;
    case '9':
        console.log('осень');
        break;
    case '10':
        console.log('осень');
        break;
    case '11':
        console.log('осень');
        break;
    case '12':
        console.log('зима');
        break;
}
